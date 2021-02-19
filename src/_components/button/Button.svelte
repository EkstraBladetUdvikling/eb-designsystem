<script lang="ts">

  export let className;
  export let click;
  export let style;
  export let type;

  let cssClass = 'button';

  if (className) {
    cssClass = `${cssClass} ${className}`;
  }

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
