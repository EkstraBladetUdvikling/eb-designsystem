import fitty from 'fitty';

import { splitTitle } from './splitTitle';

function fit(titleParts: HTMLSpanElement[]): void {
  titleParts.forEach((titlePart) => {
    const fitEl = fitty(titlePart);
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
export async function splitNfitTitle(
  title: string,
  minLines: number,
  maxLines: number,
  safe = false
): Promise<DocumentFragment> {
  const titleSplit: string[] = splitTitle(title, minLines, maxLines);

  const titleFrag = document.createDocumentFragment();
  const titleSpans = [];
  titleSplit.forEach((txt: string) => {
    const titleSpan = document.createElement('span');
    titleSpan.classList.add('fitty-line');
    titleSpan.innerText = txt;
    titleFrag.appendChild(titleSpan);
    titleSpans.push(titleSpan);
  });

  if (safe) {
    fit(titleSpans);
  } else {
    await document.fonts.ready.then(() => {
      fit(titleSpans);
    });
  }

  return titleFrag;
}
