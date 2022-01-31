<script lang="ts" context="module">
  import type { GraphicTypes, IconTypes } from 'Icon.svelte';

  // import Check from './svgs/check.svg';
  import * as IconSVGS from './IconComponents';
</script>

<script lang="ts">
  export let className: string = undefined;
  export let name: GraphicTypes | IconTypes = undefined;
  export let width: number | string = undefined;
  export let style: string = undefined;

  $: cssWidth = width ? '--icon-size: ${width}px;' : '';
  $: styleAttr = style ? `${cssWidth} ${style}` : cssWidth;

  let baseClass = className ? `icon-svg ${className}` : 'icon-svg';
</script>

{#if name}
  <svelte:component this={IconSVGS[name.replace('-', '')]} style={styleAttr} class={baseClass} />
{/if}
