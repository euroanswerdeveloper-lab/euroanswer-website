// Șterge din dist/ imaginile din /wp-content/uploads/ care nu mai sunt folosite de nicio pagină.
// Rulează după build, înainte de arhivare: node scripts/prune-unused-uploads.mjs
import { readdir, readFile, stat, unlink } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

// 1. Colectăm toate referințele din fișierele text ale site-ului
const used = new Set();
for await (const file of walk(DIST)) {
  if (!/\.(html|xml|txt|css|js|json|php)$/.test(file)) continue;
  const text = await readFile(file, 'utf8');
  for (const m of text.matchAll(/\/wp-content\/uploads\/[^"'\s)<>?#]+/g)) {
    used.add(decodeURIComponent(m[0].replace(/&amp;/g, '&')));
  }
}

// 2. Ștergem imaginile nefolosite
let removed = 0, kept = 0, freed = 0;
for await (const file of walk(join(DIST, 'wp-content', 'uploads'))) {
  const url = '/' + relative(DIST, file).split(sep).join('/');
  if (used.has(url)) { kept++; continue; }
  freed += (await stat(file)).size;
  await unlink(file);
  removed++;
}
console.log(`Imagini păstrate: ${kept} · șterse: ${removed} · spațiu eliberat: ${(freed / 1024 / 1024).toFixed(1)} MB`);
