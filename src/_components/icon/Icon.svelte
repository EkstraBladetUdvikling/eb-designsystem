<script lang="ts" context="module">
  import type { IconTypes } from 'Icon.svelte';
</script>

<script lang="ts">
  export let className: string = undefined;
  export let name: IconTypes;
  export let style: string = 'width: 36px; height: 36px;';
  export let viewBox: string;
  export let type: 'svg' | 'fa' = 'svg';

  if (!viewBox) {
    viewBox = '0 0 50 50';
  }
</script>

{#if type === 'svg'}
  <svg {viewBox} {style} class="icon-svg {className}">
    <use href="/svg/symbol/icons.svg#{name}" />
  </svg>
{:else}
  <i class={className} aria-hidden="true" />
{/if}
