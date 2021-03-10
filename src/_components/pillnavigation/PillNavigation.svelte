<script lang="ts" context="module">
  export const BUTTONS = {};
</script>

<script lang="ts">
  import { setContext, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

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

  let baseClass = `pillcomponent`;

  if (className) baseClass = `${className} ${baseClass}`;
</script>

<div class={baseClass}>
  <slot />
</div>
