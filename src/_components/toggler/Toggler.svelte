<script lang="ts">
  export let className = undefined;

  let baseClass = `toggle`;

  if (className) baseClass = `${className} ${baseClass}`;

  let itsOn = true;
  function toggle() {
    itsOn = !itsOn;
  }
</script>

<button class={baseClass} on:click={toggle}>
  {#if itsOn}
    <slot name="on" />
  {:else}
    <slot name="off" />
  {/if}
</button>
