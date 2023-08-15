type TDirection = 1 | -1;

/**
 *
 * @param input {string}
 * @param minLines {number}
 * @param maxLines {number}
 * @returns {srtring[]}
 */
export function splitTitle(input: string, minLines: number = 1, maxLines: number = 4): string[] {
  // Split word in array
  const wordsArray = input.split(' ');
  const arrayOfLengths = wordsArray.map((x) => x.length);

  // Calculate optimal number of lines
  const numLines: number = Math.min(Math.max(Math.ceil(input.length / 20), minLines), maxLines);

  if (numLines <= 1) return [input];
  if (numLines >= arrayOfLengths.length) return wordsArray;

  const partition_between = Array.from({ length: numLines - 1 }).map(
    (_x, i) => (i + 1) * Math.floor(arrayOfLengths.length / numLines),
  );

  const average_height =
    arrayOfLengths.reduce((arr, cur) => {
      return arr + cur;
    }) / numLines;
  let bestScore: number = null;
  let bestPartitions: number[][] = null;
  let count = 0;

  // Safelimit number of iterations to find optimal partion
  while (count < 20) {
    const starts: number[] = [0].concat(...partition_between);
    const ends: number[] = partition_between.concat(arrayOfLengths.length);
    const partitions: number[][] = Array.from({ length: numLines }).map((_x, i) =>
      arrayOfLengths.slice(starts[i], ends[i]),
    );
    // Calculate the sum of wordlengths (heights)
    const heights: number[] = partitions.map((partition) => partition.reduce((arr, cur) => arr + cur, 0));

    const absHeightDiffs: number[] = heights.map((x) => Math.abs(average_height - x));
    const worstPartitionIndex: number = absHeightDiffs.indexOf(Math.max(...absHeightDiffs));
    const worstHeightDiff: number = average_height - heights[worstPartitionIndex];

    let noImprovementsCount: number;

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
