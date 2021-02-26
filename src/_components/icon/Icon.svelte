<script lang="ts">
  export let className: string;
  export let name: string;
  export let style: string;
  export let viewBox: string;
  export let type: 'svg' | 'fa' = 'svg';

  if (!viewBox) {
    viewBox = '0 0 50 50';
  }
</script>

{#if type === 'svg'}
  <svg {viewBox} {style} class="icon-svg {className}">
    <use href="eb.svg#{name}" />
  </svg>
{:else}
  <i class={className} aria-hidden="true" />
{/if}
