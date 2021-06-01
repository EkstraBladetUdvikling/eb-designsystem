import { Writable, writable } from 'svelte/store';

const localeSourceType: string = localStorage.getItem('sourceType');

export const sourceType: Writable<string> = writable(localeSourceType || 'html');

sourceType.subscribe((value) => {
  localStorage.setItem('sourceType', value);
});
