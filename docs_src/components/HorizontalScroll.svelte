<script lang="ts">
  import Prism from 'svelte-prism';
  import { rdmArticleData } from '../util';
  import { sourceType } from '../stores';
  import { ArticleCard, HorizontalScroll } from '../../src';
  import { writable } from 'svelte/store';

  let articles = writable([
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
  ]);

  const max = 20;
  let count = 2;

  const addingInterval = setInterval(() => {
    if (count < max) {
      articles.update((art) => {
        art.push(rdmArticleData(640, 360));
        return art;
      });
    } else {
      clearInterval(addingInterval);
    }
    count++;
  }, 3000);

  const singleArt = rdmArticleData(640, 360);
  const doubleArt = [rdmArticleData(640, 360), rdmArticleData(640, 360)];
  const threeArt = [rdmArticleData(640, 360), rdmArticleData(640, 360), rdmArticleData(640, 360)];
  const multipleArt = [
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
  ];
</script>

<h1 class="color--eb">Horizontal Scroll</h1>
{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { HorizontalScroll } from '@ekstra-bladet/designsystem';`}
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
        <td>className</td>
        <td>string</td>
        <td />
        <td />
      </tr>
    </tbody>
  </table>
{:else}
  <p>HorizontalScroll kræver javascript som findes under list-v2 på eb</p>
  <Prism language="html">
    {`ekstrabladet/ekstrabladet-publication/src/main/webapp/WEB-INF/jsp/components/list-v2/horizontalscroll.ts`}
  </Prism>
{/if}

<HorizontalScroll className="margin-m--b">
  {#each multipleArt as article}
    <ArticleCard {...article} width="350px" />
  {/each}
</HorizontalScroll>

<HorizontalScroll className="margin-m--b">
  {#each threeArt as article}
    <ArticleCard {...article} width="215px" />
  {/each}
</HorizontalScroll>

<HorizontalScroll className="margin-m--b">
  {#each doubleArt as article}
    <ArticleCard {...article} width="215px" />
  {/each}
</HorizontalScroll>

<HorizontalScroll className="margin-m--b">
  <ArticleCard {...singleArt} width="215px" />
</HorizontalScroll>

<HorizontalScroll className="margin-m--b">
  {#each $articles as article}
    <ArticleCard {...article} width="215px" />
  {/each}
</HorizontalScroll>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<HorizontalScroll>
  ...
</HorizontalScroll>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<div id="example-id" class="horizontal-scroll-container position-relative">
  <button data-horizontallist="button-prev" class="horizontal-scroll-nav">
    <svg viewBox="0 0 50 50">
      <use xlink:href="#angle-left"></use>
    </svg>
  </button>
  <button data-horizontallist="button-next" class="horizontal-scroll-nav">
    <svg viewBox="0 0 50 50">
      <use xlink:href="#angle-left"></use>
    </svg>
  </button>
  <div data-horizontallist="itemcontainer" class="horizontal-scroll-items flex">
    ...
  </div>
</div>`}
  </Prism>
{/if}
