<script lang="ts">
  import { writable, type Writable } from 'svelte/store';

  import type { ITabsConfig } from '../../types/Accordion';

  import Icon from '../icon/Icon.svelte';

  /**
   * dataTheme: string - Adds a theme to the accordion (optional)
   * tabs: Array - data to fill the accordion-tabs
   */
  function toggleAccordion(event: Event, index: number = 0) {
    event.stopPropagation();
    $activeTab = $activeTab !== index ? index : 0;
  }

  export const activeTab: Writable<number> = writable(0);
  export let dataTheme: 'darkmode' | 'lightmode' | undefined = undefined;
  export let tabs: ITabsConfig[];
</script>

<div data-theme={dataTheme} class="accordion card-mode padding-l ff-secondary width-1of1">
  {#each tabs as tab, i}
    <div class:accordion-expanded={$activeTab === i} class="accordion-tab margin-m--b">
      <div
        class="accordion-header flex flex-justify--between flex-align--center padding-m"
        on:click={(e) => toggleAccordion(e, i)}
        on:keydown={(e) => toggleAccordion(e, i)}
        role="button"
        tabindex={0}
        aria-label={tab.title}
      >
        <span class="fontweight-bold fontsize-medium">{tab.title}</span>
        <Icon name="angle-down" width="14" />
      </div>
      <div class="accordion-body padding-m padding-l--rl">
        {@html tab.content}
      </div>
    </div>
  {/each}
</div>
