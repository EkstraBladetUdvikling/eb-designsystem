<script lang="ts">
  import type { GraphicTypes, IconTypes } from '../../types/Icon';

  export let className: string | undefined = undefined;
  export let name: GraphicTypes | IconTypes | undefined = undefined;
  export let width: number | string | undefined = undefined;
  export let style: string | undefined = undefined;

  $: cssWidth = width ? `--icon-size: ${width}px;` : '';
  $: styleAttr = style ? `${cssWidth} ${style}` : cssWidth;

  const baseClass = className ? `icon-svg ${className}` : 'icon-svg';
</script>

{#if name}
  <svg style={styleAttr} class={baseClass} viewBox="0 0 14 14">
    <use xlink:href="#{name}" />
  </svg>
{/if}
