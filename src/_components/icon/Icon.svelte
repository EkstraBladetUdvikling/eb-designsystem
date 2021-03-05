<script lang="ts" context="module">
  import type { IconTypes } from 'Icon.svelte';
</script>

<script lang="ts">
  export let className: string = undefined;
  export let name: IconTypes;
  export let viewBox: string = '0 0 50 50';
  export let type: 'svg' | 'fa' = 'svg';
  export let width: number | string = 36;
  export let style: string = undefined;

  const defaultStyle = `width: ${width}px; height: ${width}px;`;

  style = style ? `${defaultStyle} ${style}` : defaultStyle;
</script>

{#if type === 'svg'}
  <svg {viewBox} {style} class="icon-svg {className}">
    <use href="/svg/symbol/icons.svg#{name}" />
  </svg>
{:else}
  <i class={className} aria-hidden="true" />
{/if}
