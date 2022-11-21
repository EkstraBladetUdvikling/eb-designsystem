import type { Writable } from 'svelte/store';

export interface IBUTTONS {
  registerPanel: (input: object) => void;
  registerTab: (button: object) => void;
  selectedPanel: Writable<HTMLElement>;
  selectButton: (button: object) => void;
  selectedButton: TSelectedButton;
}

export type TButton = { button: number };
export type TRegisterButton = (button: TButton) => void;
export type TSelectButton = (button: TButton) => void;
export type TSelectedButton = Writable<TButton>;
