<script lang="ts">
  import { getContext } from 'svelte';
  import { BUTTONS } from './PillNavigation.svelte';

  const button = {};
  const { registerTab, selectButton, selectedButton } = getContext(BUTTONS);

  registerTab(button);

  export let className = undefined;

  let baseClass = `button`;

  if (className) baseClass = `${className} ${baseClass}`;
</script>

<button class={baseClass} data-selected={$selectedButton === button} on:click={() => selectButton(button)}>
  <slot />
</button>
