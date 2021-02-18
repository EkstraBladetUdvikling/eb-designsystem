<script>

  export let href;

</script>

{#if href}
  <a href={href} class="card">
    <slot></slot>
  </a>
{:else}
  <div class="card">
    <slot></slot>
  </div>
{/if}
