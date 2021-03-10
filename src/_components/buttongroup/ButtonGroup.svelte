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

  if (className) baseClass = `${className} ${baseClass}`;

  type TType = 'accept' | 'cancel' | 'primary' | 'secondary';
  export let type: TType;

  if (type) {
    baseClass = `${baseClass} buttongroup--${type}`;
  }

  export let color;

  if (color) {
    baseClass = `${baseClass} buttongroup--special`;
  }
  console.log('Background', Background[color]);
  const { backgroundColor: colorBackground, color: colorForeground } = Background[color]
    ? Background[color]
    : Background['Breaking'];
</script>

{#if color}
  <style>
    .buttongroup--special .button {
          background: var(--color--white);
      border-color: var(--groupcolor-main);
      border-right-width: 0;
      color: var(--groupcolor-main);
        }

        .buttongroup--special .button:active,
        .buttongroup--special .button:hover,
        .buttongroup--special .button:focus,
        .buttongroup--special .button[data-selected="true"] {
          background: var(--groupcolor-main);
      border-color: var(--groupcolor-main);
      color: var(--groupcolor-main-foreground);
        }
  </style>
{/if}

<div class={baseClass} style="--groupcolor-main:{colorBackground};--groupcolor-foreground:{colorForeground};">
  <slot />
</div>
