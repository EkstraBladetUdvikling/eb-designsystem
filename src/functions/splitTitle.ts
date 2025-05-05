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
      if (idx + 1 < split.length) {
        split[idx] = split[idx] + ' ' + split[idx + 1];
        split.splice(idx + 1, 1);
      }
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
 * Splits a title into multiple lines based on specified constraints
 *
 * @param options - An object containing the following properties:
 *   - input: The input string to split.
 *   - minChars: The minimum number of characters per line (default is 3).
 *   - minLines: The minimum number of lines (default is 1).
 *   - maxLines: The maximum number of lines (default is 4).
 * @returns {string[]}
 */
export function splitTitle(options: ISplitTitleOptions): string[] {
  const { input, minChars = 3, minLines = 1, maxLines = 4 } = options;
  const tokens = splitIntoLines(input, minChars);
  const numLines = Math.min(Math.max(Math.ceil(input.length / 20), minLines), maxLines);
  if (numLines <= 1) return [input];
  if (numLines >= tokens.length) return tokens;

  const lengths = tokens.map((t) => t.length);
  const avgLineLength = (input.length + 1) / numLines + 1;

  const prefixSums = [0];
  lengths.reduce((prefix, cur, i) => {
    prefixSums[i + 1] = prefix + cur;
    return prefixSums[i + 1];
  }, 0);

  const dp = Array.from({ length: tokens.length + 1 }, () => Array(numLines + 1).fill(Infinity));
  dp[0][0] = 0.0;

  const lookup = Array.from({ length: tokens.length + 1 }, () => Array(numLines + 1).fill(-1));

  for (let i = 1; i <= tokens.length; i++) {
    for (let k = 0; k < i; k++) {
      const loss = Math.abs(avgLineLength - (prefixSums[i] - prefixSums[k] + (i - k - 1)));
      for (let j = 1; j <= numLines; j++) {
        const totalLoss = Math.max(dp[k][j - 1], loss);
        if (totalLoss < dp[i][j]) {
          dp[i][j] = totalLoss;
          lookup[i][j] = k;
        }
      }
    }
  }

  const result = [];
  let i = tokens.length;
  for (let j = numLines; j > 0; j--) {
    const k = lookup[i][j];
    result.unshift(tokens.slice(k, i).join(' '));
    i = k;
  }

  return result;
}
