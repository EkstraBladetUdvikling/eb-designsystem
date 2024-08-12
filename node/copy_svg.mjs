import { copyFileSync, constants, existsSync, mkdirSync, rmSync } from "fs";

const distFolder = "./dist";
const DESTINATION = `${distFolder}/icons.svg`;
if (!existsSync(distFolder)) {
  mkdirSync(distFolder);
}

if (existsSync(DESTINATION)) {
  rmSync(DESTINATION);
}

copyFileSync("./docs/svg/symbol/icons.svg", DESTINATION, constants.COPYFILE_EXCL);
