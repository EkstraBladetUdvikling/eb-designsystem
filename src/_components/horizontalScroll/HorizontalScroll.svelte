<script lang="typescript">
  import { afterUpdate } from 'svelte';
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

  function updateButtons() {
    console.log('listCurrent', listCurrent, 'maxLength', maxLength);
    if (listCurrent === 0) {
      scrollContainer.dataset.atstart = 'true';
      scrollContainer.dataset.atend = 'false';
    } else if (listCurrent === maxLength) {
      scrollContainer.dataset.atstart = 'false';
      scrollContainer.dataset.atend = 'true';
    } else {
      scrollContainer.dataset.atstart = 'false';
      scrollContainer.dataset.atend = 'false';
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
    console.log('children', 'children?', children);
    if (children) return;
    children = scrollItemContainer.children;

    const listLength = children.length;
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

    scrollItemContainer.addEventListener('touchend', () => {
      console.log('touchend?');
    });
    scrollItemContainer.addEventListener('mouseenter', () => {
      console.log('mouseenter?');
    });
    scrollItemContainer.addEventListener('wheel', () => {
      console.log('wheel?');
    });

    updateButtons();
    // else {
    //   /**
    //    * We dont need to count the visible elements
    //    */
    //   maxLength = listLength - visibleChildren;

    //   /* Horizontial scroll to the left */
    //   nextScrollBtn.addEventListener('click', function () {
    //     if (listCurrent !== maxLength) {
    //       listCurrent++;
    //       scroll(listCurrent);
    //     }
    //   });

    //   /* Horizontial scroll to the right */
    //   prevScrollBtn.addEventListener('click', function () {
    //     if (listCurrent !== 0) {
    //       listCurrent--;
    //       scroll(listCurrent);
    //     }
    //   });
    // }
  });
</script>

{#if title}
  <h1>{title}</h1>
{/if}
<div bind:this={scrollContainer} class="horizontal-scroll-container position-relative">
  <!-- <button bind:this={prevScrollBtn} class="horizontal-scroll-nav bg--white" data-horizontallist="button-prev">
    <i class="fa fa-chevron-left" />
  </button> -->
  <Button on:click={prevScroll} className="horizontal-scroll-nav button-prev bg--white" extension="icon">
    <i class="fa fa-chevron-left" />
  </Button>
  <!-- <button bind:this={nextScrollBtn} class="horizontal-scroll-nav bg--white" data-horizontallist="button-next">
    <i class="fa fa-chevron-right" />
  </button> -->
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
