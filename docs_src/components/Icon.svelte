<script lang="ts">
  import Prism from 'svelte-prism';

  import type { IconTypes } from 'Icon.svelte';
  import { Icon } from '../../src';

  const icons: IconTypes[] = [
    'angle-down',
    'angle-left',
    'angle-right',
    'angle-up',
    'article',
    'check',
    'clock',
    'creditcard',
    'ebplus_icon',
    'ebplus_sort',
    'envelope',
    'figcaption-pin',
    'gallery',
    'headphones',
    'headset',
    'history-regular',
    'lock-old',
    'lock',
    'medielogin',
    'menu-bars',
    'miteb-regular',
    'miteb-solid',
    'newspaper',
    'play',
    'smartphone',
    'star-regular',
    'tag-regular',
    'tag-solid',
    'tags-regular',
    'tags-solid',
    'toggle-off',
    'toggle-on',
    'video',
  ];
</script>

<div class="grid-width--small">
  <h1 class="color--eb">Icon library</h1>
  <p>Der findes følgende svg ikoner</p>

  <div class="flex flex-wrap--wrap">
    {#each icons as name}
      <div
        class="flex flex-column flex-align--center flex-justify--center margin-m padding-m"
        style="border: 1px solid #111; border-radius: 5px;"
      >
        <Icon className="margin-s" style="width: 36px; height: 36px;" {name} />
        <small>{name}</small>
      </div>
    {/each}
  </div>
  <Prism language="html" source={`<Icon {name} className="margin-s" style="width: 36px; height: 36px;" />`} />
</div>
