const fs = require('fs');
const path = require('path');

const postcss = require('postcss');

const postcssImport = require('postcss-import')({
  skipDuplicates: true,
});
const discardDuplicates = require('postcss-discard-duplicates')();
const discardUnused = require('postcss-discard-unused')();
const mergeRules = require('postcss-merge-rules')();
const postcssCustomMedia = require('postcss-custom-media');

const runtimeArguments = process.argv.slice(2);

const importFrom = [
  './node_modules/normalize.css/normalize.css',
  './node_modules/@ekstra-bladet/eb-colors/dist/eb-colors-vars-rgb.css',
  './node_modules/@ekstra-bladet/eb-colors/dist/eb-colors-css-vars.css',
  './css/_variables.css',
  './css/_custom-mediaqueries.css',
];

const readFolder = (folderName, filesToFind, array, lvl = 0) => {
  fs.readdirSync(folderName, { withFileTypes: true }).forEach((output) => {
    if (output.isFile() && lvl !== 0) {
      const extName = path.extname(output.name).toLowerCase();
      if (extName === filesToFind && output.name.indexOf('_') !== 0) {
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
  };
  args.forEach((arg) => {
    if (arg.indexOf('--build') !== -1) {
      options.build = arg.split('--build=')[1];
    }
  });
  return options;
};

const buildCSS = async (args) => {
  try {
    const startTime = new Date().getTime();

    const { build } = getOptions(args);

    const srcFolder = './src';

    const cssFilesToRead = importFrom;

    const postcssPlugins = [postcssImport, postcssCustomMedia()];

    const fileTypeToFind = '.css';

    /**
     * Find all css files in src folder
     */
    readFolder(srcFolder, fileTypeToFind, cssFilesToRead);
    cssFilesToRead.push('./node_modules/@ekstra-bladet/eb-colors/dist/eb-colors-classes.css');

    const outputFileName = build ? `designsystem--${build}.css` : `designsystem.css`;
    const outputFiles = [`docs_src/css/${outputFileName}`, `css/${outputFileName}`];

    const readFileContent = [];

    cssFilesToRead.forEach((fileName) => {
      readFileContent.push(fs.readFileSync(fileName));
    });
    const css = readFileContent.join('');

    await postcss([...postcssPlugins, discardDuplicates, discardUnused, mergeRules])
      .process(css, {
        from: 'undefined',
      })
      .then((result) => {
        try {
          const resultCss = result.css;

          outputFiles.forEach((outputFile) => {
            fs.writeFile(outputFile, resultCss, () => {
              return true;
            });
            console.log(`postcss PRODUCTION ready -> ${outputFile}`);
          });
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
