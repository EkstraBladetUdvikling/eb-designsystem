const fs = require('fs');
const path = require('path');

const pkg = require('./package.json');

const postcss = require('postcss');
const discardDuplicates = require('postcss-discard-duplicates')();
const discardUnused = require('postcss-discard-unused')();
const mergeRules = require('postcss-merge-rules')();
const postcssCustomMedia = require('postcss-custom-media');
const presetEnv = require('postcss-preset-env');
const runtimeArguments = process.argv.slice(2);

const TEMPVERSION = './.tempversion';

const importFrom = [
  './node_modules/@ekstra-bladet/eb-colors/dist/eb-colors-vars-rgb.css',
  './node_modules/@ekstra-bladet/eb-colors/dist/eb-colors-css-vars.css',
  './node_modules/@ekstra-bladet/eb-fonts/dist/eb-fontvars-desktop.css',
  './src/_variables.css',
  './src/_custom-mediaqueries.css'
];

const cssnextObject = {
  browsers: 'ie 11',
  features: {
    'nesting-rules': true
  },
  importFrom,
  preserve: false,
  stage: 0,
  warnForDuplicates: false
};

const customMediaOptions = {
  importFrom: ['./src/_custom-mediaqueries.css'],
  preserve: false
};

const readFolder = (folderName, filesToFind, array, lvl = 0) => {
  fs.readdirSync(folderName, { withFileTypes: true }).forEach(output => {
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

const getOptions = args => {
  const options = {
    build: '',
    watching: false
  };
  args.forEach(arg => {
    if (arg.indexOf('--ie') !== -1 || arg.indexOf('--nonie') !== -1 || arg.indexOf('--watcher') !== -1) {
      options.build = arg;
    }
  });
  return options;
};

const buildCSS = async args => {
  try {
    const startTime = new Date().getTime();

    const options = getOptions(args);
    const srcFolder = './src';
    const cssFilesToRead = options.build === 'ie' ? [] : importFrom;
    const postcssPlugins = [];

    switch (options.build) {
      case 'ie':
        postcssPlugins.push(presetEnv(cssnextObject));
        break;
      case 'watch':
        postcssPlugins.push(postcssCustomMedia(customMediaOptions));
        break;
      default:
        break;
    }
    const fileTypeToFind = '.css';

    /**
     * Find all css files in src folder
     */
    readFolder(srcFolder, fileTypeToFind, cssFilesToRead);
    const outFolder = 'dist';
    const outputFileName = `eb-designsystem${options.build}.css`;
    const outputFile = `${outFolder}/${outputFileName}`;

    if (!fs.existsSync(outFolder)) {
      fs.mkdirSync(outFolder);
    }

    const readFileContent = [];

    cssFilesToRead.forEach(fileName => {
      readFileContent.push(fs.readFileSync(fileName));
    });
    const css = readFileContent.join('');
    let tempversionBuild = '';
    if (options.watching) {
      if (fs.existsSync(TEMPVERSION)) {
        const readVersion = parseInt(fs.readFileSync(TEMPVERSION).toString(), 10);
        tempversionBuild = readVersion + 1;
      } else {
        tempversionBuild = 0;
      }
    }
    const branchInfo = fs
      .readFileSync('.git/HEAD')
      .toString()
      .trim()
      .split('/');
    const branch = branchInfo[branchInfo.length - 1];
    let rev = require('child_process')
      .execSync('git rev-parse HEAD')
      .toString()
      .trim();

    const date = new Date();
    const dateString = `${date.toLocaleDateString('da')} ${date.toLocaleTimeString('da')}`;

    let version = `${outputFileName} version ${pkg.version} built on ${dateString} on branch "${branch}" at revision "${rev}"`;
    if (tempversionBuild !== '') {
      version = `${version} | TEMP VERSION: ${tempversionBuild}`;
    }

    await postcss([
      ...postcssPlugins,
      discardDuplicates,
      discardUnused,
      mergeRules
    ])
      .process(css, {
        from: 'undefined'
      })
      .then(result => {
        try {
          const resultCss = result.css;
          fs.writeFile(outputFile, `/** ${version} */\n${resultCss}`, () => {
            return true;
          });
          console.log(version);

          console.log(`postcss PRODUCTION ready -> ${outputFile}`);
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
