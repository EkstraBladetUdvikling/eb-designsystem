declare module 'Icon.svelte' {
  export { SvelteComponentDev as default } from 'svelte/internal';

  export type IconTypes =
    | 'angle-down'
    | 'angle-left'
    | 'angle-right'
    | 'angle-up'
    | 'article'
    | 'at'
    | 'check'
    | 'chevrondown'
    | 'chevronleft'
    | 'chevronup'
    | 'chevronright'
    | 'clock'
    | 'creditcard'
    | 'ebpluscirclesolid'
    | 'ebplus'
    | 'envelope'
    | 'figcaption-pin'
    | 'gallery'
    | 'headphones'
    | 'headset'
    | 'history'
    | 'lightning'
    | 'lock'
    | 'medielogin'
    | 'menu-bars'
    | 'miteb'
    | 'miteb-solid'
    | 'newspaper'
    | 'phone'
    | 'play'
    | 'rss'
    | 'smartphone'
    | 'star'
    | 'tag'
    | 'tag-solid'
    | 'tags'
    | 'tags-solid'
    | 'toggle-off'
    | 'toggle-on'
    | 'video';

  export type GraphicTypes = 'ebupdate' | 'ekstrabladet';
}

declare module '*.svg';
