<script lang="ts">
  export let className: string;

  let cssClass = 'badge';

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

  let style: string = undefined;
  export let onClick: any;

  if (onClick) {
    style = 'cursor: pointer';
  }
</script>

<span class={`${cssClass} ${className}`} on:click {style} data-type={type}>
  <slot />
</span>
