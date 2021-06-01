import { Writable, writable } from 'svelte/store';

type SourceTyping = 'svelte' | 'html';

const localeSourceType = localStorage.getItem('sourceType') as SourceTyping;

const sourceType: Writable<SourceTyping> = writable(localeSourceType || 'html');

sourceType.subscribe((value) => {
  localStorage.setItem('sourceType', value);
});
