<script lang="ts">
  import Prism from 'svelte-prism';
  import { LoremIpsum } from 'lorem-ipsum';
  import { sourceType } from '../stores';
  import { ArticleCard } from '../../src';

  const lorem = new LoremIpsum({
    wordsPerSentence: {
      max: 12,
      min: 4,
    },
  });

  function rdmArticleData(mediaWidth = 640, mediaHeight = 360) {
    const colorClasses = ['sport', 'sex-samliv', 'forbrug', 'underholdning', 'flash', 'nyheder'];
    const article = {
      href: '#',
      isPlus: Math.random() < 0.3,
      isBreaking: Math.random() < 0.1,
      media: {
        src: `https://loremflickr.com/${mediaWidth}/${mediaHeight}/city,people,nature,animal?random=${Math.random()}`,
      },
      section: lorem.generateWords(1),
      colorClass: colorClasses[Math.floor(Math.random() * colorClasses.length)],
      timestamp: randomDate(),
      title: lorem.generateSentences(1),
      truncateTitle: false,
    };

    return article;
  }

  function randomDate() {
    const start = new Date(2019, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
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
