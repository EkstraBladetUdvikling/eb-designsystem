import type { Instance, Props, RenderProps } from 'tippy.js/headless';
import type { SvelteComponent } from 'svelte';

export type TTippyCustomOptions = Partial<Omit<Props, keyof RenderProps>>;
export type TTooltipInstance = Instance<TTippyCustomOptions>;

export interface ITooltipOptions {
  content: string | typeof SvelteComponent;
  allowHTML?: boolean;
  props?: {};
  tippyOptions?: TTippyCustomOptions;
}
