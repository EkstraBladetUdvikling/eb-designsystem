const fs = require('fs');
const path = require('path');

const readFolder = (folderName, filesToFind, array, lvl = 0) => {
  fs.readdirSync(folderName, { withFileTypes: true }).forEach((output) => {
    if (output.isFile() && lvl !== 0) {
      const extName = path.extname(output.name).toLowerCase();
      if (output.name.indexOf('_') !== 0) {
        if (filesToFind.indexOf(extName) !== -1) {
          array.push({ file: `${folderName}/${output.name}`, folderName });
        } else if (extName === '.ts' && output.name.indexOf('.d.ts') !== -1) {
          array.push({ file: `${folderName}/${output.name}`, folderName });
        }
      }
    } else if (output.isDirectory()) {
      const dirName = `${folderName}/${output.name}`;
      readFolder(dirName, filesToFind, array, 1);
    }
  });
};

const distFolder = 'dist';
const filesToMove = [];
const filesToFind = ['.svelte', '.svg'];
readFolder('./src', filesToFind, filesToMove);

if (fs.existsSync(distFolder)) {
  fs.rmSync(distFolder, { recursive: true });
}

filesToMove.forEach((svelteFile) => {
  const { file, folderName } = svelteFile;

  const destFolder = folderName.replace('./src', distFolder);
  const destFile = file.replace('./src', distFolder);

  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  fs.copyFileSync(file, destFile);
});
