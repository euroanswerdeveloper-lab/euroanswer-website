// Verifică dacă fiecare URL din vechiul sitemap există în build-ul nou (dist/)
import { readFile, access } from 'node:fs/promises';

const urls = JSON.parse(await readFile('migration/urls.json', 'utf8'));
const missing = [];
for (const [group, list] of Object.entries(urls)) {
  for (const url of list) {
    const path = decodeURIComponent(new URL(url).pathname);
    try { await access(`dist/client${path}index.html`); } catch { missing.push(`${group}\t${path}`); }
  }
}
console.log(missing.length ? `Lipsesc ${missing.length}:\n${missing.join('\n')}` : 'Toate URL-urile există.');
