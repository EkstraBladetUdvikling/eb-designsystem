import type { ITooltipOptions } from '../types/tooltipAction';

import Tooltip from '../components/tooltip/Tooltip.svelte';
import { mount, unmount } from "svelte";

export default function(anchorNode: HTMLElement, options: ITooltipOptions) {
  const target = document.createElement('div');
  const instance = mount(Tooltip, {
      props: { anchorNode, ...options },
      target,
    });

  return {
    destroy() {
      unmount(instance);
    },
    update(newProps: ITooltipOptions) {
      instance.$set(newProps);
    },
  };
}
