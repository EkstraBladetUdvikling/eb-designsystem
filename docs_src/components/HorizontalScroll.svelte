<script lang="ts">
  import Prism from 'svelte-prism';
  import { rdmArticleData } from '../util';
  import { sourceType } from '../stores';
  import { ArticleCard, HorizontalScroll } from '../../src';

  let articles = [];

  for (let i = 0; i < 15; i++) {
    articles.push(rdmArticleData(640, 360));
  }
</script>

<h1 class="color--eb">Horizontal Scroll</h1>

{#if $sourceType === 'svelte'}
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

{#if $sourceType === 'svelte'}
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

<script ✂prettier:content✂="CiAgKGZ1bmN0aW9uICgpIHsKICAgIDwlQCBpbmNsdWRlIGZpbGU9Ii9wYXRoL3RvL2hvcml6b250YWxzY3JvbGwuanMiICU+CgogICAgaG9yaXpvbnRhbFNjcm9sbCgnZXhhbXBsZS1pZCcpOwogIH0pKCk7Cg==">{}</script>`}
  </Prism>
{/if}
