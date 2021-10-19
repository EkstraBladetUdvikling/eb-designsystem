import type { Props, RenderProps } from 'tippy.js/headless';
import type { SvelteComponent } from 'svelte';

// @ts-ignore
import Tooltip from '../components/tooltip/TooltipDynamic.svelte';

interface TooltipOptions {
  content: string | typeof SvelteComponent;
  props?: {};
  tippyOptions?: Partial<Omit<Props, keyof RenderProps>>;
}

export default function (anchorNode: HTMLElement, options: TooltipOptions) {
  const target = document.createElement('div');
  const instance = new Tooltip({
    target,
    props: { anchorNode, ...options },
  });

  return {
    update(newProps: TooltipOptions) {
      Object.assign(instance, newProps);
    },
    destroy() {
      instance.$destroy();
    },
  };
}
