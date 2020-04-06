const fs = require('fs');
const path = require('path');

const postcss = require('postcss');

const customProperties = require('postcss-custom-properties');

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

const templateSnippet = {
  prefix: 'ds-',
  body: ['fontsize-xxsmall'],
  description: 'fontsize xxsmall',
};

const convertSelector = (selector) => {
  const splitSelector = selector.split('.');
  const noDot = splitSelector[splitSelector.length - 1].split(':')[0];
  const sel = noDot.indexOf('-') !== -1 ? noDot.replace(/--/g, '-').replace(/-/g, ' ') : noDot;
  let hasDependency = null;
  if (noDot.indexOf('--solid') !== -1) {
    console.log(sel, noDot, 'this has dependecy to', splitSelector[1]);
  }
  if (noDot.indexOf('--') !== -1) {
    hasDependency = noDot === splitSelector[1] ? noDot.split('--')[0] : splitSelector[1];
  }
  let isExtending = null;
  if (splitSelector.length > 2) {
    isExtending = splitSelector[1];
  }
  return { hasDependency, isExtending, noDot, snippetKey: `designsystem ${sel}` };
};

const snippetDocument = {};
const dependecyMap = {};
const tsVersionCreator = postcss.plugin('tsVersionCreator', () => {
  return (root, _result) => {
    root.walkRules((rule) => {
      console.log('------------');
      const selectors = rule.selector.split(',');
      selectors.forEach((sel) => {
        const curSel = sel.trim();
        if (curSel.indexOf('.') !== -1 && !curSel.match(/[\s]/g)) {
          if (curSel.match(/[\:\[]/g)) {
            const { snippetKey } = convertSelector(curSel);
            snippetDocument[snippetKey] = snippetDocument[snippetKey] || {};
            const descrip = snippetDocument[snippetKey].description
              ? `${snippetDocument[snippetKey].description}\n Has pseudo styling ${curSel.slice(curSel.indexOf(':'))}`
              : `Has pseudo styling ${curSel.slice(curSel.indexOf(':'))}`;

            snippetDocument[snippetKey].description = descrip;
          } else {
            const { hasDependency, isExtending, noDot, snippetKey } = convertSelector(curSel);

            snippetDocument[snippetKey] = snippetDocument[snippetKey] || {};
            snippetDocument[snippetKey].prefix = `${templateSnippet.prefix}${noDot}`;
            snippetDocument[snippetKey].body = [noDot];
            let prefix = '';
            if (hasDependency) {
              prefix = `NB! This should only be used with ${hasDependency}\n`;
            }
            if (isExtending) {
              prefix = `${prefix}This extends ${isExtending} with: `;
            }
            const desc = [];
            rule.walkDecls((something) => {
              desc.push(`${something.prop}: ${something.value};\n`);
            });
            const descrip = snippetDocument[snippetKey].description
              ? `${snippetDocument[snippetKey].description}\n ${prefix}{\n ${desc.join('')} }`
              : `${prefix}{\n ${desc.join('')} }`;

            snippetDocument[snippetKey].description = descrip;
          }
        }
      });
    });
  };
});

const buildCSS = async (args) => {
  try {
    const startTime = new Date().getTime();

    const options = getOptions(args);
    const srcFolder = './src';
    const cssFilesToRead = options.build === 'ie' ? [] : importFrom;

    const fileTypeToFind = '.css';
    console.log('options.build', options.build);
    /**
     * Find all css files in src folder
     */
    readFolder(srcFolder, fileTypeToFind, cssFilesToRead);
    const outFolder = 'snippets';

    if (!fs.existsSync(outFolder)) {
      fs.mkdirSync(outFolder);
    }

    const readFileContent = [];

    cssFilesToRead.length = 0;
    cssFilesToRead.push('./src/_components/button/button.css');

    cssFilesToRead.forEach((fileName) => {
      readFileContent.push(fs.readFileSync(fileName));
    });
    const css = readFileContent.join('');

    await postcss([customProperties(cssnextObject), tsVersionCreator])
      .process(css, {
        from: 'undefined',
      })
      .then((_result) => {
        try {
          fs.writeFile(`./${outFolder}/eb-designsystem-snippets.json`, JSON.stringify(snippetDocument, null, 2), () => {
            console.log(`snipper file created`);
            return true;
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
