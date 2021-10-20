import type { ITooltipOptions } from '../types/tooltipAction';

// @ts-ignore
import Tooltip from '../components/tooltip/Tooltip.svelte';

export default function (anchorNode: HTMLElement, options: ITooltipOptions) {
  const target = document.createElement('div');
  const instance = new Tooltip({
    target,
    props: { anchorNode, ...options },
  });

  return {
    update(newProps: ITooltipOptions) {
      Object.assign(instance, newProps);
    },
    destroy() {
      instance.$destroy();
    },
  };
}
