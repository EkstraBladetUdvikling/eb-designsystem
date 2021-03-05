const SVGSpriter = require('svg-sprite');
const fs = require('fs');
const path = require('path');

const dest = 'public/svg';
const spriter = new SVGSpriter({
  dest,
  mode: {
    symbol: {
      sprite: 'icons.svg',
    },
  },
});

const svgs = fs.readdirSync('./svgs').filter((fileName) => fileName.indexOf('.svg') !== -1);

const svgNames = [];
svgs.forEach((svgFileName) => {
  const svgFilePath = `./svgs/${svgFileName}`;

  spriter.add(path.resolve(svgFilePath), svgFileName, fs.readFileSync(svgFilePath, { encoding: 'utf-8' }));

  svgNames.push(svgFileName.replace('.svg', ''));
});

spriter.compile((error, result, _data) => {
  if (error) {
    process.exit(1);
  }

  for (var type in result.symbol) {
    fs.writeFileSync(result.symbol[type].path, result.symbol[type].contents);
  }
});

let iconTypes = `
  export type IconTypes =
`;

svgNames.forEach((svgname, idx) => {
  const divider = idx < svgNames.length - 1 ? '|' : ';';
  iconTypes += `'${svgname}'${divider}`;
});

const definitionFile = `declare module 'Icon.svelte' {
  export { SvelteComponentDev as default } from 'svelte/internal';
  ${iconTypes}
}
`;

fs.writeFileSync(`./src/types/Icon.d.ts`, definitionFile);
