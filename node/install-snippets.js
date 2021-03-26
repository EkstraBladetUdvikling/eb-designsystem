const fs = require('fs');

const cssFile = 'eb-designsystem.code-snippets';
const snippetCSS = `./snippets/${cssFile}`;
const htmlFile = `eb-designsystem-html.code-snippets`;
const snippetHTML = `./snippets/${htmlFile}`;

const runtimeArguments = process.argv.slice(2)[0];

if (!runtimeArguments) {
  console.log('ERROR - No destionationfolder provided');
  process.exit(1);
}

if (runtimeArguments.indexOf('.vscode') === -1) {
  console.log(`WARNING - The destionationfolder didn't have .vscode folder, it should be placed in the correct folder`);
}

const destinationfolder = runtimeArguments.indexOf('.vscode') === -1 ? `${runtimeArguments}/.vscode` : runtimeArguments;

const found = fs.existsSync(destinationfolder);

if (found) {
  fs.copyFileSync(snippetCSS, `${destinationfolder}/${cssFile}`);
  console.log(`Copied eb-designsystem.code-snippets to ${destinationfolder}/${cssFile}`);
  fs.copyFileSync(snippetHTML, `${destinationfolder}/${htmlFile}`);
  console.log(`Copied eb-designsystem-html.code-snippets to ${destinationfolder}/${htmlFile}`);
} else {
  console.log(`ERROR - couldn't find destinationfolder`);
  process.exit(1);
}
