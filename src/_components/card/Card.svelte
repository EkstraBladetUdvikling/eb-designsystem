<script lang="typescript">

  let baseClass = 'card'
  export let className: string;
  export let href: string = undefined;

  if (className) baseClass = `${className} ${baseClass}`;

</script>


{#if href}
  <a href={href} class={baseClass}>
    <slot></slot>
  </a>
{:else}
  <div class={baseClass}>
    <slot></slot>
  </div>
{/if}
