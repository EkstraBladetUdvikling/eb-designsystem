<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let className = undefined;
  export let isSwitch = false;

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

{#if isSwitch}
  <button data-status={itsOn} class="toggle--switch {baseClass}" on:click={toggle}>
    <slot name="on" />
  </button>
  <slot name="icon" />
  <button data-status={itsOn} class="toggle--switch {baseClass}" on:click={toggle}>
    <slot name="off" />
  </button>
{:else}
  <button class={baseClass} on:click={toggle}>
    {#if itsOn}
      <slot name="on" />
    {:else}
      <slot name="off" />
    {/if}
  </button>
{/if}
