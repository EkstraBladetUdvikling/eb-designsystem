<script lang="ts">
  export let className: string;
  export let name: string;
  export let style: string;
  export let viewBox: string;
  export let type: 'svg' | 'fa' = 'svg';

  if (!viewBox) {
    switch (name) {
      case 'article':
      // viewBox = '0 0 51 47';
      // break;
      case 'check_pro':
      // viewBox = '0 0 442.6 335.1';
      // break;
      case 'credit_card':
      // viewBox = '0 0 576 448';
      // break;
      case 'ebplus_sort':
      // viewBox = '0 0 595.3 597.4';
      // break;
      case 'envelope':
      // viewBox = '0 0 512 384';
      // break;
      case 'lock':
      // viewBox = '0 0 448 512';
      // break;
      case 'medielogin':
      // viewBox = '0 0 63.6 81.5';
      // break;
      case 'mobil_fone':
      // viewBox = '0 0 320 512';
      // break;
      case 'newspaper':
      // viewBox = '0 0 42 39';
      // break;
      case 'tags-regular':
      // viewBox = '0 0 640 512';
      // break;
      case 'tags-solid':
      // viewBox = '0 0 640 512';
      // break;
      case 'video':
      // viewBox = '0 0 51 48';
      // break;
      case 'angle_down_pro':
      case 'angle_left_pro':
      case 'angle_up_pro':
      case 'ebplus_icon':
      case 'gallery':
      case 'headphones':
      case 'headset':
      case 'menu-bars':
      case 'miteb-regular':
      case 'miteb-solid':
      case 'play-circle-light':
      case 'tag-regular':
      case 'tag-solid':
      default:
        viewBox = '0 0 50 50';
    }
  }
</script>

{#if type === 'svg'}
  <svg {viewBox} {style} class={className}>
    <use href="eb.svg#{name}" />
  </svg>
{:else}
  <i class={className} aria-hidden="true" />
{/if}
