import tippy from 'tippy.js/headless';
import type { TTippyCustomOptions, TTooltipInstance } from '../types/tooltipAction';

export function tooltipRender(
  anchorNode: HTMLElement,
  tooltipNode: HTMLDivElement,
  tippyOptions: TTippyCustomOptions = {}
): TTooltipInstance {
  return tippy(anchorNode, {
    render(_instance) {
      const popperElem = document.createElement('div');
      const arrowElem = document.createElement('div');

      popperElem.className = 'tooltip-container';
      arrowElem.className = 'tooltip-arrow';
      arrowElem.setAttribute('data-popper-arrow', '');
      popperElem.appendChild(tooltipNode);
      popperElem.appendChild(arrowElem);

      return {
        popper: popperElem,
      };
    },
    ...tippyOptions,
  });
}