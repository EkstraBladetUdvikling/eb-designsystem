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
    fs.writeFileSync(
      result.symbol[type].path.replace('.svg', '.svelte'),
      String(result.symbol[type].contents).replace(
        '<?xml version="1.0" encoding="utf-8"?>',
        '<script lang="ts"></script>'
      )
    );
  }
});

let iconTypes = `
  export type IconTypes =
`;

let iconComponents = [];
let iconComponentNames = [];
let iconComponentNamesHTML = [];

iconNames.forEach((svgname, idx) => {
  // Handle Types
  const divider = idx < iconNames.length - 1 ? '|' : ';';
  iconTypes += `'${svgname}'${divider}`;

  // Handle exporting
  const exportName = svgname.replace(/-/g, '');
  iconComponents.push(`export { default as ${exportName} } from './svgs/${svgname}.svg'`);

  // Handle name list
  iconComponentNames.push(`'${exportName}'`);
  iconComponentNamesHTML.push(`'${svgname}'`);
});

let graphicTypes = `
  export type GraphicTypes =
`;
let graphicComponents = [];
let graphicComponentNames = [];
let graphicComponentNamesHTML = [];

graphicNames.forEach((gfxName, idx) => {
  // Handle Types
  const divider = idx < graphicNames.length - 1 ? '|' : ';';
  graphicTypes += `'${gfxName}'${divider}`;

  // Handle exporting
  const exportName = gfxName.replace(/-/g, '');
  graphicComponents.push(`export { default as ${exportName} } from './graphics/${gfxName}.svg'`);

  // Handle name list
  graphicComponentNames.push(`'${exportName}'`);
  graphicComponentNamesHTML.push(`'${gfxName}'`);
});

const definitionFile = `
  ${iconTypes}
  ${graphicTypes}
`;

fs.writeFileSync(`./src/types/Icon.d.ts`, definitionFile);

const componentFile = `${iconComponents.join(';')};${graphicComponents.join(';')}`;

fs.writeFileSync(`./src/components/icon/IconComponents.ts`, componentFile);

fs.writeFileSync(
  `./src/components/icon/svgs/iconnames.ts`,
  `
  import type { IconTypes } from '../../../types/Icon';
  export const iconnames: string[] = [${iconComponentNames.join(',')}];
  export const iconnameshtml: IconTypes[] = [${iconComponentNamesHTML.join(',')}];
  `
);

fs.writeFileSync(
  `./src/components/icon/graphics/graphicnames.ts`,
  `
  import type { GraphicTypes } from '../../../types/Icon';
  export const graphicnames: string[] = [${graphicComponentNames.join(',')}];
  export const graphicnameshtml: GraphicTypes[] = [${graphicComponentNamesHTML.join(',')}];
  `
);
