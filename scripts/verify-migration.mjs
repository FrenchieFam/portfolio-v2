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
const currentBio = "Homelab engineer, automation builder, and AI tinkerer. I build self-hosted infrastructure, local AI systems, and automated media pipelines. I also edit podcasts into short-form clips using a local-first pipeline (Whisper + Ollama) so nothing leaves my machine. Based in the US, working with clients worldwide.";
assert(home.includes(currentBio), 'Exact requested bio missing');
assert(home.includes('Role:</span> Homelab engineer, automation builder, and AI tinkerer.'));
const legacyHome = await readFile('dist/legacy/index.html', 'utf8');
assert(legacyHome.includes(manifest.bio), 'Original bio must remain in legacy');
for (const expected of [ 'Frenchie Familia | Homelab &amp; Automation',
  'Media Automation Pipeline', 'Local AI RAG System', 'Baddies Downloader',
  'Docker', 'Linux', 'Python', 'n8n', 'Tailscale', 'Ollama', 'Astro',
  'https://github.com/frenchiefam', 'https://frenchiefam.dev/gutierrez-handyman-booking/',
  'gitea (private tailnet)', 'Since 2024', 'Podcast Clipping Pipeline']) {
  assert(home.includes(expected), `Missing ${expected}`);
}
for (const href of manifest.originalHomeLinks) {
  assert(home.includes(href.replaceAll('&', '&amp;')) || home.includes(href), `Missing original contact ${href}`);
}
const projectSection = home.match(/<section id="projects"[^>]*>([\s\S]*?)<\/section>/)?.[1];
const serviceSection = home.match(/<section id="services"[^>]*>([\s\S]*?)<\/section>/)?.[1];
assert(projectSection && serviceSection, 'Projects and Services sections required');
assert.equal((projectSection.match(/<details\b/g) || []).length, 4, 'Exactly four projects expected');
assert.equal((serviceSection.match(/<details\b/g) || []).length, 3, 'Exactly three services expected');
assert(home.indexOf('id="services"') > home.indexOf('id="projects"'));
assert(projectSection.includes('https://www.fiverr.com/s/K334ZWW'));
assert(!projectSection.includes('/legacy/'), 'Project cards must not link to legacy');
for (const text of [
  'Local-first pipeline (Whisper + Ollama) for short-form content.',
  'Custom automation and self-hosted AI solutions for your business.',
  'Templates, guides, and tools for creators and homelabbers.'
]) assert(serviceSection.includes(text), `Missing service description: ${text}`);
for (const href of [
  'https://www.fiverr.com/s/K334ZWW',
  'https://bryfryugc.gumroad.com/l/first-three-clients',
  'mailto:frenchiefamdigital@gmail.com?subject=Custom%20AI%20Workflow%20Inquiry'
]) assert(serviceSection.includes(`href="${href}"`), `Missing service action: ${href}`);
assert(home.includes('curl https://contact.local'));
assert(!/100\.(?:6[4-9]|[7-9]\d|1[01]\d|12[0-7])\.\d{1,3}\.\d{1,3}/.test(home), 'Tailnet IP must not be published');
assert(!home.includes('Always learning'));
assert(home.includes('An end-to-end, local-first podcast clipping pipeline using Whisper and Ollama.'));
const styles = await readFile('src/styles/global.css', 'utf8');
assert(styles.includes('html { font-size: 80%; }'));
assert(!home.includes('John Doe'));
assert(!home.includes('johndoe'));
assert(!home.includes('Open Source Corp'));
assert(root.includes(`${process.env.PAGES_BASE_PATH || ''}/en/`));
assert((await readFile('dist/legacy/index.html', 'utf8')).includes(manifest.bio));
await assert.rejects(access('public/CNAME'));
console.log(`Verified ${manifest.files.length} original files in source/build, legacy bio/links, exact current bio, four projects, three services, redacted tailnet links, compact typography and skills, branding, preview paths and no domain cutover.`);
