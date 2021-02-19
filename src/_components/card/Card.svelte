<script lang="ts">

  let baseClass = "card";
  export let className: string;
  export let href: string = undefined;
  export let style: string = undefined;
  export let type: string = undefined;

  if (className) baseClass = `${className} ${baseClass}`;

  switch(type) {
    case "mode":
      baseClass = `${baseClass} card-mode`;
    case 'small-media':
      baseClass = `${baseClass} card--small-media`;
      break;
    case 'small-media--reverse':
      baseClass = `${baseClass} card--small-media card--small-media--reverse`;
      break;
  }
</script>


{#if href}
  <a href={href} class={baseClass} {style}>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </a>
{:else}
  <div class={baseClass} {style}>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
{/if}
