<script lang="ts">
  type TExtension = 'small';
  type TType = 'danger' | 'primary' | 'secondary' | 'success';

  export let className: string = undefined;
  export let extension: TExtension | TExtension[] = undefined;
  export let href: string = undefined;
  export let style: string = undefined;
  export let type: TType = undefined;

  let baseClass = 'badge';

  if (extension) {
    if (typeof extension === 'string') {
      baseClass = `${baseClass} badge--${extension}`;
    } else if (Array.isArray(extension)) {
      baseClass = `${baseClass} badge--${extension.join(' badge--')}`;
    }
  }

  $: cssClass = `${baseClass} ${className}`;
</script>

{#if href}
  <a {href} class={cssClass} on:click {style} data-type={type}>
    <slot />
  </a>
{:else}
  <span class={cssClass} on:click {style} data-type={type}>
    <slot />
  </span>
{/if}
