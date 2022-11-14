<script lang="ts">
  import { getContext } from 'svelte';
  import type { IBUTTONS } from '../../types/ButtonGroup';

  const button = {};
  const { registerTab, selectButton, selectedButton } = getContext<IBUTTONS>('BUTTONS');

  registerTab(button);

  export let className = undefined;

  const baseClass = `button`;

  $: cssClass = className ? `${baseClass} ${className}` : baseClass;
</script>

<button
  class={cssClass}
  data-selected={$selectedButton === button}
  on:click|stopPropagation={() => selectButton(button)}
>
  <slot />
</button>
