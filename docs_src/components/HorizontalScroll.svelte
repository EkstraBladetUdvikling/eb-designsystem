<script lang="ts">
  import Prism from 'svelte-prism';
  import { LoremIpsum } from 'lorem-ipsum';
  import { sourceType } from '../stores';
  import { ArticleCard, HorizontalScroll } from '../../src';

  const lorem = new LoremIpsum({
    wordsPerSentence: {
      max: 12,
      min: 4,
    },
  });

  const colorClasses = ['sport', 'sex-samliv', 'forbrug', 'underholdning', 'flash', 'nyheder'];

  let source = '';
  let articles = [];

  sourceType.subscribe((value) => {
    source = value;
  });

  for (let i = 0; i < 15; i++) {
    const article = {
      href: '#',
      isPlus: Math.random() < 0.3,
      media: {
        src: `https://loremflickr.com/640/360/city,people,nature?random=${i}`,
      },
      section: lorem.generateWords(1),
      colorClass: colorClasses[Math.floor(Math.random() * colorClasses.length)],
      timestamp: randomDate(),
      title: lorem.generateSentences(1),
    };

    articles.push(article);
  }

  function randomDate() {
    const start = new Date(2019, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
</script>

<h1 class="color--eb">Horizontal Scroll</h1>

{#if source === 'svelte'}
  <Prism language="js">
    {`import { HorizontalScroll } from '@ekstra-bladet/designsystem';`}
  </Prism>
{:else}
  <p>HorizontalScroll kræver javascript som findes under list-v2 på eb</p>
  <Prism language="html">
    {`ekstrabladet/ekstrabladet-publication/src/main/webapp/WEB-INF/jsp/components/list-v2/horizontalscroll.ts`}
  </Prism>
{/if}

<HorizontalScroll title="Title">
  {#each articles as article}
    <ArticleCard {...article} className="margin-s" style="width: 215px;" />
  {/each}
</HorizontalScroll>

{#if source === 'svelte'}
  <Prism language="html">
    {`<HorizontalScroll title="">
  ...
</HorizontalScroll>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<div id="example-id" class="horizontal-scroll-container position-relative">
  <button data-horizontallist="button-prev" class="horizontal-scroll-nav">
    <i class="fa fa-chevron-left"></i>
  </button>
  <button data-horizontallist="button-next" class="horizontal-scroll-nav">
    <i class="fa fa-chevron-right"></i>
  </button>
  <div data-horizontallist="itemcontainer" class="horizontal-scroll-items flex">
    ...
  </div>
</div>

<script>
  (function () {
    <%@ include file="/path/to/horizontalscroll.js" %>

    horizontalScroll('example-id');
  })();
</script>`}
  </Prism>
{/if}
