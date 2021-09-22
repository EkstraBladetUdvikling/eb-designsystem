<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { throttle } from '../../misc/throttle';
  import { Button, Icon } from '../../';

  export let className = undefined;

  let baseClass = `horizontal-scroll-container position-relative`;

  if (className) baseClass = `${className} ${baseClass}`;

  /* Horizontial Scroll elements */
  let scrollContainer: HTMLDivElement;
  let scrollItemContainer: HTMLDivElement;
  let listCurrent: number = 0;
  let children: HTMLCollection;
  let maxLength: number;
  let listLength: number;

  function updateDataSet(pos: 'neutral' | 'end' | 'start' | 'disabled', fromScroll = false) {
    switch (pos) {
      case 'neutral':
        scrollContainer.dataset.atstart = 'false';
        scrollContainer.dataset.atend = 'false';
        if (fromScroll) listCurrent = 1;
        break;
      case 'end':
        scrollContainer.dataset.atstart = 'false';
        scrollContainer.dataset.atend = 'true';
        listCurrent = maxLength;
        break;
      case 'start':
        scrollContainer.dataset.atstart = 'true';
        scrollContainer.dataset.atend = 'false';
        listCurrent = 0;
        break;
      case 'disabled':
        scrollContainer.dataset.atstart = 'true';
        scrollContainer.dataset.atend = 'true';
        break;
    }
  }

  function updateButtons() {
    if (listCurrent === 0) {
      updateDataSet('start');
    } else if (listCurrent === maxLength) {
      updateDataSet('end');
    } else {
      updateDataSet('neutral');
    }
  }

  function updateButtonsThroughScroll() {
    const childLeft = children[0].getBoundingClientRect().left;
    const wrapLeft = scrollItemContainer.getBoundingClientRect().left;

    const childRight = children[listLength - 1].getBoundingClientRect().right;
    const wrapRight = scrollItemContainer.getBoundingClientRect().right;

    const childrenHiddenLeft = childLeft < wrapLeft;
    const childrenHiddenRight = childRight > wrapRight;

    if (childrenHiddenLeft && childrenHiddenRight) {
      updateDataSet('neutral', true);
    } else if (childrenHiddenLeft) {
      updateDataSet('end', true);
    } else if (childrenHiddenRight) {
      updateDataSet('start', true);
    } else {
      updateDataSet('disabled', true);
    }
  }

  /**
   * Advance scroll to make next or previous element visible
   */
  function scroll(listCurrent: number) {
    const newPos = children[listCurrent] as HTMLElement;

    scrollItemContainer.scrollTo({
      behavior: 'smooth',
      left: newPos.offsetLeft,
      top: 0,
    });
    updateButtons();
  }

  function nextScroll(_ev: MouseEvent): void {
    if (listCurrent !== maxLength) {
      listCurrent = listCurrent + 1;

      scroll(listCurrent);
    }
  }

  function prevScroll(_ev: MouseEvent): void {
    if (listCurrent !== 0) {
      listCurrent = listCurrent - 1;
      scroll(listCurrent);
    }
  }

  onMount(() => {
    scrollItemContainer.addEventListener(
      'wheel',
      throttle(() => {
        updateButtonsThroughScroll();
      }, 150)
    );
  });

  afterUpdate(() => {
    if (listLength === scrollItemContainer.children.length) return;
    children = scrollItemContainer.children;
    listLength = children.length;
    const containerBBox = scrollContainer.getBoundingClientRect();

    /**
     * Find how many visible elements we have
     */
    let visibleChildren = Array.from(children).filter(
      (child: HTMLElement) =>
        child.getBoundingClientRect().left >= containerBBox.left &&
        child.getBoundingClientRect().right <= containerBBox.right
    ).length;
    maxLength = listLength - visibleChildren;

    if (maxLength) {
      // Some children not visible - enable scroling
      updateButtons();
    } else {
      updateDataSet('disabled');
    }
  });
</script>

<div bind:this={scrollContainer} class="horizontal-scroll-container position-relative">
  <Button on:click={prevScroll} className="horizontal-scroll-nav button-prev bg--white" extension="icon">
    <Icon name="chevronleft" width="14" />
  </Button>
  <Button on:click={nextScroll} className="horizontal-scroll-nav button-next bg--white" extension="icon">
    <Icon name="chevronright" width="14" />
  </Button>
  <div
    bind:this={scrollItemContainer}
    class="horizontal-scroll-items flex position-relative"
    data-horizontallist="horizontallist"
  >
    <slot />
  </div>
</div>
