const fs = require("fs");
const path = require("path");

const pkg = require("./package.json");

const postcss = require("postcss");
const discardDuplicates = require("postcss-discard-duplicates")();
const discardUnused = require("postcss-discard-unused")();
const mergeRules = require("postcss-merge-rules")();
const cssnano = require("cssnano")();
const presetEnv = require("postcss-preset-env");
const runtimeArguments = process.argv.slice(2);

const TEMPVERSION = "./.tempversion";

const cssnextObject = {
  browsers: "last 2 versions, ios >= 6, ie > 10",
  features: {
    "nesting-rules": true
  },
  importFrom: [
    "./node_modules/@ekstra-bladet/eb-colors/dist/eb-colors-vars-rgb.css",
    "./node_modules/@ekstra-bladet/eb-colors/dist/eb-colors-css-vars.css",
    "./node_modules/@ekstra-bladet/eb-fonts/dist/eb-fontvars-desktop.css",
    "./src/_variables.css"
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

const buildCSS = async args => {
  try {
    const WATCHING = args[0] ? args[0].indexOf("watcher") !== -1 : "";
    const startTime = new Date().getTime();
    const srcFolder = "./src";
    const cssFilesToRead = [];
    const fileTypeToFind = ".css";
    /**
     * Find all css files in src folder
     */
    readFolder(srcFolder, fileTypeToFind, cssFilesToRead);
    const outFolder = "dist";
    const outputFile = `${outFolder}/eb-designsystem.css`;

    if (!fs.existsSync(outFolder)) {
      fs.mkdirSync(outFolder);
    }

    const readFileContent = [];

    cssFilesToRead.forEach(fileName => {
      readFileContent.push(fs.readFileSync(fileName));
    });
    const css = readFileContent.join("");
    let tempversionBuild = "";
    if (WATCHING) {
      if (fs.existsSync(TEMPVERSION)) {
        const readVersion = parseInt(
          fs.readFileSync(TEMPVERSION).toString(),
          10
        );
        tempversionBuild = readVersion + 1;
      } else {
        tempversionBuild = 0;
      }
    }

    const version =
      tempversionBuild !== ""
        ? `${pkg.version} | TEMP VERSION: ${tempversionBuild} by: ${
            require("os").userInfo().username
          }`
        : pkg.version;

    await postcss([
      presetEnv(cssnextObject),
      discardDuplicates,
      discardUnused,
      mergeRules,
      cssnano
    ])
      .process(css, {
        from: "undefined"
      })
      .then(result => {
        try {
          const resultCss = result.css;
          fs.writeFile(
            outputFile,
            `/** ${pkg.name} version: ${version} */${resultCss}`,
            () => {
              return true;
            }
          );
          if (WATCHING) {
            console.log(" ... write tempversionBuild", tempversionBuild);
            fs.writeFile(TEMPVERSION, tempversionBuild, () => {
              return true;
            });
          }
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

buildCSS(runtimeArguments);
