<script lang="ts">
  import Prism from 'svelte-prism';
  import { LoremIpsum } from 'lorem-ipsum';
  import { sourceType } from '../stores';
  import { Accordion } from '../../src';

  const lorem = new LoremIpsum(
    {
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 12,
        min: 4,
      },
    },
    'html'
  );

  const tabs = [];

  for (let i = 0; i < 3; i++) {
    tabs.push({
      title: `Tab ${i + 1}`,
      content: lorem.generateParagraphs(3),
    });
  }
</script>

<h1 class="color--eb">Accordion</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { Accordion } from '@ekstra-bladet/designsystem';`}
  </Prism>
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
      <i class="fas fa-chevron-down" />
    </div>
    <div class="accordion-body padding-m padding-l--rl fontsize-small">
      Content 1
    </div>
  </div>
  <div class="accordion-tab margin-m--b">
    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">
      <span class="fontweight-bold fontsize-medium">Tab 2</span>
      <i class="fas fa-chevron-down" />
    </div>
    <div class="accordion-body padding-m padding-l--rl fontsize-small">
      Content 2
    </div>
  </div>
  <div class="accordion-tab margin-m--b">
    <div class="accordion-header flex flex-justify--between flex-align--center padding-m">
      <span class="fontweight-bold fontsize-medium">Tab 3</span>
      <i class="fas fa-chevron-down" />
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
