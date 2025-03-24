function combineNumbers(arr, minChars) {
  let result = [];
  let idxResult = [];
  let i = 0;

  while (i < arr.length) {
    let combined = arr[i];

    if (combined >= minChars) {
      result.push(combined);
      idxResult.push(i);
      i++;
      continue;
    }

    let j = i + 1;

    // look in past to find best combo
    const last = result.length ? result[result.length - 1] : 0;
    const backwardsCombination = last + arr[i];

    while (j < arr.length && combined < minChars) {
      combined += arr[j];
      j++;
    }

    const closest =
      last !== 0
        ? [combined, backwardsCombination].sort((a, b) => Math.abs(minChars - a) - Math.abs(minChars - b))[0]
        : combined;

    if (closest === combined && combined >= minChars) {
      result.push(closest);

      idxResult.push([i, j - 1]);
      i = j;
    } else {
      result[result.length - 1] = backwardsCombination;

      idxResult[idxResult.length - 1] = Array.isArray(idxResult[idxResult.length - 1])
        ? [idxResult[idxResult.length - 1][0], i]
        : [idxResult[idxResult.length - 1], i];
      i++;
    }
  }
  console.log('idxResult', idxResult);
  return idxResult;
}

function splitIntoLines(sentence, minChars = 4) {
  const split = sentence.split(' ');
  let lines = [];

  // Find words with length less than minChars and combine them with the next or previous word depending on the length of the current line
  const shorts = split.filter((word) => word.length < minChars);

  const hasNumber = [];
  split.forEach((word, idx) => {
    if (/\d/.test(word)) {
      hasNumber.push(idx);
    }
  });

  if (hasNumber.length) {
    hasNumber.forEach((idx) => {
      split[idx] = split[idx] + ' ' + split[idx + 1];
      split.splice(idx + 1, 1);
    });
  }

  if (!shorts.length) return split;

  const wordLengths = split.map((word) => word.length);
  const idxResult = combineNumbers(wordLengths, minChars);

  idxResult.forEach((idx) => {
    if (Array.isArray(idx)) {
      const [start, end] = idx;

      // const combined = split.slice(start, end);
      const combined = split.slice(start, end + 1);

      lines.push(combined.join(' '));
    } else {
      lines.push(split[idx]);
    }
  });
  return lines;
}

function splitTitle(input, minLines = 1, maxLines = 4) {
  // Split word in array
  const wordsArray = splitIntoLines(input);
  const arrayOfLengths = wordsArray.map((x) => x.length);

  // Calculate optimal number of lines
  const numLines = Math.min(Math.max(Math.ceil(input.length / 20), minLines), maxLines);

  if (numLines <= 1) return [input];
  if (numLines >= arrayOfLengths.length) return wordsArray;

  const partition_between = Array.from({ length: numLines - 1 }).map(
    (_x, i) => (i + 1) * Math.floor(arrayOfLengths.length / numLines)
  );

  const average_height =
    arrayOfLengths.reduce((arr, cur) => {
      return arr + cur;
    }) / numLines;
  let bestScore = null;
  let bestPartitions = [];
  let count = 0;
  let noImprovementsCount = 0;

  // Safelimit number of iterations to find optimal partion
  while (count < 20) {
    const starts = [0].concat(...partition_between);
    const ends = partition_between.concat(arrayOfLengths.length);
    const partitions = Array.from({ length: numLines }).map((_x, i) => arrayOfLengths.slice(starts[i], ends[i]));
    // Calculate the sum of wordlengths (heights)
    const heights = partitions.map((partition) => partition.reduce((arr, cur) => arr + cur, 0));

    const absHeightDiffs = heights.map((x) => Math.abs(average_height - x));
    const worstPartitionIndex = absHeightDiffs.indexOf(Math.max(...absHeightDiffs));
    const worstHeightDiff = average_height - heights[worstPartitionIndex];

    if (bestScore === null || Math.abs(worstHeightDiff) < bestScore) {
      bestScore = Math.abs(worstHeightDiff);
      bestPartitions = partitions;
      noImprovementsCount = 0;
    } else {
      noImprovementsCount += 1;
    }

    if (worstHeightDiff === 0 || noImprovementsCount > 5 || count > 5) {
      // We got the best partion!
      return bestPartitions.map((x) => x.map(() => wordsArray.shift()).join(' '));
    }

    count++;

    const move = worstHeightDiff < 0 ? -1 : 1;

    const boundToMove =
      worstPartitionIndex === 0
        ? 0
        : worstPartitionIndex === numLines - 1
        ? numLines - 2
        : worstHeightDiff < 0 !== heights[worstPartitionIndex - 1] > heights[worstPartitionIndex + 1]
        ? worstPartitionIndex - 1
        : worstPartitionIndex;

    const direction = boundToMove < worstPartitionIndex ? -1 : 1;
    partition_between[boundToMove] += move * direction;
  }

  return [input];
}

const sentences = [
  { sentence: 'bo er død', expect: ['bo er død'] },
  { sentence: 'bo er en gammel mand', expect: ['bo er en', 'gammel', 'mand'] },
  { sentence: 'DMI advarer', expect: ['DMI advarer'] },
  { sentence: '- smertefuldt', expect: ['- smertefuldt'] },
  { sentence: 'Hvem er ÆLDST?', expect: ['Hvem er', 'ÆLDST?'] },
  { sentence: 'Alle ordene hopper', expect: ['Alle', 'ordene', 'hopper'] },
  { sentence: 'Alle ordene hopper nu', expect: ['Alle', 'ordene', 'hopper nu'] },
  { sentence: 'Skræller 20pct. af dansk komet', expect: ['Skræller', '20pct.', 'af dansk', 'komet'] },
  { sentence: '- Vis nogle nosser!', expect: ['- Vis', 'nogle', 'nosser!'] },
  { sentence: 'El-svindel Bøde på 380.000 kr.', expect: ['El-svindel', 'Bøde på', '380.000 kr.'] },
  { sentence: 'Nu vil han sulte dem ihjel', expect: ['Nu vil', 'han sulte', 'dem ihjel'] },
  { sentence: 'Fremtidens bil er landet', expect: ['Fremtidens', 'bil er', 'landet'] },
  { sentence: 'Stjæler for 43 millioner kroner', expect: ['Fremtidens', 'bil er', 'landet'] },
  { sentence: 'Dansk aktie kan stige 50 procent', expect: ['Dansk', 'aktie', 'kan stige', '50 procent'] },
  { sentence: 'Kæmpe kaos', expect: ['Kæmpe', 'kaos'] },
  {
    sentence: 'Gigant overrasker: 27 analytikere hæver kursmålet',
    expect: ['Gigant', 'overrasker:', '27 analytikere', 'hæver', 'kursmålet'],
  },
  { sentence: 'Slår rekord: Har 1198 mia. kr.', expect: ['Slår', 'rekord: Har', '1198 mia. kr.'] },
  { sentence: 'Gigant taber 1960 mia. i værdi', expect: ['Gigant', 'taber', '1960 mia.', 'i værdi'] },
  { sentence: 'Mette F. med til stormøde', expect: ['Mette', 'F. med til', 'stormøde'] },
  { sentence: '"Vi undersøger"', expect: ['"Vi undersøger"'] },
];

sentences.forEach((data) => {
  const splitted = splitIntoLines(data.sentence);
  console.log('match', JSON.stringify(splitted) === JSON.stringify(data.expect));
  const title = splitTitle(data.sentence);
  console.log('title', title);
});
