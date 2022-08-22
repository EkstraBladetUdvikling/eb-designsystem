<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { HorizontalScrollHandler, SCROLLDIRECTION } from '../../functions/horizontalscroll';

  import Button from '../button/Button.svelte';
  import Icon from '../icon/Icon.svelte';

  export let className = undefined;

  let baseClass = `horizontal-scroll-container position-relative`;

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
  <Button
    on:click={() => horizontalScrollHandler.scrollWithButton(SCROLLDIRECTION.left)}
    className="horizontal-scroll-nav button-prev bg--white"
    extension="icon"
  >
    <Icon name="angle-left" width="14" />
  </Button>
  <Button
    on:click={() => horizontalScrollHandler.scrollWithButton(SCROLLDIRECTION.right)}
    className="horizontal-scroll-nav button-next bg--white"
    extension="icon"
  >
    <Icon name="angle-right" width="14" />
  </Button>
  <div
    bind:this={scrollItemContainer}
    class="horizontal-scroll-items horizontal-scroll-items--gap flex position-relative"
    data-horizontallist="horizontallist"
  >
    <slot />
  </div>
</div>
