<script lang="ts">
  import type { GraphicTypes, IconTypes } from '../../types/Icon';

  interface Props {
    className?: string | undefined;
    name?: GraphicTypes | IconTypes | undefined;
    width?: number | string | undefined;
    style?: string | undefined;
  }

  let {
    className = undefined,
    name = undefined,
    width = undefined,
    style = undefined
  }: Props = $props();

  let cssWidth = $derived(width ? `--icon-size: ${width}px;` : '');
  let styleAttr = $derived(style ? `${cssWidth} ${style}` : cssWidth);

  const baseClass = className ? `icon-svg ${className}` : 'icon-svg';
</script>

{#if name}
  <svg style={styleAttr} class={baseClass} viewBox="0 0 14 14">
    <use xlink:href="#{name}" />
  </svg>
{/if}
