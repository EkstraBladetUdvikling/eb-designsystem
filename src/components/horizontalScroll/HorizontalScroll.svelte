<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';

  import { throttle } from '../../functions/throttle';
  import Button from '../button/Button.svelte';
  import Icon from '../icon/Icon.svelte';

  export let className = undefined;

  let baseClass = `horizontal-scroll-container position-relative`;

  enum BLOCKING {
    'disabled',
    'enabled',
  }

  enum DIRECTION {
    'left',
    'right',
  }

  enum SCROLLPOS {
    'disabled',
    'end',
    'neutral',
    'start',
    'unset',
  }

  let children: HTMLCollection;
  let currentState = SCROLLPOS.unset;
  let scrollContainer: HTMLDivElement;
  let scrollItemContainer: HTMLDivElement;
  let listLength: number;
  let wrapClientWidth: number;
  let wrapLeft: number;
  let wrapRight: number;
  let wrapScrollWidth: number;
  let currentBlock = 0;
  let blocks = [0];
  let blocking: BLOCKING = BLOCKING.enabled;

  /**
   * updateDataSet
   *
   * update the visibility of buttons through data attributes
   *
   * @param pos {SCROLLPOS}
   */
  function updateDataSet(pos: SCROLLPOS) {
    if (currentState === pos) return;
    switch (pos) {
      case SCROLLPOS.neutral:
        scrollContainer.dataset.atstart = 'false';
        scrollContainer.dataset.atend = 'false';
        break;
      case SCROLLPOS.end:
        scrollContainer.dataset.atstart = 'false';
        scrollContainer.dataset.atend = 'true';
        break;
      case SCROLLPOS.start:
        scrollContainer.dataset.atstart = 'true';
        scrollContainer.dataset.atend = 'false';
        break;
      case SCROLLPOS.disabled:
        scrollContainer.dataset.atstart = 'true';
        scrollContainer.dataset.atend = 'true';
        break;
    }
    currentState = pos;
  }

  /**
   * updateButtons
   *
   * calculate where in the list we are when the user scrolls
   */
  function updateButtons() {
    const childLeft = children[0].getBoundingClientRect().left;
    const childRight = children[listLength - 1].getBoundingClientRect().right;

    const childrenHiddenLeft = childLeft < wrapLeft;
    const childrenHiddenRight = childRight > wrapRight;

    let dir: SCROLLPOS;

    if (childrenHiddenLeft && childrenHiddenRight) {
      dir = SCROLLPOS.neutral;
    } else if (childrenHiddenLeft) {
      dir = SCROLLPOS.end;
    } else if (childrenHiddenRight) {
      dir = SCROLLPOS.start;
    } else {
      dir = SCROLLPOS.disabled;
    }

    updateDataSet(dir);
  }

  /**
   * updateButtonsThroughScroll
   *
   * if the user scrolls horizontally in the list with mousewheel/trackpad we
   * update the visibility of the buttons
   *
   * @param ev {WheelEvent}
   */
  function updateButtonsThroughScroll(ev?: WheelEvent) {
    if (Math.abs(ev.deltaX) > Math.abs(ev.deltaY)) {
      blocking = BLOCKING.disabled;
      updateButtons();
    }
  }

  function findPosition(dir: DIRECTION): number {
    let position: number;
    if (dir === DIRECTION.left) {
      if (blocking === BLOCKING.enabled && blocks[currentBlock - 1]) {
        currentBlock--;
        position = blocks[currentBlock];
      } else {
        blocks = [0];
        currentBlock = 0;
        const el = findPrevChild();

        position =
          scrollItemContainer.scrollLeft -
          (wrapClientWidth - (el.clientWidth - (wrapLeft - el.getBoundingClientRect().left)));
      }
    } else if (dir === DIRECTION.right) {
      if (blocking === BLOCKING.enabled && blocks[currentBlock + 1]) {
        currentBlock++;
        position = blocks[currentBlock];
      } else {
        const el = findNextChild();
        position = el.offsetLeft;

        currentBlock++;
        blocks.push(position);
      }
    }

    return position;
  }

  /**
   * Advance scroll to make next or previous elements visible
   */
  function scroll(dir: DIRECTION) {
    let left = findPosition(dir);
    if (dir === DIRECTION.right && wrapScrollWidth < scrollItemContainer.scrollLeft + left - wrapClientWidth) {
      left = wrapScrollWidth;
      updateDataSet(SCROLLPOS.end);
    } else if (left <= 0) {
      left = 0;
      updateDataSet(SCROLLPOS.start);
    } else {
      updateDataSet(SCROLLPOS.neutral);
    }

    scrollItemContainer.scrollTo({
      behavior: 'smooth',
      left,
      top: 0,
    });
  }

  /**
   * Go backwards through children to find the first element on the left which
   * is partially visible/invisible to the user
   */
  function findPrevChild(): HTMLElement {
    return Array.from(children)
      .reverse()
      .find((child) => {
        return child.getBoundingClientRect().left < wrapLeft;
      }) as HTMLElement;
  }

  /**
   * Go through children to find the first element on the right which is
   * partially visible/invisible to the user
   */
  function findNextChild(): HTMLElement {
    return Array.from(children).find((child) => {
      return child.getBoundingClientRect().right > wrapRight;
    }) as HTMLElement;
  }

  onMount(() => {
    scrollItemContainer.addEventListener(
      'wheel',
      throttle((data: WheelEvent) => {
        updateButtonsThroughScroll(data);
      }, 150)
    );
    wrapLeft = scrollItemContainer.getBoundingClientRect().left;
    wrapRight = scrollItemContainer.getBoundingClientRect().right;
    wrapClientWidth = scrollItemContainer.clientWidth;
    wrapScrollWidth = scrollItemContainer.scrollWidth;
  });

  afterUpdate(() => {
    if (listLength === scrollItemContainer.children.length) return;
    children = scrollItemContainer.children;
    listLength = children.length;
    const containerBBox = scrollContainer.getBoundingClientRect();

    /**
     * Find how many visible elements we have
     */
    const visibleChildren = Array.from(children).filter(
      (child: HTMLElement) =>
        child.getBoundingClientRect().left >= containerBBox.left &&
        child.getBoundingClientRect().right <= containerBBox.right
    ).length;
    const maxLength = listLength - visibleChildren;

    if (maxLength) {
      // Some children not visible - enable scroling
      updateButtons();
    } else {
      updateDataSet(SCROLLPOS.disabled);
    }
  });

  $: cssClass = className ? `${className} ${baseClass}` : baseClass;
</script>

<div bind:this={scrollContainer} class={cssClass}>
  <Button
    on:click={() => scroll(DIRECTION.left)}
    className="horizontal-scroll-nav button-prev bg--white"
    extension="icon"
  >
    <Icon name="angleleft" width="14" />
  </Button>
  <Button
    on:click={() => scroll(DIRECTION.right)}
    className="horizontal-scroll-nav button-next bg--white"
    extension="icon"
  >
    <Icon name="angleright" width="14" />
  </Button>
  <div
    bind:this={scrollItemContainer}
    class="horizontal-scroll-items horizontal-scroll-items--gap flex position-relative"
    data-horizontallist="horizontallist"
  >
    <slot />
  </div>
</div>
