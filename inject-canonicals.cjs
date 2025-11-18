const fs = require('fs');
const path = require('path');

const BASE = 'https://gowiselearning.co.uk';
const presiteDir = path.join(process.cwd(), '.presite');

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full);
    } else if (file.endsWith('.html')) {
      let html = fs.readFileSync(full, 'utf8');

      const relative =
        '/' +
        path
          .relative(presiteDir, full)
          .replace(/index\.html$/, '')
          .replace(/\\/g, '/');

      const url = BASE + (relative.endsWith('/') ? relative : relative + '/');

      html = html.replace('</head>', `\n\n  <link rel="canonical" href="${url}" />\n</head>`);

      fs.writeFileSync(full, html, 'utf8');
    }
  }
}

walk(presiteDir);
console.log('Canonical tags injected.');
