<script lang="ts">
  import { beforeUpdate, onMount } from 'svelte';
  import { Writable, writable } from 'svelte/store';

  import type { IArticleCardProps } from '../articlecard/ArticleCard';

  import ArticleCard from '../articlecard/ArticleCard.svelte';
  import HorizontalScroll from '../horizontalScroll/HorizontalScroll.svelte';

  enum LISTTYPE {
    columns,
    horizontal,
  }

  export let list: IArticleCardProps[];
  export let type: LISTTYPE = LISTTYPE.horizontal;
  const writableType: Writable<LISTTYPE> = writable(type);
  export let itemWidth: number = 240; // Only used when list is horizontal scroll

  let articleCardClass = '';

  let articleListContainer: HTMLDivElement;

  function updateType() {
    console.log('updateType', list.length, Math.round(articleListContainer.clientWidth / itemWidth));
    if (list.length <= Math.round(articleListContainer.clientWidth / itemWidth) && type === LISTTYPE.horizontal) {
      writableType.set(LISTTYPE.columns);
    } else {
      writableType.set(LISTTYPE.horizontal);
    }
    articleCardClass = list.length === 1 ? 'card-content--row' : '';
  }

  beforeUpdate(() => {
    if (articleListContainer) {
      updateType();
    }
  });

  onMount(() => {
    updateType();
  });
</script>

<div bind:this={articleListContainer} class="margin-l--tb">
  {#if $writableType === LISTTYPE.horizontal}
    <HorizontalScroll>
      {#each list as articleItem}
        <ArticleCard {...articleItem} style="width: {itemWidth}px;" truncateTitle={true} />
      {/each}
    </HorizontalScroll>
  {:else}
    <div class="articlelist" style="--columns: {list.length}">
      {#each list as articleItem}
        <ArticleCard {...articleItem} className={articleCardClass} truncateTitle={true} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .articlelist {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
  }
</style>
