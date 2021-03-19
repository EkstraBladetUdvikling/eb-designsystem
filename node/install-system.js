const fs = require('fs');

const cssFile = 'eb-designsystem.css';
const snippetCSS = `./dist/${cssFile}`;

const runtimeArguments = process.argv.slice(2)[0];

if (!runtimeArguments) {
  console.log('ERROR - No destionationfolder provided');
  process.exit(1);
}

const destinationfolder = runtimeArguments;

const found = fs.existsSync(destinationfolder);

if (found) {
  fs.copyFileSync(snippetCSS, `${destinationfolder}/${cssFile}`);
  console.log(`Copied ${cssFile} to ${destinationfolder}/${cssFile}`);
} else {
  console.log(`ERROR - couldn't find destinationfolder`);
  process.exit(1);
}
