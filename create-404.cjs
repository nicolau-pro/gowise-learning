const fs = require('fs');
const path = require('path');

const folder = path.join('.presite', '__presite_404');
const src = path.join(folder, 'index.html');
const dest = path.join('.presite', '404.html');

// --- Copy 404.html ---
if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('✔ 404.html created from dynamic route');

  // --- Delete __presite_404 folder ---
  try {
    fs.rmSync(folder, { recursive: true, force: true });
    console.log('✔ Removed __presite_404 folder');
  } catch (err) {
    console.error('✘ Failed to remove __presite_404 folder:', err);
  }
} else {
  console.log('✘ 404 source not found:', src);
}
