// Citește sitemap-ul WordPress și salvează toate URL-urile în migration/urls.json
import { mkdir, writeFile } from 'node:fs/promises';

const SITE = 'https://www.euroanswer.co.uk';
const locs = (xml) => [...xml.matchAll(/<loc>\s*(.*?)\s*<\/loc>/g)].map((m) => m[1]);

const index = await (await fetch(`${SITE}/sitemap_index.xml`)).text();
const result = {};

for (const sitemap of locs(index)) {
  const name = sitemap.split('/').pop().replace('-sitemap.xml', '');
  const xml = await (await fetch(sitemap)).text();
  result[name] = locs(xml).filter((u) => !/\.(jpe?g|png|webp|gif|svg)$/i.test(u));
  console.log(`${name}: ${result[name].length} URL-uri`);
}

await mkdir('migration', { recursive: true });
await writeFile('migration/urls.json', JSON.stringify(result, null, 2));
console.log('Salvat în migration/urls.json');
