<script lang="ts" context="module">
  import type { TButton, TRegisterButton, TSelectButton, TSelectedButton } from '../../types/ButtonGroup';

  export interface IButtonContext {
    createContextButton: () => TButton;
    registerButton: TRegisterButton;
    selectButton: TSelectButton;
    selectedButton: TSelectedButton;
  }

  export const BUTTONS = {};
</script>

<script lang="ts">
  import { Background } from '@ekstra-bladet/eb-colors/dist/eb-colors';
  import { onDestroy, setContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  export const selectedId: Writable<number> = writable(0);

  const selectedButton = writable();
  const buttons: TButton[] = [];
  selectedId.subscribe((i: number) => {
    selectedButton.set(buttons[i]);
  });

  setContext(BUTTONS, {
    createContextButton: () => {
      return { button: buttons.length };
    },
    registerButton: (button: TButton) => {
      buttons.push(button);
      selectedButton.update((current) => current || button);

      onDestroy(() => {
        const i = buttons.indexOf(button);
        buttons.splice(i, 1);
        selectedButton.update((current) => (current === button ? buttons[i] || buttons[buttons.length - 1] : current));
      });
    },

    selectButton: (button: TButton) => {
      const i = buttons.indexOf(button);
      selectedId.set(i);
    },
    selectedButton,
  });

  export let className: string | undefined = undefined;

  type TType = 'accept' | 'cancel' | 'primary' | 'secondary';
  export let type: TType | undefined = undefined;
  export let color: keyof typeof Background = 'bruger';
  export let colorHover: keyof typeof Background = 'bruger';
  export let solid: boolean = false;

  let baseClass = `buttongroup`;

  if (solid) {
    baseClass = `${baseClass} buttongroup--solid`;
  }

  if (type) {
    baseClass = `${baseClass} buttongroup--${type}`;
  }

  const { background: colorBackground, color: colorForeground } = Background[color]
    ? Background[color]
    : Background.bruger;

  /**
   * If hovercolor is not specified, use color and utimately fall back to "Bruger"
   */
  colorHover = color && !colorHover ? color : colorHover;

  const { background: hoverColor, color: hoverColorForeground } = Background[colorHover]
    ? Background[colorHover]
    : Background.bruger;

  $: cssClass = className ? `${className} ${baseClass}` : baseClass;
  $: style = `--buttongroup-color: ${colorBackground}; --buttongroup-fgcolor: ${colorForeground}; --buttongroup-color--hover: ${hoverColor}; --buttongroup-fgcolor--hover: ${hoverColorForeground};`;
</script>

<div class={cssClass} {style}>
  <slot />
</div>
