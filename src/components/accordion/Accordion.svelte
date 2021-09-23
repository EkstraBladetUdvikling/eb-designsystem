<script lang="ts">
  import { writable } from 'svelte/store';
  import type { Writable } from 'svelte/store';
  import Icon from '../Icon/Icon.svelte';

  /**
   * dataTheme: string - Adds a theme to the accordion (optional)
   * tabs: Array - data to fill the accordion-tabs
   */
  interface ITabsConfig {
    content: string;
    title: string;
  }

  export const activeTab: Writable<Number> = writable(undefined);
  export let dataTheme: 'darkmode' | 'lightmode' | undefined = undefined;
  export let tabs: ITabsConfig[];
</script>

<div data-theme={dataTheme} class="accordion card-mode padding-l ff-secondary width-1of1">
  {#each tabs as tab, i}
    <div class:accordion-expanded={$activeTab === i} class="accordion-tab margin-m--b">
      <div
        class="accordion-header flex flex-justify--between flex-align--center padding-m"
        on:click={() => {
          $activeTab = $activeTab !== i ? i : undefined;
        }}
      >
        <span class="fontweight-bold fontsize-medium">{tab.title}</span>
        <Icon name="angledown" width="14" />
      </div>
      <div class="accordion-body padding-m padding-l--rl fontsize-small">
        {@html tab.content}
      </div>
    </div>
  {/each}
</div>
