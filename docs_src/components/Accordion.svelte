<script lang="ts">
  import Prism from 'svelte-prism';

  import type { ITabsConfig } from '../../src/types/Accordion';

  import { Accordion } from '../../src';
  import { rdmParagraphs } from '../lipsum';
  import { sourceType } from '../stores';

  const tabs: ITabsConfig[] = [];

  for (let i = 0; i < 3; i++) {
    tabs.push({
      content: `<h2>Test af h2</h2>${rdmParagraphs()}`,
      title: `Tab ${i + 1}`,
    });
  }
</script>

<h1 class="color--eb">Accordion</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { Accordion } from '@ekstra-bladet/designsystem';`}
  </Prism>

  <table class="table">
    <thead>
      <tr>
        <th>Prop name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>tabs</td>
        <td>ITabsConfig[]</td>
        <td />
        <td>
          Array of tab data. See <span class="badge badge--small" data-type="secondary">Tab</span> props below for details
        </td>
      </tr>
      <tr>
        <th colspan="4">Tab</th>
      </tr>
      <tr>
        <td>content</td>
        <td>string / html</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>title</td>
        <td>string</td>
        <td />
        <td />
      </tr>
    </tbody>
  </table>
{/if}

<Accordion {tabs} />

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Accordion {tabs} />`}
  </Prism>
{:else}
  <Prism language="html">
    {`<div class="accordion card-mode padding-l ff-secondary width-1of1">
  <div class="accordion-tab margin-m--b">
    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">
      <span class="fontweight-bold fontsize-medium">Tab 1</span>
      <svg viewBox="0 0 50 50">
        <use xlink:href="#angle-down"></use>
      </svg>
    </div>
    <div class="accordion-body padding-m padding-l--rl fontsize-small">
      Content 1
    </div>
  </div>
  <div class="accordion-tab margin-m--b">
    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">
      <span class="fontweight-bold fontsize-medium">Tab 2</span>
      <svg viewBox="0 0 50 50">
        <use xlink:href="#angle-down"></use>
      </svg>
    </div>
    <div class="accordion-body padding-m padding-l--rl fontsize-small">
      Content 2
    </div>
  </div>
  <div class="accordion-tab margin-m--b">
    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">
      <span class="fontweight-bold fontsize-medium">Tab 3</span>
      <svg viewBox="0 0 50 50">
        <use xlink:href="#angle-down"></use>
      </svg>
    </div>
    <div class="accordion-body padding-m padding-l--rl fontsize-small">
      Content 3
    </div>
  </div>
</div>`}
  </Prism>

  <Prism language="js">
    {`const accordions = document.querySelectorAll(".accordion");
for (const accordion of accordions) {
  const tabs = accordion.querySelectorAll(".accordion-tab");
  for (const tab of tabs) {
    const head = tab.querySelector(".accordion-header");
    head.addEventListener('click', () => {
      for (const othertab of tabs) {
        if (othertab !== tab) {
          othertab.classList.remove('accordion-expanded');
        }
      }
      tab.classList.toggle('accordion-expanded');
    });
  }
}`}
  </Prism>
{/if}
