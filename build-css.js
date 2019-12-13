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
    "./node_modules/@ekstra-bladet/eb-colors/dist/eb-colors-css-vars.css"
    // "./css/custom-properties.css"
  ],
  preserve: false,
  stage: 0,
  warnForDuplicates: false
};

const runtimeArguments = process.argv.slice(2);
const buildCSS = async envArg => {
  try {
    const startTime = new Date().getTime();
    const srcFolder = "./src";
    const cssFilesToRead = [];
    const fileTypeToFind = ".css";
    const withFileTypes = true;
    /**
     * Find all css files in src folder
     */
    fs.readdirSync(srcFolder, { withFileTypes }).forEach(output => {
      if (output.isFile()) {
        if (path.extname(output.name).toLowerCase() === fileTypeToFind) {
          cssFilesToRead.push(`${srcFolder}/${output.name}`);
        }
      } else if (output.isDirectory()) {
        console.log("?");
        const dirName = `${srcFolder}/${output.name}`;
        fs.readdirSync(dirName, { withFileTypes }).forEach(readContent => {
          console.log("readContent.isFile", readContent.isFile());
          if (readContent.isFile()) {
            console.log("w0r?", readContent);
            if (
              path.extname(readContent.name).toLowerCase() === fileTypeToFind
            ) {
              console.log("yellllllllo=?");
              cssFilesToRead.push(`${dirName}/${readContent.name}`);
            }
          }
        });
      }
    });

    const inputFile = "./src/index.css";
    const outFolder = "dist";
    // runtimeArguments.shift() === "watch" || envArg === "watch"
    //   ? pkg.devFolder
    //   : pkg.distFolder;
    const outputFile = `${outFolder}/outputs.css`;
    const outputFile2 = `_site/${outFolder}/outputs.css`;

    if (!fs.existsSync(outFolder)) {
      fs.mkdirSync(outFolder);
    }

    const readFileContent = [];
    console.log(cssFilesToRead);
    [...cssFilesToRead, inputFile].forEach(fileName => {
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
          fs.writeFile(outputFile2, result.css, () => {
            return true;
          });
          console.log(`postcss ${inputFile} -> ${outputFile}`);
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
