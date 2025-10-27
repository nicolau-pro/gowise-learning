import fs from 'fs';
import path from 'path';

const folderPath = path.resolve('.presite');

function removeJsScripts(filePath) {
  try {
    let html = fs.readFileSync(filePath, 'utf8');

    // Remove all <script> tags loading /assets/index-*.js
    const cleaned = html.replace(
      /<script[^>]*src="\/assets\/index-[^"]*\.js"[^>]*><\/script>\s*/g,
      ''
    );

    if (cleaned !== html) {
      fs.writeFileSync(filePath, cleaned, 'utf8');
      console.log('🧹 Removed JS import from:', filePath);
    }
  } catch (err) {
    console.error('❌ Error processing:', filePath, err.message);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (file === 'index.html') {
      removeJsScripts(fullPath);
    }
  }
}

// Run cleanup
if (fs.existsSync(folderPath)) {
  walk(folderPath);
  console.log('✅ Finished cleaning JS imports in .presite/');
} else {
  console.warn('⚠️ Folder .presite not found — skipping cleanup');
}
