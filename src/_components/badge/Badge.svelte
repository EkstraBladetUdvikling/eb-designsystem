<script lang="ts">
  export let className: string;
  export let href: string;

  type TExtension = 'small';
  export let extension: TExtension | TExtension[];

  export let style: string = undefined;

  type TType = 'danger' | 'primary' | 'secondary' | 'succes';
  export let type: TType;

  let baseClass = 'badge';

  if (extension) {
    if (typeof extension === 'string') {
      baseClass = `${baseClass} button--${extension}`;
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
