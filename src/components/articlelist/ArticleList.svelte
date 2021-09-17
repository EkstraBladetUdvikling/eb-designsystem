<script lang="ts">
  import type { IArticleCardProps } from '../articlecard/ArticleCard';

  import ArticleCard from '../articlecard/ArticleCard.svelte';
  import HorizontalScroll from '../horizontalScroll/HorizontalScroll.svelte';

  enum LISTTYPE {
    columns,
    horizontal,
  }

  export let articleList: IArticleCardProps[];
  export let type: LISTTYPE = LISTTYPE.horizontal;
</script>

<div>
  {#if type === LISTTYPE.horizontal}
    <HorizontalScroll>
      {#each articleList as articleItem}
        <ArticleCard {...articleItem} />
      {/each}
    </HorizontalScroll>
  {/if}
</div>
