<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { HorizontalScrollHandler, SCROLLDIRECTION } from '../../functions/horizontalscroll';

  import Icon from '../icon/Icon.svelte';

  export let className: string | undefined = undefined;

  const baseClass = `horizontal-scroll-container position-relative`;

  let scrollContainer: HTMLDivElement;
  let scrollItemContainer: HTMLDivElement;

  const horizontalScrollHandler = new HorizontalScrollHandler();

  onMount(() => {
    horizontalScrollHandler.init(scrollItemContainer, scrollContainer);
  });

  afterUpdate(() => {
    horizontalScrollHandler.update();
  });

  $: cssClass = className ? `${className} ${baseClass}` : baseClass;
</script>

<div bind:this={scrollContainer} class={cssClass}>
  <button
    on:click={() => horizontalScrollHandler.scrollWithButton(SCROLLDIRECTION.left)}
    class="button button--secondary--onlight button--icon-only horizontal-scroll-nav button-prev"
  >
    <Icon name="angle-left" width="14" />
  </button>
  <button
    on:click={() => horizontalScrollHandler.scrollWithButton(SCROLLDIRECTION.right)}
    class="button button--secondary--onlight button--icon-only horizontal-scroll-nav button-next"
  >
    <Icon name="angle-right" width="14" />
  </button>
  <div
    bind:this={scrollItemContainer}
    class="horizontal-scroll-items horizontal-scroll-items--gap flex position-relative"
    data-horizontallist="horizontallist"
  >
    <slot />
  </div>
</div>
