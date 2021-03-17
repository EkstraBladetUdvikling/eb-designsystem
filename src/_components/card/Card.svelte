<script lang="ts">
  import type { TThemes } from '../../_utilities/data-theme/DataTheme';

  let baseClass = 'card';
  export let className: string;
  export let href: string = undefined;
  export let style: string = undefined;
  export let theme: TThemes = undefined;

  if (className) baseClass = `${className} ${baseClass}`;
</script>

{#if href}
  <a {href} class={baseClass} {style} data-theme={theme}>
    {#if $$slots.header}
      <slot name="header" class="card-header" />
    {/if}
    {#if $$slots.media}
      <slot name="media" class="card-media" />
    {/if}
    <slot />
    {#if $$slots.content}
      <div class="card-content">
        <slot name="content" />
      </div>
    {/if}
    {#if $$slots.footer}
      <div class="card-footer">
        <slot name="footer" />
      </div>
    {/if}
  </a>
{:else}
  <div class={baseClass} {style} data-theme={theme}>
    {#if $$slots.header}
      <div class="card-header">
        <slot name="header" />
      </div>
    {/if}
    {#if $$slots.media}
      <div class="card-media">
        <slot name="media" />
      </div>
    {/if}
    <slot />
    {#if $$slots.content}
      <div class="card-content">
        <slot name="content" />
      </div>
    {/if}
    {#if $$slots.footer}
      <div class="card-footer">
        <slot name="footer" />
      </div>
    {/if}
  </div>
{/if}
