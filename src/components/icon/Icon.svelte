<script lang="ts" context="module">
  import type { IconTypes } from 'Icon.svelte';

  // import Check from './svgs/check.svg';
  import * as IconSVGS from './IconComponents';
</script>

<script lang="ts">
  export let className: string = undefined;
  export let name: IconTypes = undefined;
  export let flipped: boolean = false;
  export let gradient: boolean = false;
  export let type: 'svg' | 'fa' = 'svg';
  export let width: number | string = 36;
  export let style: string = undefined;

  const defaultStyle = type === 'svg' ? `width: ${width}px; height: ${width}px;` : '';

  $: style = style ? `${defaultStyle} ${style}` : defaultStyle;
  const cssClass = gradient ? 'icon-svg icon-gradient' : 'icon-svg';

  let baseClass = className ? `${cssClass} ${className}` : cssClass;
</script>

{#if type === 'svg'}
  {#if gradient}
    <svelte:component this={IconSVGS['gradient']} style="height:0;width:0;" />
  {/if}
  <svelte:component this={IconSVGS[name.replace('-', '')]} {style} class={baseClass} on:click data-flipped={flipped} />
{:else}
  <i class={className} {style} aria-hidden="true" />
{/if}
