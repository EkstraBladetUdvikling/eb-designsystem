<script lang="ts" context="module">
  export type IconTypes =
    | 'angledown'
    | 'angleleft'
    | 'angleright'
    | 'angleup'
    | 'article'
    | 'check'
    | 'creditcard'
    | 'ebplusicon'
    | 'ebplussort'
    | 'envelope'
    | 'gallery'
    | 'headphones'
    | 'headset'
    | 'lock'
    | 'medielogin'
    | 'menubars'
    | 'mitebregular'
    | 'mitebsolid'
    | 'mobilphone'
    | 'newspaper'
    | 'playcircle'
    | 'tagregular'
    | 'tagsolid'
    | 'tagsregular'
    | 'tagssolid'
    | 'video';
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
    <use href="eb.svg#{name}" />
  </svg>
{:else}
  <i class={className} aria-hidden="true" />
{/if}
