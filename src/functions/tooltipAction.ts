import type { ITooltipOptions } from '../types/tooltipAction';

import Tooltip from '../components/tooltip/Tooltip.svelte';
import { mount } from 'svelte';

export default function (anchorNode: HTMLElement, options: ITooltipOptions) {
  const target = document.createElement('div');
  mount(Tooltip, {
    props: { anchorNode, ...options },
    target,
  });
}
