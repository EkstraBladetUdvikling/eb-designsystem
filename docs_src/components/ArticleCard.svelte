<script lang="ts">
  import Prism from 'svelte-prism';
  import { rdmArticleData } from '../util';
  import { sourceType } from '../stores';
  import { ArticleCard } from '../../src';
</script>

<h1 class="color--eb">Article Card</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { ArticleCard } from '@ekstra-bladet/designsystem';`}
  </Prism>

  <ArticleCard {...rdmArticleData()} />

  <Prism language="html">
    {`<ArticleCard {...article} />`}
  </Prism>

  <h3>Small-media</h3>

  <ArticleCard className="margin-m--b" type="small-media" {...rdmArticleData(250, 120)} />
  <ArticleCard type="small-media--reverse" {...rdmArticleData(250, 120)} />

  <Prism language="html">
    {`<ArticleCard className="small-media" {...article} />
<ArticleCard className="small-media--reverse" {...article} />`}
  </Prism>

  <h3>Loading placeholder</h3>

  <ArticleCard loading={true} />
  <ArticleCard loading={true} type="small-media" />
  <ArticleCard loading={true} type="small-media--reverse" />

  <Prism language="html">
    {`<ArticleCard loading={true} />
<ArticleCard loading={true} type="small-media" />
<ArticleCard loading={true} type="small-media--reverse" />`}
  </Prism>

  <h3>Intersection</h3>

  <Prism language="html">
    {`<ArticleCard {...article} intersection={true} />`}
  </Prism>
{:else}
  <p>ArticleCard er en ren Svelte component.</p>
{/if}
