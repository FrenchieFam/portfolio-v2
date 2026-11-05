import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const manifest = JSON.parse(await readFile('docs/migration-manifest.json', 'utf8'));
for (const file of manifest.files) {
  const bytes = await readFile(join('public/legacy', file.path));
  assert.equal(createHash('sha256').update(bytes).digest('hex'), file.sha256, file.path);
  const built = await readFile(join('dist/legacy', file.path));
  assert.equal(createHash('sha256').update(built).digest('hex'), file.sha256, `built ${file.path}`);
}
const home = await readFile('dist/en/index.html', 'utf8');
const root = await readFile('dist/index.html', 'utf8');
for (const expected of [manifest.bio, 'Frenchie Familia | Homelab &amp; Automation',
  'Media Automation Pipeline', 'Local AI RAG System', 'Baddies Downloader',
  'Docker', 'Linux', 'Python', 'n8n', 'Tailscale', 'Ollama', 'Astro',
  'https://github.com/frenchiefam', 'https://frenchiefam.dev/gutierrez-handyman-booking/',
  'http://100.81.148.117:3020']) {
  assert(home.includes(expected), `Missing ${expected}`);
}
for (const href of manifest.originalHomeLinks) {
  assert(home.includes(href.replaceAll('&', '&amp;')) || home.includes(href), `Missing original contact ${href}`);
}
assert(!home.includes('John Doe'));
assert(!home.includes('johndoe'));
assert(!home.includes('Open Source Corp'));
assert(root.includes(`${process.env.PAGES_BASE_PATH || ''}/en/`));
assert(home.includes(`${process.env.PAGES_BASE_PATH || ''}/legacy/`));
await assert.rejects(access('public/CNAME'));
console.log(`Verified ${manifest.files.length} original files in source/build, original bio/links, new projects and skills, branding, preview paths and no domain cutover.`);
