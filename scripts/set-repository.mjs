import { readFileSync, writeFileSync } from 'node:fs';
const url = process.argv[2];
if (!url || !/^https:\/\/github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_.-]+\/?$/.test(url)) {
  console.error('Usage: node scripts/set-repository.mjs https://github.com/OWNER/REPO');
  process.exit(1);
}
const path = 'public/index.html';
let html = readFileSync(path, 'utf8');
html = html.replace(/(<a id="source-link" href=")[^"]+/, '$1' + url).replace('Featured project source ↗', 'Portfolio source ↗');
writeFileSync(path, html);
console.log('Portfolio repository link updated. Run npm run build before deploying.');
