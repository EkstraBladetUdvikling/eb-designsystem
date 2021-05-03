<script lang="ts">
  import Prism from 'svelte-prism';

  import type { IconTypes } from 'Icon.svelte';
  import { Icon } from '../../src/_components';

  const icons: IconTypes[] = [
    'angle-down',
    'angle-left',
    'angle-right',
    'angle-up',
    'article',
    'check',
    'creditcard',
    'ebplus_icon',
    'ebplus_sort',
    'envelope',
    'gallery',
    'headphones',
    'headset',
    'lock',
    'medielogin',
    'menu-bars',
    'miteb-regular',
    'miteb-solid',
    'newspaper',
    'play',
    'smartphone',
    'tag-regular',
    'tag-solid',
    'tags-regular',
    'tags-solid',
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
