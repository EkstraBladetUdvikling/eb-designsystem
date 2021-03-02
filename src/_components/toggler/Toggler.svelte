<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let className = undefined;

  let baseClass = `toggle`;

  if (className) baseClass = `${className} ${baseClass}`;

  /**
   * Handle user click on toggle element
   */
  const dispatch = createEventDispatcher();
  let itsOn = true;
  function toggle() {
    itsOn = !itsOn;

    dispatch('toggle', itsOn);
  }
</script>

<button class={baseClass} on:click={toggle}>
  {#if itsOn}
    <slot name="on" />
  {:else}
    <slot name="off" />
  {/if}
</button>
