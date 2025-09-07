const fs = require('fs');
const path = require('path');

/**
 * Recursively copies CSS files from the source directory to the target directory,
 * preserving relative directory structure. This helper runs after the TypeScript
 * compiler has emitted JavaScript to `dist/`. Without this, CSS files would not
 * be included in the published package.
 */
function copyCss(srcDir, destDir) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyCss(srcPath, destPath);
    } else if (entry.isFile() && entry.name.endsWith('.css')) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const srcRoot = path.resolve(__dirname, '../src');
const destRoot = path.resolve(__dirname, '../dist');

copyCss(srcRoot, destRoot);