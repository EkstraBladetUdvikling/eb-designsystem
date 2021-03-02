<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let className = undefined;

  let baseClass = `toggle`;

  if (className) baseClass = `${className} ${baseClass}`;

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
