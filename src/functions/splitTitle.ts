type TDirection = 1 | -1;

function combineNumbers(arr: number[], minChars: number) {
  const result: number[] = [];
  const idxResult: (number | number[])[] = [];
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

      if (Array.isArray(idxResult[idxResult.length - 1])) {
        (idxResult[idxResult.length - 1] as number[])[1] = i;
      } else {
        idxResult[idxResult.length - 1] = [idxResult[idxResult.length - 1] as number, i];
      }

      i++;
    }
  }

  return idxResult;
}

function splitIntoLines(sentence: string, minChars: number) {
  const split = sentence.split(' ');
  const lines: string[] = [];

  // Find words with length less than minChars and combine them with the next or previous word depending on the length of the current line
  const shorts = split.filter((word) => word.length < minChars);

  const hasNumber: number[] = [];
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

interface ISplitTitleOptions {
  input: string;
  minChars?: number;
  minLines?: number;
  maxLines?: number;
}

/**
 *
 * @param input {string}
 * @param minLines {number}
 * @param maxLines {number}
 * @returns {string[]}
 */
export function splitTitle(options: ISplitTitleOptions): string[] {
  const { input, minChars = 3, minLines = 1, maxLines = 4 } = options;
  // Split word in array
  const wordsArray = splitIntoLines(input, minChars);
  const arrayOfLengths = wordsArray.map((x) => x.length);

  // Calculate optimal number of lines
  const numLines: number = Math.min(Math.max(Math.ceil(input.length / 20), minLines), maxLines);

  if (numLines <= 1) return [input];
  if (numLines >= arrayOfLengths.length) return wordsArray;

  const partition_between = Array.from({ length: numLines - 1 }).map(
    (_x, i) => (i + 1) * Math.floor(arrayOfLengths.length / numLines)
  );

  const average_height =
    arrayOfLengths.reduce((arr, cur) => {
      return arr + cur;
    }) / numLines;
  let bestScore: number | null = null;
  let bestPartitions: number[][] = [];
  let count = 0;
  let noImprovementsCount: number = 0;

  // Safelimit number of iterations to find optimal partion
  while (count < 20) {
    const starts: number[] = [0].concat(...partition_between);
    const ends: number[] = partition_between.concat(arrayOfLengths.length);
    const partitions: number[][] = Array.from({ length: numLines }).map((_x, i) =>
      arrayOfLengths.slice(starts[i], ends[i])
    );
    // Calculate the sum of wordlengths (heights)
    const heights: number[] = partitions.map((partition) => partition.reduce((arr, cur) => arr + cur, 0));

    const absHeightDiffs: number[] = heights.map((x) => Math.abs(average_height - x));
    const worstPartitionIndex: number = absHeightDiffs.indexOf(Math.max(...absHeightDiffs));
    const worstHeightDiff: number = average_height - heights[worstPartitionIndex];

    if (bestScore === null || Math.abs(worstHeightDiff) < bestScore) {
      bestScore = Math.abs(worstHeightDiff);
      bestPartitions = partitions;
      noImprovementsCount = 0;
    } else {
      noImprovementsCount += 1;
    }

    if (worstHeightDiff === 0 || noImprovementsCount > 5 || count > 5) {
      // We got the best partion!
      return bestPartitions.map((x: number[]) => x.map(() => wordsArray.shift()).join(' '));
    }

    count++;

    const move: TDirection = worstHeightDiff < 0 ? -1 : 1;

    const boundToMove: number =
      worstPartitionIndex === 0
        ? 0
        : worstPartitionIndex === numLines - 1
        ? numLines - 2
        : worstHeightDiff < 0 !== heights[worstPartitionIndex - 1] > heights[worstPartitionIndex + 1]
        ? worstPartitionIndex - 1
        : worstPartitionIndex;

    const direction: TDirection = boundToMove < worstPartitionIndex ? -1 : 1;
    partition_between[boundToMove] += move * direction;
  }

  return [input];
}
