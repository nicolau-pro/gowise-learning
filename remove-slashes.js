import fs from 'fs';
import glob from 'glob';

for (const file of glob.sync('**/*.html', { ignore: 'node_modules/**' })) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/(<(?:meta|link|img|br|hr|input)\b[^>]*?)\s*\/>/gi, '$1>');
  fs.writeFileSync(file, html);
}
