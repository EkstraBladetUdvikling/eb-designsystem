import fitty from 'fitty';

import { splitTitle } from './splitTitle';

interface FittyOptions {
  maxSize?: number;
  minSize?: number;
  multiLine?: boolean;
  observeMutations?: MutationObserverInit;
}

// Provide default values
const defaultFittyOptions: FittyOptions = {
  maxSize: undefined,
  minSize: undefined,
  multiLine: false,
  observeMutations: undefined,
};

function fit(titleParts: HTMLSpanElement[], fittyOptions: FittyOptions = defaultFittyOptions): void {
  const cleanFittyOptions = Object.fromEntries(
    Object.entries(fittyOptions).filter(([, fittyOptionsVal]) => fittyOptionsVal !== undefined)
  );

  titleParts.forEach((titlePart) => {
    const fitEl = fitty(titlePart, cleanFittyOptions);
    fitEl.fit();
  });
}

/**
 * splitNfitTitle
 *
 * @param safe {boolean}
 * er en indikator på om man bruger custom-font og derfor er nødt til
 * at vente på document.fonts.ready
 */
interface ISplitNfitOptions extends FittyOptions {
  maxLines?: number;
  minLines?: number;
  safe?: boolean;
}

// Provide default values
const defaultSplitNfitOptions: ISplitNfitOptions = {
  maxLines: 10,
  minLines: 1,
  safe: false,
  ...defaultFittyOptions, // Include FittyOptions defaults
};

export async function splitNfitTitle(
  title: string,
  options: ISplitNfitOptions = defaultSplitNfitOptions
): Promise<DocumentFragment> {
  const { maxLines = 10, maxSize, minLines = 1, minSize, multiLine, observeMutations, safe = false } = options;

  const titleSplit: string[] = splitTitle({ input: title, minLines, maxLines });

  const titleFrag = document.createDocumentFragment();
  const titleSpans: HTMLSpanElement[] = [];

  titleSplit.forEach((txt: string) => {
    const titleSpan = document.createElement('span');
    titleSpan.classList.add('fitty-line');
    titleSpan.innerText = txt;
    titleFrag.appendChild(titleSpan);
    titleSpans.push(titleSpan);
  });

  if (safe) {
    fit(titleSpans, {
      maxSize,
      minSize,
      multiLine,
      observeMutations,
    });
  } else {
    await document.fonts.ready.then(() => {
      fit(titleSpans, {
        maxSize,
        minSize,
        multiLine,
        observeMutations,
      });
    });
  }

  return titleFrag;
}
