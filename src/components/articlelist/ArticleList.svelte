<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { Writable, writable } from 'svelte/store';

  import HorizontalScroll from '../horizontalScroll/HorizontalScroll.svelte';

  enum LISTTYPE {
    columns,
    horizontal,
  }

  export let fontsizes = ['xxlarge', 'xlarge', 'large'];

  export let type: LISTTYPE = LISTTYPE.horizontal;

  const writableType: Writable<LISTTYPE> = writable(type);

  export let itemWidth: number = 240; // Only used when list is horizontal scroll

  let childrenLength: Writable<number> = writable(0);

  let articleListContainer: HTMLDivElement;

  const getChildrenCount = () =>
    articleListContainer.querySelector('[data-horizontallist="horizontallist"]')
      ? articleListContainer.querySelector('[data-horizontallist="horizontallist"]').children.length
      : articleListContainer.children[0].children.length;

  function updateType() {
    if ($childrenLength <= Math.round(articleListContainer.clientWidth / itemWidth) && type === LISTTYPE.horizontal) {
      writableType.set(LISTTYPE.columns);
    } else {
      writableType.set(LISTTYPE.horizontal);
    }
  }

  afterUpdate(() => {
    const childrenCount = getChildrenCount();

    childrenLength.set(childrenCount);

    updateType();
  });

  let titleFs: string;
  $: titleFs = fontsizes[$childrenLength - 1] ?? fontsizes[fontsizes.length - 1];
</script>

<div class="margin-l--tb" bind:this={articleListContainer} style="--card-mode--title: var(--fs-{titleFs});">
  {#if $writableType === LISTTYPE.horizontal}
    <HorizontalScroll>
      <slot />
    </HorizontalScroll>
  {:else}
    <div class="articlelist articlelist--columns" data-items={$childrenLength} style="--columns: {$childrenLength}">
      <slot />
    </div>
  {/if}
</div>

<style>
  .articlelist--columns {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
  }
</style>
