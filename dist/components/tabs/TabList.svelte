<script lang="ts">
  type TType = 'tabs' | 'pillnavigation';
  export let type: TType = 'tabs';
  export let className = undefined;

  let baseClass = '';

  switch (type) {
    case 'tabs':
      baseClass = 'tabs';
      break;
    case 'pillnavigation':
      baseClass = 'pillnavigation toggle toggle--buttons';
      break;
  }

  $: cssClass = className ? `${baseClass} ${className}` : baseClass;
</script>

<div class={cssClass}>
  <slot />
</div>
