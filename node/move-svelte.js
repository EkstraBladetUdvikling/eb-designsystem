const fs = require('fs');
const path = require('path');

const readFolder = (folderName, filesToFind, array, lvl = 0) => {
  fs.readdirSync(folderName, { withFileTypes: true }).forEach((output) => {
    if (output.isFile() && lvl !== 0) {
      const extName = path.extname(output.name).toLowerCase();
      if (extName === filesToFind && output.name.indexOf('_') !== 0) {
        array.push({ file: `${folderName}/${output.name}`, folderName });
      }
    } else if (output.isDirectory()) {
      const dirName = `${folderName}/${output.name}`;
      readFolder(dirName, filesToFind, array, 1);
    }
  });
};

const svelteFiles = [];
readFolder('./src', '.svelte', svelteFiles);
const svgFiles = [];
readFolder('./src', '.svg', svgFiles);

[...svelteFiles, ...svgFiles].forEach((svelteFile) => {
  const { file, folderName } = svelteFile;
  const destFolder = folderName.replace('./src', './dist');
  const destFile = file.replace('./src', './dist');

  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder);
  }
  fs.copyFileSync(file, destFile);
});
