<script>
  import { getContext } from 'svelte';
  import { BUTTONS } from './ButtonGroup.svelte';

  const panel = {};
  const { registerPanel, selectedPanel } = getContext(BUTTONS);

  registerPanel(panel);
</script>

{#if $selectedPanel === panel}
  <slot />
{/if}
