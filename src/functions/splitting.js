function splitting(split, idxResult) {
  const lines = [];

  idxResult.forEach((idx) => {
    if (Array.isArray(idx)) {
      const [start, end] = idx;
      console.log('start', start, 'end', end, split.length);
      // const combined = split.slice(start, end);
      const combined = split.slice(start, end + 1);
      lines.push(combined.join(' '));
    } else {
      lines.push(split[idx]);
    }
  });

  return lines;
}

const sentences = ['Alle', ' ordene', 'hopper', 'nu'];

console.log(splitting(sentences, [0, 1, [2, 3]]));

console.log(splitting(['Skræller', '20pct.', 'af', 'dansk', 'komet'], [0, 1, [2, 3], 4]));
