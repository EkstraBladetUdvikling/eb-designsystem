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

const readFolder = (folderName, filesToFind, array) => {
  fs.readdirSync(folderName, { withFileTypes: true }).forEach(output => {
    if (output.isFile()) {
      if (path.extname(output.name).toLowerCase() === filesToFind) {
        array.push(`${folderName}/${output.name}`);
      }
    } else if (output.isDirectory()) {
      const dirName = `${folderName}/${output.name}`;
      readFolder(dirName, filesToFind, array);
    }
  });
};

const runtimeArguments = process.argv.slice(2);
const buildCSS = async envArg => {
  try {
    console.log(envArg);

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
    const outputFile2 = `_site/${outFolder}/outputs.css`;

    if (!fs.existsSync(outFolder)) {
      fs.mkdirSync(outFolder);
    }

    const readFileContent = [];
    const readFileContent2 = [];

    [...cssFilesToRead, inputFile].forEach(fileName => {
      if (fileName !== inputFile) {
        readFileContent.push(fs.readFileSync(fileName));
      }
      readFileContent2.push(fs.readFileSync(fileName));
    });

    if (envArg.indexOf("--prod") !== -1 || envArg.length === 0) {
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
    }

    if (envArg.indexOf("--test") !== -1 || envArg.length === 0) {
      const css2 = readFileContent2.join("");
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
        .process(css2, {
          from: inputFile,
          to: "dist/app1.css"
        })
        .then(result => {
          try {
            fs.writeFile(outputFile2, result.css, () => {
              return true;
            });
            console.log(`postcss TEST file ${inputFile} -> ${outputFile2}`);
          } catch (err) {
            throw err;
          }
        });
    }
    const endTime = new Date().getTime();
    console.log("it took?", (endTime - startTime) / 1000);
  } catch (err) {
    console.error("ERROR: build css", err);
    process.exit(1);
  }
};

buildCSS(runtimeArguments);
