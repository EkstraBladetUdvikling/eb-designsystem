<script lang="ts">
  import type { TThemes } from '../../utilities/data-theme/DataTheme';

  export let className: string = undefined;
  export let src: string = undefined;
  export let style: string = undefined;
  export let theme: TThemes = undefined;

  let baseClass = 'card';

  const dataProps = {};

  for (const prop in $$props) {
    if (prop.indexOf('data-') === 0) {
      dataProps[prop] = $$props[prop];
    }
  }

  $: cssClass = `${className} ${baseClass}`;
</script>

{#if src}
  <a href={src} class={cssClass} {style} data-theme={theme} {...dataProps} on:click>
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
  <div class={cssClass} {style} data-theme={theme} on:click>
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
