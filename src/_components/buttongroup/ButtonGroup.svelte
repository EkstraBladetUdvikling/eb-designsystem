<script lang="ts" context="module">
  export const BUTTONS = {};
</script>

<script lang="ts">
  import { setContext, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  import { Background } from '@ekstra-bladet/eb-colors/dist/eb-colors';

  const buttons = [];
  const panels = [];
  const selectedButton = writable(null);
  const selectedPanel = writable(null);

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

    registerPanel: (panel) => {
      panels.push(panel);
      selectedPanel.update((current) => current || panel);

      onDestroy(() => {
        const i = panels.indexOf(panel);
        panels.splice(i, 1);
        selectedPanel.update((current) => (current === panel ? panels[i] || panels[panels.length - 1] : current));
      });
    },

    selectButton: (button) => {
      const i = buttons.indexOf(button);
      selectedButton.set(button);
      selectedPanel.set(panels[i]);
    },
    selectedButton,
    selectedPanel,
  });

  export let className = undefined;

  let baseClass = `buttongroup`;

  type TType = 'accept' | 'cancel' | 'primary' | 'secondary';
  export let type: TType = undefined;

  if (type) {
    baseClass = `${baseClass} buttongroup--${type}`;
  }

  export let color = undefined;

  if (color) {
    baseClass = `${baseClass} buttongroup--special`;
  }

  const { backgroundColor: colorBackground, color: colorForeground } = Background[color]
    ? Background[color]
    : Background['Bruger'];

  console.log(color, colorBackground, colorForeground);

  $: cssClass = className ? `${className} ${baseClass}` : baseClass;
</script>

<div class={cssClass} style="--groupcolor-main:{colorBackground};--groupcolor-foreground:{colorForeground};">
  <slot />
</div>
