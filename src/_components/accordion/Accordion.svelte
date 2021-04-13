<script lang="ts">
  import { onMount } from 'svelte';

  /**
   * dataTheme: string - Adds a theme to the accordion (optional)
   * tabs: Array - data to fill the accordion-tabs
   */
  interface ITabsConfig {
    content: string;
    title: string;
  }

  export let dataTheme: 'darkmode' | 'lightmode' | undefined = undefined;
  export let tabs: ITabsConfig[];
  let selectedAccordion;

  onMount(() => {
    const tabs = selectedAccordion.querySelectorAll('.accordion-tab');
    for (const tab of tabs) {
      const head = tab.querySelector('.accordion-header');
      head.addEventListener('click', () => {
        for (const othertab of tabs) {
          if (othertab !== tab) {
            othertab.classList.remove('accordion-expanded');
          }
        }
        tab.classList.toggle('accordion-expanded');
      });
    }
  });
</script>

<div data-theme={dataTheme} bind:this={selectedAccordion} class="accordion card-mode padding-l ff-secondary width-1of1">
  {#each tabs as tab}
    <div class="accordion-tab margin-m--b">
      <div class="accordion-header flex flex-justify--between flex-align--center padding-m">
        <span class="fontweight-bold fontsize-medium">{tab.title}</span>
        <i class="fas fa-chevron-down" />
      </div>
      <div class="accordion-body padding-m padding-l--rl fontsize-small">
        <span>{tab.content}</span>
      </div>
    </div>
  {/each}
</div>
