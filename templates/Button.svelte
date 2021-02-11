<script>

  export let classExtension;
  export let click;
  export let style;
  export let type;

  let cssClass = 'button';

  if (classExtension)
    cssClass = `${cssClass} ${classExtension}`;
  if (style) {
    cssClass = `${cssClass} button--${style}`;
  }

  if (type) {
    cssClass = `${cssClass} button--${type}`;
  }
</script>

<button class={cssClass} on:click={click}>
  <slot></slot>
</button>
