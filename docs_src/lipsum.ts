const lipsum = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Fusce ullamcorper nibh quis dui consequat iaculis.',
  'Integer pretium dapibus orci quis sagittis.',
  'Maecenas non diam eu nibh lobortis vulputate.',
  'Fusce pharetra pretium convallis.',
  'Donec blandit purus sed orci ornare, a egestas justo sagittis.',
  'Maecenas in dui lacinia, consectetur lorem quis, semper lacus.',
  'Aenean ut iaculis neque. Etiam bibendum lacus ut commodo vehicula.',
  'Integer non venenatis ante. Pellentesque egestas venenatis nisl, quis blandit dui porttitor ut.',
  'Quisque dictum tortor sit amet ornare fringilla.',
  'Duis metus lectus, imperdiet consequat libero a, tristique pellentesque dolor.',
  'Fusce augue arcu, sagittis ut porttitor quis, tempor in velit.',
  'Integer pulvinar risus vitae tortor accumsan cursus. Integer in metus pulvinar, posuere urna a, scelerisque mi.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices placerat auctor.',
  'Mauris molestie hendrerit libero, vitae ultrices elit efficitur nec.',
  'Curabitur non lectus sit amet magna eleifend sagittis. Suspendisse ac efficitur elit.',
  'Sed consectetur laoreet mollis. Quisque pulvinar pretium nisi.',
  'Mauris interdum eleifend risus, quis dapibus augue congue non.',
  'Ut quis efficitur urna. Fusce sem sapien, porta ac ultricies eget, ultrices dapibus lacus.',
  'Fusce vehicula, dui quis faucibus lobortis, mi mauris vestibulum dui, quis tempus mi elit ut orci.',
  'Vestibulum porta nisi nisi.',
  'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ornare massa tellus, feugiat venenatis diam vehicula ornare.',
  'Nullam sit amet odio consectetur, egestas lorem eget, pellentesque odio.',
  'Quisque laoreet enim eros, eget commodo odio imperdiet non.',
  'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  'Mauris fringilla sollicitudin lobortis. Nam sit amet aliquet sem, eu scelerisque metus.',
  'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  'Pellentesque ut lectus vitae odio interdum congue.',
  'Pellentesque posuere bibendum interdum.',
  'Proin quis neque efficitur, sollicitudin risus consectetur, sagittis ante.',
  'Nunc nulla metus, luctus sit amet fermentum quis, lacinia sed quam.',
  'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Duis nec magna metus. Ut hendrerit convallis metus quis dictum.',
  'Phasellus bibendum, ex a posuere rhoncus, mi velit fermentum mauris, id porttitor odio augue id justo.',
  'Nulla malesuada justo massa, in luctus diam suscipit at.',
  'Praesent commodo arcu in nisi eleifend auctor non et dui.',
  'Duis at tellus ac purus tincidunt condimentum.',
  'Sed id finibus nulla, sed ullamcorper neque.',
  'Mauris accumsan magna nec nisi tempor, eu consectetur tortor volutpat.',
  'Sed eget elementum odio.',
  'Aliquam luctus lectus at nunc vehicula, in malesuada est fermentum.',
  'Aliquam eget turpis nec dui luctus pretium.',
  'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  'Integer eu aliquam dolor.',
  'Maecenas et tellus nisi.',
  'Integer gravida finibus ex vel pretium.',
  'Cras ac orci eget magna aliquet cursus.',
  'Cras placerat, est sit amet sodales fringilla, nunc urna ornare neque, eget pharetra nunc odio vitae nulla.',
  'Aliquam euismod sodales elit ut sollicitudin.',
];

export const getSentence = () => lipsum[Math.floor(Math.random() * 50)];

export const getWord = () => lipsum[Math.floor(Math.random() * 50)].split(' ')[0];

export function rdmParagraphs(num: number = 3) {
  let returnData = '';
  for (let i = num; i--;) {
    returnData += `<p>${getSentence()}</p>`;
  }
  return returnData;
}
