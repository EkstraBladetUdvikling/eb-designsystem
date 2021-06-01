import { Writable, writable } from 'svelte/store';

export const sourceType: Writable<'svelte' | 'html'> = writable('html');
