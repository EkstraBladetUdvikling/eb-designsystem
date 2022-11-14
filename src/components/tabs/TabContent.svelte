<script lang="ts">
  import { getContext } from 'svelte';
  import type { IBUTTONS } from '../../types/ButtonGroup';

  const panel = {};
  const { registerPanel, selectedPanel } = getContext<IBUTTONS>('BUTTONS');

  registerPanel(panel);
</script>

{#if $selectedPanel === panel}
  <slot />
{/if}
