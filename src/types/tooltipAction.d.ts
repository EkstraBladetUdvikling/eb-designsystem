import type { Instance, Props, RenderProps } from 'tippy.js/headless';

export type TTippyCustomOptions = Partial<Omit<Props, keyof RenderProps>>;
export type TTooltipInstance = Instance<TTippyCustomOptions>;

export interface ITooltipOptions {
  content: string | typeof Component<Props, {}, ''>;
  allowHTML?: boolean;
  props?: any;
  tippyOptions?: TTippyCustomOptions;
}
