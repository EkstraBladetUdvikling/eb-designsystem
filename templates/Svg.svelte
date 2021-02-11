<script>
  export let classExtension;
  export let name;
  export let style;
  export let viewBox;

  if (!viewBox) {
    switch (name) {
      case 'ekstrabladet':
      viewBox = '0 0 100 88';
        break;
    }
  }
</script>

<svg viewBox="{viewBox}" style="{style}" class="{classExtension}">
  <use href="eb.svg#{name}"></use>
</svg>
