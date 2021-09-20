import type { Writable } from 'svelte/store';

export type TButton = { button: number };
export type TRegisterButton = (button: TButton) => void;
export type TSelectButton = (button: TButton) => void;
export type TSelectedButton = Writable<TButton>;
