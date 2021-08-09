const SVGSpriter = require('svg-sprite');
const fs = require('fs');
const path = require('path');

const dest = 'docs/svg';

const spriter = new SVGSpriter({
  dest,
  mode: {
    symbol: {
      sprite: 'icons.svg',
    },
  },
});

const iconPath = './src/components/icon/graphics';

const svgs = fs.readdirSync(iconPath).filter((fileName) => fileName.indexOf('.svg') !== -1);

const svgNames = [];
svgs.forEach((svgFileName) => {
  const svgFilePath = `${iconPath}/${svgFileName}`;

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
let iconComponents = [];
let iconComponentNames = [];

svgNames.forEach((svgname, idx) => {
  // Handle Types
  const divider = idx < svgNames.length - 1 ? '|' : ';';
  iconTypes += `'${svgname}'${divider}`;

  // Handle exporting
  const exportName = svgname.replace('-', '');
  iconComponents.push(`export { default as ${exportName} } from './graphics/${svgname}.svg'`);

  // Handle name list
  iconComponentNames.push(`'${exportName}'`);
});

const definitionFile = `declare module 'Icon.svelte' {
  export { SvelteComponentDev as default } from 'svelte/internal';
  ${iconTypes}
}
`;

fs.writeFileSync(`./src/types/Graphic.d.ts`, definitionFile);

const componentFile = iconComponents.join(';');

fs.writeFileSync(`./src/components/icon/GraphicComponents.ts`, componentFile);

fs.writeFileSync(
  `./src/components/icon/graphicnames.ts`,
  `export const graphicnames = [${iconComponentNames.join(',')}];`
);
