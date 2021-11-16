<script lang="ts">
  import { getContext } from 'svelte';
  import { BUTTONS } from './Tabs.svelte';

  const button = {};
  const { registerTab, selectButton, selectedButton } = getContext(BUTTONS);

  registerTab(button);

  export let className = undefined;

  let baseClass = `button`;

  $: cssClass = className ? `${baseClass} ${className}` : baseClass;
</script>

<button
  class={cssClass}
  data-selected={$selectedButton === button}
  on:click|stopPropagation={() => selectButton(button)}
>
  <slot />
</button>
