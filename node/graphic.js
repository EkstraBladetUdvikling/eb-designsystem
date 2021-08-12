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

const graphicPath = './src/components/icon/graphics';

const svgs = fs.readdirSync(graphicPath).filter((fileName) => fileName.indexOf('.svg') !== -1);

const svgNames = [];
svgs.forEach((svgFileName) => {
  const svgFilePath = `${graphicPath}/${svgFileName}`;

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

let graphicTypes = `
  export type GraphicTypes =
`;
let graphicComponents = [];
let graphicComponentNames = [];

svgNames.forEach((svgname, idx) => {
  // Handle Types
  const divider = idx < svgNames.length - 1 ? '|' : ';';
  graphicTypes += `'${svgname}'${divider}`;

  // Handle exporting
  const exportName = svgname.replace('-', '');
  graphicComponents.push(`export { default as ${exportName} } from './${svgname}.svg'`);

  // Handle name list
  graphicComponentNames.push(`'${exportName}'`);
});

const definitionFile = `declare module 'Icon.svelte' {
  export { SvelteComponentDev as default } from 'svelte/internal';
  ${graphicTypes}
}
`;

fs.writeFileSync(`./src/types/Graphic.d.ts`, definitionFile);

const componentFile = graphicComponents.join(';');

fs.writeFileSync(`./src/components/icon/graphics/GraphicComponents.ts`, componentFile);

fs.writeFileSync(
  `./src/components/icon/graphics/graphicnames.ts`,
  `export const graphicnames = [${graphicComponentNames.join(',')}];`
);
