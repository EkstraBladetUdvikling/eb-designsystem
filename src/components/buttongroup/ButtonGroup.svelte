<script lang="ts" context="module">
  export const BUTTONS = {};
</script>

<script lang="ts">
  import './buttongroup.css';

  import { setContext, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import type { Writable } from 'svelte/store';
  import { Background } from '@ekstra-bladet/eb-colors/dist/eb-colors';

  export const selectedId: Writable<number> = writable(0);

  const buttons = [];
  const selectedButton = writable(null);

  selectedId.subscribe((i: number) => {
    selectedButton.set(buttons[i]);
  });

  setContext(BUTTONS, {
    registerTab: (button) => {
      buttons.push(button);
      selectedButton.update((current) => current || button);

      onDestroy(() => {
        const i = buttons.indexOf(button);
        buttons.splice(i, 1);
        selectedButton.update((current) => (current === button ? buttons[i] || buttons[buttons.length - 1] : current));
      });
    },

    selectButton: (button) => {
      const i = buttons.indexOf(button);
      selectedId.set(i);
    },
    selectedButton,
  });

  export let className = undefined;

  type TType = 'accept' | 'cancel' | 'primary' | 'secondary';
  export let type: TType = undefined;
  export let color = undefined;
  export let colorHover = undefined;
  export let solid: boolean = false;

  let baseClass = `buttongroup`;

  if (solid) {
    baseClass = `${baseClass} buttongroup--solid`;
  }

  if (type) {
    baseClass = `${baseClass} buttongroup--${type}`;
  }

  const { backgroundColor: colorBackground, color: colorForeground } = Background[color]
    ? Background[color]
    : Background['Bruger'];

  /**
   * If hovercolor is not specified, use color and utimately fall back to "Bruger"
   */
  colorHover = color && !colorHover ? color : colorHover;

  const { backgroundColor: hoverColor, color: hoverColorForeground } = Background[colorHover]
    ? Background[colorHover]
    : Background['Bruger'];

  $: cssClass = className ? `${className} ${baseClass}` : baseClass;
  $: style = `--buttongroup-color: ${colorBackground}; --buttongroup-fgcolor: ${colorForeground}; --buttongroup-color--hover: ${hoverColor}; --buttongroup-fgcolor--hover: ${hoverColorForeground};`;
</script>

<div class={cssClass} {style}>
  <slot />
</div>
