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
    {#if $$slots.header}
      <slot name="header" class="card-header"></slot>
    {/if}
    {#if $$slots.media}
      <slot name="media" class="card-media"></slot>
    {/if}
    <slot></slot>
    {#if $$slots.content}
    <div class="card-content">
      <slot name="content"></slot>
    </div>
    {/if}
    {#if $$slots.footer}
      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    {/if}
  </a>
{:else}
  <div class={baseClass} {style}>
    {#if $$slots.header}
      <div class="card-header">
        <slot name="header"></slot>
      </div>
    {/if}
    {#if $$slots.media}
      <div class="card-media">
        <slot name="media"></slot>
      </div>
    {/if}
    <slot></slot>
    {#if $$slots.content}
    <div class="card-content">

      <slot name="content"></slot>
    </div>
    {/if}
    {#if $$slots.footer}
      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    {/if}
  </div>
{/if}
