<script lang="typescript">

  let baseClass = 'card'
  export let className: string;
  export let href: string = undefined;
  export let style: string = undefined;

  if (className) baseClass = `${className} ${baseClass}`;

</script>


{#if href}
  <a href={href} class={baseClass} {style}>
    <slot></slot>
  </a>
{:else}
  <div class={baseClass} {style}>
    <slot></slot>
  </div>
{/if}
