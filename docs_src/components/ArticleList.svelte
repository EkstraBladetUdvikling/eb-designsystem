<script lang="ts">
  import { writable } from 'svelte/store';

  import { ArticleCard, ArticleList } from '../../src';

  import { rdmArticleData } from '../util';

  const singleArt = [rdmArticleData(640, 360)];
  const doubleArt = [rdmArticleData(640, 360), rdmArticleData(640, 360)];
  const threeArt = [rdmArticleData(640, 360), rdmArticleData(640, 360), rdmArticleData(640, 360)];
  const fourArt = [
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
  ];
  const fiveArt = [
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
    rdmArticleData(640, 360),
  ];

  let articles = writable([rdmArticleData(640, 360)]);

  const max = 11;
  let count = $articles.length;

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
</script>

<div class="grid-width--xlarge" style="overflow: hidden">
  <h1>Article list</h1>
  <p>The idea of the article list component, is that it can act based on the amount of articles added to the view.</p>
  <p>Currently it makes the most sense when using HorizontalScroll</p>
  Updating articles in list - Items in list: {$articles.length}

  <ArticleList>
    {#each $articles as article}
      <ArticleCard {...article} className="margin-s" width="240px" truncateTitle={true} />
    {/each}
  </ArticleList>

  <h3>Different amounts of items in list</h3>
  <ArticleList>
    {#each singleArt as article}
      <ArticleCard {...article} className="margin-s" width="240px" truncateTitle={true} />
    {/each}
  </ArticleList>
  <h4>2</h4>
  <ArticleList
    >{#each doubleArt as article}
      <ArticleCard {...article} className="margin-s" width="240px" truncateTitle={true} />
    {/each}
  </ArticleList>
  <h4>3</h4>
  <ArticleList
    >{#each threeArt as article}
      <ArticleCard {...article} className="margin-s" width="240px" truncateTitle={true} />
    {/each}
  </ArticleList>
  <h4>4</h4>
  <ArticleList
    >{#each fourArt as article}
      <ArticleCard {...article} className="margin-s" width="240px" truncateTitle={true} />
    {/each}
  </ArticleList>
  <h4>5</h4>
  <ArticleList
    >{#each fiveArt as article}
      <ArticleCard {...article} className="margin-s" width="240px" truncateTitle={true} />
    {/each}
  </ArticleList>
</div>
