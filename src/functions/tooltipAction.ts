import type { ITooltipOptions } from '../types/tooltipAction';

import Tooltip from '../components/tooltip/Tooltip.svelte';

export default function (anchorNode: HTMLElement, options: ITooltipOptions) {
  const target = document.createElement('div');
  const instance = new Tooltip({
    props: { anchorNode, ...options },
    target,
  });

  return {
    destroy() {
      instance.$destroy();
    },
    update(newProps: ITooltipOptions) {
      instance.$set(newProps);
    },
  };
}
