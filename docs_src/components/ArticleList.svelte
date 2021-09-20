<script lang="ts">
  import { writable } from 'svelte/store';

  import { ArticleList } from '../../src';
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

  let articles = writable([rdmArticleData(640, 360), rdmArticleData(640, 360)]);

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
</script>

<div class="grid-width--xlarge" style="overflow: hidden">
  <!-- <ArticleList list={singleArt} />
  <ArticleList list={doubleArt} />
  <ArticleList list={threeArt} />
  <ArticleList list={fourArt} />
  <ArticleList list={fiveArt} /> -->
  Items in list: {$articles.length}
  <ArticleList list={$articles} />
</div>
