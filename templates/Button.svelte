<script>
  export let classExtension;

  export let type;

  let cssClass = `button ${classExtension}`;
  switch (type) {
    case 'solid':
      cssClass = `${cssClass} button--solid`;
      break;
    case 'link':
      cssClass = `${cssClass} button--link`;
      break;
    case 'icon':
      cssClass = `${cssClass} button--icon`;
      break;
  }
</script>

<button class={cssClass}>
  <slot></slot>
</button>
