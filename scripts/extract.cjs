const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../../stitch-html');
const OUT_DIR = path.resolve(__dirname, '../public/pages');

const files = [
  'platform.html',
  'how-it-works.html',
  'use-cases.html',
  'missing-layer.html',
  'execution-library.html',
  'terms.html',
  'privacy.html',
  'cookies.html',
];

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const file of files) {
  let html = fs.readFileSync(path.join(SRC_DIR, file), 'utf8');

  // Strip the FIRST <nav ...>...</nav> (non-greedy)
  html = html.replace(/<nav[\s\S]*?<\/nav>/, '');

  // Strip the LAST <footer ...> ... </footer>
  const footerOpen = html.lastIndexOf('<footer');
  if (footerOpen !== -1) {
    const footerClose = html.indexOf('</footer>', footerOpen);
    if (footerClose !== -1) {
      html = html.slice(0, footerOpen) + html.slice(footerClose + '</footer>'.length);
    }
  }

  // Add top padding so body content not hidden behind our React fixed nav
  html = html.replace(
    /<body([^>]*)>/,
    '<body$1><div style="height:72px"></div>'
  );

  fs.writeFileSync(path.join(OUT_DIR, file), html);
  console.log('wrote', file, html.length, 'bytes');
}
