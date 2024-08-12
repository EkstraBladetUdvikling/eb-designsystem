import { copyFileSync, constants, existsSync, mkdirSync, rmSync } from "fs";

const distFolder = "./dist";
const DESTINATION = `${distFolder}/icons.svg`;
if (!existsSync(distFolder)) {
  console.log("The path does not exist.");
  mkdirSync(distFolder);
}

if (existsSync(DESTINATION)) {
  console.log("The path exists.");
  rmSync(DESTINATION);
}

copyFileSync("./docs/svg/symbol/icons.svg", DESTINATION, constants.COPYFILE_EXCL);
