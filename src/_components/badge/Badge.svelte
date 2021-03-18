<script lang="ts">
  export let className: string;

  let cssClass = 'badge';
  if (className) {
    cssClass = `${cssClass} ${className}`;
  }

  type TExtension = 'small';
  export let extension: TExtension | TExtension[];

  if (extension) {
    if (typeof extension === 'string') {
      cssClass = `${cssClass} button--${extension}`;
    } else if (Array.isArray(extension)) {
      cssClass = `${cssClass} badge--${extension.join(' badge--')}`;
    }
  }

  type TType = 'danger' | 'primary' | 'secondary' | 'succes';
  export let type: TType;

  if (type) {
    cssClass = `${cssClass} badge--${type}`;
  }

  let style: string = '';
  export let onClick: any;

  if (onClick) {
    style = 'cursor: pointer';
  }
</script>

<span class={cssClass} on:click={onClick} {style} data-type={type}>
  <slot />
</span>
