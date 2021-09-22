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

const iconPath = './src/components/icon/svgs';
const graphicPath = './src/components/icon/graphics';

const icons = fs.readdirSync(iconPath).filter((fileName) => fileName.indexOf('.svg') !== -1);
const graphics = fs.readdirSync(graphicPath).filter((fileName) => fileName.indexOf('.svg') !== -1);

// Add icons to symbol
const iconNames = [];
icons.forEach((svgFileName) => {
  const svgFilePath = `${iconPath}/${svgFileName}`;

  spriter.add(path.resolve(svgFilePath), svgFileName, fs.readFileSync(svgFilePath, { encoding: 'utf-8' }));

  iconNames.push(svgFileName.replace('.svg', ''));
});

// Add graphics to symbol
const graphicNames = [];
graphics.forEach((svgFileName) => {
  const svgFilePath = `${graphicPath}/${svgFileName}`;

  spriter.add(path.resolve(svgFilePath), svgFileName, fs.readFileSync(svgFilePath, { encoding: 'utf-8' }));

  graphicNames.push(svgFileName.replace('.svg', ''));
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

iconNames.forEach((svgname, idx) => {
  const exportName = svgname.replace(/-/g, '');

  // Handle Types
  const divider = idx < iconNames.length - 1 ? '|' : ';';
  iconTypes += `'${exportName}'${divider}`;

  // Handle exporting
  iconComponents.push(`export { default as ${exportName} } from './svgs/${svgname}.svg'`);

  // Handle name list
  iconComponentNames.push(`'${exportName}'`);
});

let graphicTypes = `
  export type GraphicTypes =
`;
let graphicComponents = [];
let graphicComponentNames = [];

graphicNames.forEach((gfxName, idx) => {
  // Handle Types
  const divider = idx < graphicNames.length - 1 ? '|' : ';';

  // Handle exporting
  const exportName = gfxName.replace(/-/g, '');
  graphicTypes += `'${exportName}'${divider}`;
  graphicComponents.push(`export { default as ${exportName} } from './graphics/${gfxName}.svg'`);

  // Handle name list
  graphicComponentNames.push(`'${exportName}'`);
});

const definitionFile = `declare module 'Icon.svelte' {
  export { SvelteComponentDev as default } from 'svelte/internal';
  ${iconTypes}

  ${graphicTypes}
}

declare module '*.svg';
`;

fs.writeFileSync(`./src/types/Icon.d.ts`, definitionFile);

const componentFile = `${iconComponents.join(';')};${graphicComponents.join(';')}`;

fs.writeFileSync(`./src/components/icon/IconComponents.ts`, componentFile);

fs.writeFileSync(
  `./src/components/icon/svgs/iconnames.ts`,
  `
  import type { IconTypes } from 'Icon.svelte';
  export const iconnames: IconTypes[] = [${iconComponentNames.join(',')}];
  `
);

fs.writeFileSync(
  `./src/components/icon/graphics/graphicnames.ts`,
  `
  import type { GraphicTypes } from 'Icon.svelte';
  export const graphicnames: GraphicTypes[] = [${graphicComponentNames.join(',')}];`
);
