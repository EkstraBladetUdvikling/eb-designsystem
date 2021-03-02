<script lang="typescript">
  import { onMount } from 'svelte';

  export let className = undefined;

  let baseClass = `horizontal-scroll-container position-relative`;

  if (className) baseClass = `${className} ${baseClass}`;

  /* Horizontial Scroll elements */
  let scrollContainer: HTMLDivElement;
  let scrollItemContainer: HTMLDivElement;
  let prevScrollBtn: HTMLButtonElement;
  let nextScrollBtn: HTMLButtonElement;

  onMount(() => {
    const children = scrollItemContainer.children;
    const listLength = children.length;
    const containerRight = scrollContainer.getBoundingClientRect().right;

    /**
     * Find how many visible elements we have
     */
    let visibleChildren = Array.from(children).filter(
      (child: HTMLElement) => child.getBoundingClientRect().right <= containerRight
    ).length;

    if (visibleChildren === listLength) {
      /**
       * If there is no invisible elements hide buttons
       */
      prevScrollBtn.style.display = 'none';
      nextScrollBtn.style.display = 'none';
    } else {
      /**
       * We dont need to count the visible elements
       */
      const maxLength = listLength - visibleChildren;
      let listCurrent = 0;

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
      }

      /* Horizontial scroll to the left */
      nextScrollBtn.addEventListener('click', function () {
        if (listCurrent !== maxLength) {
          listCurrent++;
          scroll(listCurrent);
        }
      });

      /* Horizontial scroll to the right */
      prevScrollBtn.addEventListener('click', function () {
        if (listCurrent !== 0) {
          listCurrent--;
          scroll(listCurrent);
        }
      });
    }
  });
</script>

<div bind:this={scrollContainer} class="horizontal-scroll-container grid-width--large  position-relative">
  <button bind:this={prevScrollBtn} class="horizontal-scroll-nav" data-horizontallist="button-prev">
    <i class="fa fa-chevron-left" />
  </button>
  <button bind:this={nextScrollBtn} class="horizontal-scroll-nav" data-horizontallist="button-next">
    <i class="fa fa-chevron-right" />
  </button>
  <div
    bind:this={scrollItemContainer}
    class="horizontal-scroll-items flex padding-m--l padding-m--r"
    data-horizontallist="horizontallist"
  >
    <slot />
  </div>
</div>
