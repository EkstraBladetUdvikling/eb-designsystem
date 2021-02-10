<script>
  export let classExtension;
  export let style;
  export let type;

  let cssClass = `button ${classExtension}`;

  if (style) {
    cssClass = `${cssClass} button--${style}`;
  }

  if (type) {
    cssClass = `${cssClass} button--${type}`;
  }
</script>

<button class={cssClass}>
  <slot></slot>
</button>
