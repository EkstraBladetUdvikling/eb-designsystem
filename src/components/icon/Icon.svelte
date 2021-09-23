<script lang="ts" context="module">
  import type { GraphicTypes, IconTypes } from 'Icon.svelte';

  // import Check from './svgs/check.svg';
  import * as IconSVGS from './IconComponents';
</script>

<script lang="ts">
  export let className: string = undefined;
  export let name: GraphicTypes | IconTypes = undefined;
  export let width: number | string = 36;
  export let style: string = undefined;

  const defaultStyle = `width: ${width}px; height: ${width}px;`;

  $: style = style ? `${defaultStyle} ${style}` : defaultStyle;

  let baseClass = className ? `icon-svg ${className}` : 'icon-svg';
</script>

{#if name}
  <svelte:component this={IconSVGS[name.replace('-', '')]} {style} class={baseClass} on:click />
{/if}
