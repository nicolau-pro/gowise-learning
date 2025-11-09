const fs = require('fs');
const path = require('path');

const presiteDir = path.join(process.cwd(), '.presite');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.html')) {
      let html = fs.readFileSync(fullPath, 'utf8');

      // Simple global replacement
      const updated = html.replace(/data-href=/g, 'href=');

      // Write back only if something changed
      if (updated !== html) {
        fs.writeFileSync(fullPath, updated, 'utf8');
        console.log(`✅ Updated: ${fullPath}`);
      }
    }
  }
}

console.log('🔗 Replacing data-href with href in .presite...');
processDir(presiteDir);
console.log('✅ All replacements completed successfully.');
