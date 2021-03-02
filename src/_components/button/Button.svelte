<script lang="ts">
  export let className: string;
  export let click: (ev: MouseEvent) => void;
  export let disabled: boolean = false;
  export let selected: boolean = false;

  let cssClass = 'button';

  if (className) {
    cssClass = `${cssClass} ${className}`;
  }

  type TExtension = 'big' | 'icon' | 'link' | 'small' | 'solid';
  export let extension: TExtension | TExtension[];

  if (extension) {
    if (typeof extension === 'string') {
      cssClass = `${cssClass} button--${extension}`;
    } else if (Array.isArray(extension)) {
      cssClass = `${cssClass} button--${extension.join(' button--')}`;
    }
  }

  type TType = 'accept' | 'cancel' | 'primary' | 'secondary';
  export let type: TType;

  if (type) {
    cssClass = `${cssClass} button--${type}`;
  }
</script>

<button class={cssClass} on:click={click} {disabled} data-selected={selected}>
  <slot />
</button>
