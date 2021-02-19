<script lang="ts">
  export let className: string;
  export let click: (ev: MouseEvent) => void;
  export let disabled: boolean = false;

  type TExtension = 'big' | 'icon' | 'link' | 'solid';
  export let extension: TExtension | TExtension[];

  type TType = 'accept' | 'cancel' | 'primary' | 'secondary';
  export let type: TType;

  let cssClass = 'button';

  if (className) {
    cssClass = `${cssClass} ${className}`;
  }

  if (extension) {
    if (typeof extension === 'string') {
      cssClass = `${cssClass} button--${extension}`;
    } else if (Array.isArray(extension)) {
      cssClass = `${cssClass} button--${extension.join(' button--')}`;
    }
  }

  if (type) {
    cssClass = `${cssClass} button--${type}`;
  }
</script>

<button class={cssClass} on:click={click} {disabled}>
  <slot />
</button>
