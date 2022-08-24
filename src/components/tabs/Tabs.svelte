<script lang="ts" context="module">
  export const BUTTONS = {};
</script>

<script lang="ts">
  import { onDestroy, setContext, SvelteComponent } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  export const selectedId: Writable<number> = writable(0);

  type TButton = HTMLElement | typeof SvelteComponent;
  const buttons: TButton[] = [];
  const panels: HTMLElement[] = [];
  const selectedButton = writable(null);
  const selectedPanel = writable(null);

  selectedId.subscribe((i: number) => {
    selectedButton.set(buttons[i]);
    selectedPanel.set(panels[i]);
  });

  setContext(BUTTONS, {
    registerPanel: (panel: HTMLElement) => {
      panels.push(panel);
      selectedPanel.update((current) => current || panel);

      onDestroy(() => {
        const i = panels.indexOf(panel);
        panels.splice(i, 1);
        selectedPanel.update((current) => (current === panel ? panels[i] || panels[panels.length - 1] : current));
      });
    },

    registerTab: (button: TButton) => {
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
    selectedPanel,
  });

  export let className = undefined;
</script>

<div class={className}>
  <slot />
</div>
