import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const zip = new JSZip();

function addDirectoryToZip(zipFolder: JSZip, localDirPath: string, relativePath: string = '') {
  const items = fs.readdirSync(localDirPath);
  for (const item of items) {
    if (item === 'node_modules' || item === 'dist' || item === '.git' || item.endsWith('.zip')) {
      continue;
    }
    const fullPath = path.join(localDirPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const subFolder = zipFolder.folder(item);
      if (subFolder) {
        addDirectoryToZip(subFolder, fullPath, path.join(relativePath, item));
      }
    } else {
      const fileData = fs.readFileSync(fullPath);
      zipFolder.file(item, fileData);
    }
  }
}

async function run() {
  const rootDir = process.cwd();
  console.log('Packaging project into sk-travels-website.zip...');

  // Add key files
  const rootFiles = ['index.html', 'package.json', 'tsconfig.json', 'vite.config.ts', 'metadata.json', '.env.example'];
  for (const file of rootFiles) {
    const p = path.join(rootDir, file);
    if (fs.existsSync(p)) {
      zip.file(file, fs.readFileSync(p));
    }
  }

  // Add src folder
  const srcFolder = zip.folder('src');
  if (srcFolder && fs.existsSync(path.join(rootDir, 'src'))) {
    addDirectoryToZip(srcFolder, path.join(rootDir, 'src'));
  }

  // Add public folder (excluding any zip inside)
  const publicFolder = zip.folder('public');
  if (publicFolder && fs.existsSync(path.join(rootDir, 'public'))) {
    addDirectoryToZip(publicFolder, path.join(rootDir, 'public'));
  }

  // Add helpful README
  zip.file('README.md', `# S K Travels – Car Rental in Arrah, Bihar
Chauffeur-Driven White Mahindra Scorpio Car Rental & Taxi Service

- Location: Old Police Line, Arrah, Bhojpur, Bihar - 802301
- Phone: +91 6204671213
- Primary Vehicle: White Mahindra Scorpio (With Driver)

## Quick Start
1. Run \`npm install\`
2. Run \`npm run dev\`
3. Visit http://localhost:3000

## Build for Production
Run \`npm run build\` to generate the static files in the \`dist/\` folder.
`);

  const buffer = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });

  const publicDest = path.join(rootDir, 'public', 'sk-travels-website.zip');
  fs.writeFileSync(publicDest, buffer);

  const rootDest = path.join(rootDir, 'sk-travels-website.zip');
  fs.writeFileSync(rootDest, buffer);

  console.log('Successfully generated sk-travels-website.zip (size:', buffer.length, 'bytes)');
}

run().catch((err) => {
  console.error('Failed to generate zip:', err);
  process.exit(1);
});
