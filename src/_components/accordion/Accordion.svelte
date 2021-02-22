<script lang="ts">
  import { onMount } from 'svelte';
  // Style
  import './Accordion.css';
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
    <div class="accordion-tab margin-s--b">
      <div class="accordion-header flex flex-justify--between padding-m padding-l--rl">
        <span class="fontweight-normal fontsize-large">{tab.title}</span>
        <i class="fas fa-chevron-down" />
      </div>
      <div class="accordion-body padding-m fontsize-small">
        <span>{tab.content}</span>
      </div>
    </div>
  {/each}
</div>
