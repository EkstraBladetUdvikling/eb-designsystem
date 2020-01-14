const fs = require("fs");
const path = require("path");

// const pkg = require("../package.json");

const postcss = require("postcss");
const postcssImport = require("postcss-import")({
  skipDuplicates: true
});
const discardDuplicates = require("postcss-discard-duplicates")();
const discardUnused = require("postcss-discard-unused")();
const nested = require("postcss-nested")();
const mergeRules = require("postcss-merge-rules")();
const cssnano = require("cssnano")();
const presetEnv = require("postcss-preset-env");
const customProperties = require("postcss-custom-properties");

const cssnextObject = {
  browsers: "last 2 versions, ios >= 6, ie > 10",
  features: {
    "nesting-rules": true
  },
  importFrom: [
    "./node_modules/@ekstra-bladet/eb-colors/dist/eb-colors-vars-rgb.css",
    "./node_modules/@ekstra-bladet/eb-colors/dist/eb-colors-css-vars.css",
    "./node_modules/@ekstra-bladet/eb-fonts/dist/eb-fontvars-desktop.css"
    // "./css/custom-properties.css"
  ],
  preserve: false,
  stage: 0,
  warnForDuplicates: false
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

const buildCSS = async () => {
  try {
    const startTime = new Date().getTime();
    const srcFolder = "./src";
    const cssFilesToRead = [];
    const fileTypeToFind = ".css";
    /**
     * Find all css files in src folder
     */
    readFolder(srcFolder, fileTypeToFind, cssFilesToRead);

    const inputFile = "./src/index.css";
    const outFolder = "dist";

    const outputFile = `${outFolder}/outputs.css`;

    if (!fs.existsSync(outFolder)) {
      fs.mkdirSync(outFolder);
    }

    const readFileContent = [];

    cssFilesToRead.forEach(fileName => {
      readFileContent.push(fs.readFileSync(fileName));
    });

    const css = readFileContent.join("");
    await postcss([
      postcssImport,
      nested,
      customProperties(cssnextObject),
      presetEnv(cssnextObject),
      discardDuplicates,
      discardUnused,
      mergeRules,
      cssnano
    ])
      .process(css, {
        from: inputFile,
        to: "dist/app1.css"
      })
      .then(result => {
        try {
          fs.writeFile(outputFile, result.css, () => {
            return true;
          });
          console.log(`postcss PRODUCTION ready -> ${outputFile}`);
        } catch (err) {
          throw err;
        }
      });

    const endTime = new Date().getTime();
    console.log("it took?", (endTime - startTime) / 1000);
  } catch (err) {
    console.error("ERROR: build css", err);
    process.exit(1);
  }
};

buildCSS();
