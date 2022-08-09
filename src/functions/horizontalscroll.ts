import { throttle } from './throttle';

export enum SCROLLDIRECTION {
  'left',
  'right',
}

enum BLOCKING {
  'disabled',
  'enabled',
}

enum SCROLLPOS {
  'disabled',
  'end',
  'neutral',
  'start',
  'unset',
}

export class HorizontalScrollHandler {
  private children: HTMLCollection;
  private currentState = SCROLLPOS.unset;
  private scrollContainer: HTMLDivElement;
  private scrollItemContainer: HTMLDivElement;
  private listLength: number = 0;
  private wrapClientWidth: number;
  private wrapLeft: number;
  private wrapMaxLeft: number;
  private wrapRight: number;
  private currentBlock = 0;
  private blocks = [0];
  private blocking: BLOCKING = BLOCKING.enabled;

  public init(scrollItemContainer: HTMLDivElement, scrollContainer: HTMLDivElement): void {
    this.scrollItemContainer = scrollItemContainer;
    this.scrollContainer = scrollContainer;

    this.scrollItemContainer.addEventListener(
      'wheel',
      throttle((data: WheelEvent) => {
        this.updateButtonsThroughScroll(data);
      }, 150)
    );
    this.wrapLeft = scrollItemContainer.getBoundingClientRect().left;
    this.wrapRight = scrollItemContainer.getBoundingClientRect().right;
    this.wrapClientWidth = scrollItemContainer.clientWidth;

    this.update();
  }

  public update(): void {
    if (this.listLength === this.scrollItemContainer.children.length) return;

    this.children = this.scrollItemContainer.children;
    this.listLength = this.children.length;

    const containerBBox = this.scrollContainer.getBoundingClientRect();

    /**
     * Find how many visible elements we have
     */
    const visibleChildren = Array.from(this.children).filter(
      (child: HTMLElement) =>
        child.getBoundingClientRect().left >= containerBBox.left &&
        child.getBoundingClientRect().right <= containerBBox.right
    ).length;
    const maxLength = this.listLength - visibleChildren;

    this.wrapMaxLeft = this.scrollItemContainer.scrollWidth - this.wrapClientWidth;

    if (maxLength) {
      // Some children not visible - enable scroling
      this.updateButtons();
    } else {
      this.updateDataSet(SCROLLPOS.disabled);
    }
  }

  /**
   * Advance scroll to make next or previous elements visible
   */
  public scrollWithButton(dir: SCROLLDIRECTION) {
    let left = this.findPosition(dir);

    if (dir === SCROLLDIRECTION.right && this.wrapMaxLeft < left) {
      left = this.wrapMaxLeft;
      this.updateDataSet(SCROLLPOS.end);
    } else if (left <= 0) {
      left = 0;
      this.updateDataSet(SCROLLPOS.start);
    } else {
      this.updateDataSet(SCROLLPOS.neutral);
    }

    this.scrollItemContainer.scrollTo({
      behavior: 'smooth',
      left,
      top: 0,
    });
  }

  /**
   * updateDataSet
   *
   * update the visibility of buttons through data attributes
   *
   * @param pos {SCROLLPOS}
   */
  private updateDataSet(pos: SCROLLPOS) {
    if (this.currentState === pos) return;
    switch (pos) {
      case SCROLLPOS.neutral:
        this.scrollContainer.dataset.atstart = 'false';
        this.scrollContainer.dataset.atend = 'false';
        break;
      case SCROLLPOS.end:
        this.scrollContainer.dataset.atstart = 'false';
        this.scrollContainer.dataset.atend = 'true';
        break;
      case SCROLLPOS.start:
        this.scrollContainer.dataset.atstart = 'true';
        this.scrollContainer.dataset.atend = 'false';
        break;
      case SCROLLPOS.disabled:
        this.scrollContainer.dataset.atstart = 'true';
        this.scrollContainer.dataset.atend = 'true';
        break;
    }
    this.currentState = pos;
  }

  /**
   * updateButtons
   *
   * calculate where in the list we are when the user scrolls
   */
  private updateButtons() {
    const childLeft = this.children[0].getBoundingClientRect().left;
    const childRight = this.children[this.listLength - 1].getBoundingClientRect().right;

    const childrenHiddenLeft = childLeft < this.wrapLeft;
    const childrenHiddenRight = childRight > this.wrapRight;

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

    this.updateDataSet(dir);
  }

  /**
   * Go backwards through children to find the first element on the left which
   * is partially visible/invisible to the user
   */
  private findPrevChild(): HTMLElement {
    return Array.from(this.children)
      .reverse()
      .find((child) => {
        return child.getBoundingClientRect().left < this.wrapLeft;
      }) as HTMLElement;
  }

  /**
   * Go through children to find the first element on the right which is
   * partially visible/invisible to the user
   */
  private findNextChild(): HTMLElement {
    return Array.from(this.children).find((child) => {
      return child.getBoundingClientRect().right > this.wrapRight;
    }) as HTMLElement;
  }

  /**
   * updateButtonsThroughScroll
   *
   * if the user scrolls horizontally in the list with mousewheel/trackpad we
   * update the visibility of the buttons
   *
   * @param ev {WheelEvent}
   */
  private updateButtonsThroughScroll(ev?: WheelEvent) {
    if (Math.abs(ev.deltaX) > Math.abs(ev.deltaY)) {
      this.blocking = BLOCKING.disabled;
      this.updateButtons();
    }
  }

  /**
   * findPosition
   *
   * Find the position of the next element we need to show
   *
   * @param dir {SCROLLDIRECTION}
   */
  private findPosition(dir: SCROLLDIRECTION): number {
    try {
      let position: number;
      if (dir === SCROLLDIRECTION.left) {
        if (this.blocking === BLOCKING.enabled && this.blocks[this.currentBlock - 1]) {
          this.currentBlock--;
          position = this.blocks[this.currentBlock];
        } else {
          this.blocks = [0];
          this.currentBlock = 0;
          const el = this.findPrevChild();
          if (!el) {
            console.warn('No prev child found, assume at start');
            return 0;
          }
          position =
            this.scrollItemContainer.scrollLeft -
            (this.wrapClientWidth - (el.clientWidth - (this.wrapLeft - el.getBoundingClientRect().left)));
        }
      } else if (dir === SCROLLDIRECTION.right) {
        if (this.blocking === BLOCKING.enabled && this.blocks[this.currentBlock + 1]) {
          this.currentBlock++;
          position = this.blocks[this.currentBlock];
        } else {
          const el = this.findNextChild();
          if (!el) {
            console.warn('No next child found, assume at end');
            return this.wrapMaxLeft;
          }
          position = el.offsetLeft;

          this.currentBlock++;
          this.blocks.push(position);
        }
      }

      return position;
    } catch (err) {
      console.error('findPosition', err);
      return -1;
    }
  }
}
