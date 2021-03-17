<script lang="ts">
  import { afterUpdate } from 'svelte';

  import { throttle } from '../../misc/throttle';
  import Button from '../button';

  export let className = undefined;
  export let title: string = undefined;

  let baseClass = `horizontal-scroll-container position-relative`;

  if (className) baseClass = `${className} ${baseClass}`;

  /* Horizontial Scroll elements */
  let scrollContainer: HTMLDivElement;
  let scrollItemContainer: HTMLDivElement;
  let prevScrollBtn: HTMLButtonElement;
  let nextScrollBtn: HTMLButtonElement;
  let listCurrent = 0;
  let children;
  let maxLength;
  let listLength;

  function updateDataSet(pos) {
    switch (pos) {
      case 'neutral':
        scrollContainer.dataset.atstart = 'false';
        scrollContainer.dataset.atend = 'false';
        listCurrent = 1;
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

    if (childLeft - 5 === wrapLeft) {
      updateDataSet('start');
    } else if (childRight - 10 <= wrapRight) {
      updateDataSet('end');
    } else {
      updateDataSet('neutral');
    }
  }

  /**
   * Advance scroll to make next or previous element visible
   */
  function scroll(listCurrent) {
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
      listCurrent++;
      scroll(listCurrent);
    }
  }

  function prevScroll(_ev: MouseEvent): void {
    if (listCurrent !== 0) {
      listCurrent--;
      scroll(listCurrent);
    }
  }

  afterUpdate(() => {
    if (children) return;

    children = scrollItemContainer.children;

    listLength = children.length;
    const containerRight = scrollContainer.getBoundingClientRect().right;

    /**
     * Find how many visible elements we have
     */
    let visibleChildren = Array.from(children).filter(
      (child: HTMLElement) => child.getBoundingClientRect().right <= containerRight
    ).length;

    maxLength = listLength - visibleChildren;

    if (visibleChildren === listLength) {
      /**
       * If there is no invisible elements hide buttons
       */
      prevScrollBtn.style.display = 'none';
      nextScrollBtn.style.display = 'none';
    }

    scrollItemContainer.addEventListener('wheel', () => {
      throttle(function () {
        updateButtonsThroughScroll();
      }, 150);
    });

    updateButtons();
  });
</script>

{#if title}
  <h1>{title}</h1>
{/if}
<div bind:this={scrollContainer} class="horizontal-scroll-container position-relative">
  <Button on:click={prevScroll} className="horizontal-scroll-nav button-prev bg--white" extension="icon">
    <i class="fa fa-chevron-left" />
  </Button>
  <Button on:click={nextScroll} className="horizontal-scroll-nav button-next bg--white" extension="icon">
    <i class="fa fa-chevron-right" />
  </Button>
  <div
    bind:this={scrollItemContainer}
    class="horizontal-scroll-items flex position-relative padding-l--tb"
    data-horizontallist="horizontallist"
  >
    <slot />
  </div>
</div>
