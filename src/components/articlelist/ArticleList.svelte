<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { writable } from 'svelte/store';

  import type { Writable } from 'svelte/store';

  import HorizontalScroll from '../horizontalScroll/HorizontalScroll.svelte';

  type TListTypes = keyof typeof LISTTYPE;

  enum LISTTYPE {
    columns = 'columns',
    horizontal = 'horizontal',
    vertical = 'vertical',
  }

  export let className: string = 'margin-l--tb';
  export let fontsizes = ['xxlarge', 'xlarge', 'large'];
  export let type: TListTypes = LISTTYPE.horizontal;

  const writableType: Writable<TListTypes> = writable(type);
  const childrenLength: Writable<number> = writable(0);

  let articleListContainer: HTMLDivElement;
  let itemWidth: number;

  const getChildrenWidth = (): number =>
    articleListContainer.querySelector('[data-horizontallist="horizontallist"]')
      ? articleListContainer.querySelector('[data-horizontallist="horizontallist"]').children[0].clientWidth
      : articleListContainer.children[0].children[0].clientWidth;

  const getChildrenCount = (): number =>
    articleListContainer.querySelector('[data-horizontallist="horizontallist"]')
      ? articleListContainer.querySelector('[data-horizontallist="horizontallist"]').children.length
      : articleListContainer.children[0].children.length;

  function updateType() {
    itemWidth = itemWidth ?? getChildrenWidth();

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

<div class={className} bind:this={articleListContainer} style="--card-mode--title: var(--fs-{titleFs});">
  {#if $writableType === LISTTYPE.horizontal}
    <HorizontalScroll>
      <slot />
    </HorizontalScroll>
  {:else}
    <div
      class="articlelist articlelist--columns"
      data-items={$childrenLength}
      style="--articlelist-columns: {$childrenLength}"
    >
      <slot />
    </div>
  {/if}
</div>
