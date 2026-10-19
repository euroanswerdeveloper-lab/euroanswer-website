// Exportă paginile și articolele din WordPress (REST API) în fișiere Markdown.
// Imaginile se descarcă în public/wp-content/uploads/ ca vechile URL-uri să funcționeze în continuare.
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname } from 'node:path';
import TurndownService from 'turndown';

const SITE = 'https://www.euroanswer.co.uk';
const SKIP = ['login-customizer', 'test']; // pagini tehnice / de test
const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' });
td.remove(['script', 'style', 'noscript', 'iframe', 'form']);

async function fetchAll(type) {
  const items = [];
  for (let page = 1; ; page++) {
    const res = await fetch(`${SITE}/wp-json/wp/v2/${type}?per_page=100&page=${page}&_embed=wp:featuredmedia,wp:term`);
    if (!res.ok) break;
    const batch = await res.json();
    items.push(...batch);
    if (page >= Number(res.headers.get('x-wp-totalpages'))) break;
  }
  return items;
}

const images = new Set();
function collectImages(html) {
  for (const m of html.matchAll(/https?:\/\/(?:www\.)?euroanswer\.co\.uk(\/wp-content\/uploads\/[^"'\s)?]+\.(?:jpe?g|png|gif|webp|svg))/gi)) {
    images.add(m[1]);
  }
  // linkurile absolute către imagini devin relative
  return html.replace(/https?:\/\/(?:www\.)?euroanswer\.co\.uk(\/wp-content\/uploads\/)/gi, '$1');
}

const decode = (s) => s.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#8217;/g, '’').replace(/<[^>]+>/g, '').trim();
const yaml = (s) => JSON.stringify(s ?? '');

function langAndPath(link) {
  const path = decodeURIComponent(new URL(link).pathname);
  const m = path.match(/^\/(de|ru)\//);
  return { lang: m ? m[1] : 'en', path };
}

async function exportType(type, folder) {
  const items = await fetchAll(type);
  let count = 0;
  for (const item of items) {
    const slug = decodeURIComponent(item.slug);
    if (SKIP.includes(slug)) continue;
    const { lang, path } = langAndPath(item.link);
    const seo = item.yoast_head_json ?? {};
    const featured = item._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const terms = (item._embedded?.['wp:term'] ?? []).flat();
    const html = collectImages(item.content.rendered + (featured ? `<img src="${featured}">` : ''));
    const body = td.turndown(html.replace(/<img src="[^"]*">$/, ''));

    const fm = [
      '---',
      `title: ${yaml(decode(item.title.rendered))}`,
      `seoTitle: ${yaml(seo.title)}`,
      `description: ${yaml(seo.description ?? decode(item.excerpt?.rendered ?? ''))}`,
      `lang: ${lang}`,
      `path: ${yaml(path)}`,
      type === 'posts' ? `date: ${item.date.slice(0, 10)}` : null,
      featured ? `image: ${yaml(collectImages(featured))}` : null,
      type === 'posts' ? `categories: ${JSON.stringify(terms.filter((t) => t.taxonomy === 'category').map((t) => decode(t.name)))}` : null,
      `wpId: ${item.id}`,
      '---',
      '',
    ].filter((l) => l !== null).join('\n');

    const file = `src/content/${folder}/${lang}/${slug}.md`;
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, fm + body + '\n');
    count++;
  }
  console.log(`${folder}: ${count} fișiere`);
}

await exportType('pages', 'pages');
await exportType('posts', 'blog');

let downloaded = 0, failed = [];
for (const img of images) {
  const file = `public${img}`;
  try { await access(file); continue; } catch {}
  const res = await fetch(SITE + img);
  if (!res.ok) { failed.push(img); continue; }
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
  downloaded++;
}
console.log(`imagini: ${downloaded} descărcate, ${failed.length} eșuate`);
if (failed.length) await writeFile('migration/failed-images.txt', failed.join('\n'));
