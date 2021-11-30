import type { Instance, Props, RenderProps } from 'tippy.js/headless';
import { writable, Writable } from 'svelte/store';

export type TTooltipInstance = Instance<Partial<Omit<Props, keyof RenderProps>>>;

export interface ITooltipStore {
  [key: string]: TTooltipInstance;
}

export const tooltipStore: Writable<ITooltipStore> = writable<ITooltipStore>({});
