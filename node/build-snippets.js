const fs = require('fs');
const path = require('path');

const postcss = require('postcss');

const customProperties = require('postcss-custom-properties');
const tsVersionCreator = require('./tsVersionCreator');

const runtimeArguments = process.argv.slice(2);

const importFrom = ['./src/_variables.css', './src/_custom-mediaqueries.css'];

const cssnextObject = {
  importFrom,
  preserve: false,
};

const readFolder = (folderName, filesToFind, array, lvl = 0) => {
  fs.readdirSync(folderName, { withFileTypes: true }).forEach((output) => {
    if (output.isFile() && lvl !== 0) {
      if (path.extname(output.name).toLowerCase() === filesToFind) {
        array.push(`${folderName}/${output.name}`);
      }
    } else if (output.isDirectory()) {
      const dirName = `${folderName}/${output.name}`;
      readFolder(dirName, filesToFind, array, 1);
    }
  });
};

const getOptions = (args) => {
  const options = {
    build: '',
    watching: false,
  };
  args.forEach((arg) => {
    if (arg.indexOf('--ie') !== -1 || arg.indexOf('--nonie') !== -1 || arg.indexOf('--watcher') !== -1) {
      options.build = arg;
    }
  });
  return options;
};

const buildCSS = async (args) => {
  try {
    const startTime = new Date().getTime();

    const options = getOptions(args);
    const srcFolder = './src';
    const cssFilesToRead = options.build === 'ie' ? [] : importFrom;

    const fileTypeToFind = '.css';

    /**
     * Find all css files in src folder
     */
    readFolder(srcFolder, fileTypeToFind, cssFilesToRead);
    const outFolder = 'snippets';

    if (!fs.existsSync(outFolder)) {
      fs.mkdirSync(outFolder);
    }

    const readFileContent = [];
    cssFilesToRead.forEach((fileName) => {
      readFileContent.push(fs.readFileSync(fileName));
    });

    const css = readFileContent.join('');
    await postcss([customProperties(cssnextObject), tsVersionCreator])
      .process(css, {
        from: 'undefined',
      })
      .then((result) => {
        try {
          const { snippetDocument, snippetDocumentHTML } = result;
          fs.writeFile(`./${outFolder}/eb-designsystem.code-snippets`, JSON.stringify(snippetDocument, null, 2), () => {
            console.log(`CSS Class snippet file created`);
            return true;
          });
          fs.writeFile(
            `./${outFolder}/eb-designsystem-html.code-snippets`,
            JSON.stringify(snippetDocumentHTML, null, 2),
            () => {
              console.log(`HTML snippet file created`);
              return true;
            }
          );
        } catch (err) {
          throw err;
        }
      });
    const endTime = new Date().getTime();
    console.log('it took?', (endTime - startTime) / 1000);
  } catch (err) {
    console.error('ERROR: build css', err);
    process.exit(1);
  }
};

buildCSS(runtimeArguments);
