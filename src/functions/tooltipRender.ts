import tippy from 'tippy.js/headless';
import type { TTippyCustomOptions, TTooltipInstance } from '../types/tooltipAction';

/**
 *
 * @param anchorNode
 * @param tooltipNode
 * @param tippyOptions
 * @returns
 */
export function tooltipRender(
  anchorNode: HTMLElement,
  tooltipNode: HTMLElement,
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
    zIndex: 9999999,
    ...tippyOptions,
  });
}
