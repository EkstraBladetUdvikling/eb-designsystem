import type { IInviewOptions, IInviewPosition, IInviewScrollDirection } from '../types/inviewAction';

class Timer {
  private timeout: ReturnType<typeof setTimeout> | undefined;
  private startDate: Date | undefined;
  private delay: number;

  constructor(delay: number) {
    this.delay = delay;
  }

  public reset() {
    clearTimeout(this.timeout);
  }

  public pause() {
    if (this.startDate) {
      this.reset();
      this.delay -= Number(new Date()) - Number(this.startDate);
    }
  }

  public resume<T>(callback: (...args: T[]) => any, ...args: T[]) {
    if (this.delay) {
      this.startDate = new Date();
      this.timeout = setTimeout(() => {
        callback.apply(this, args.slice(2)); // Use args.slice(2) to pass arguments from index 2 to the end
      }, this.delay);
    } else {
      callback.apply(this, args.slice(2)); // Use args.slice(2) to pass arguments from index 2 to the end
    }
  }
}

const defaultOptions: IInviewOptions = {
  accumulateIntersectingTime: true, // Accumulate time in viewport
  minIntersectingTime: 0, // Require element to be visible x ms
  root: null,
  rootMargin: '0px',
  threshold: 0,
  unobserveOnEnter: false,
};

export default function inview(node: HTMLElement, optionsArg?: Partial<IInviewOptions>): { destroy: () => void } {
  const prevPos: IInviewPosition = {
    x: undefined,
    y: undefined,
  };

  const options = { ...defaultOptions, ...optionsArg };

  const scrollDirection: IInviewScrollDirection = {
    horizontal: undefined,
    vertical: undefined,
  };

  const intersectionTimer: Timer = new Timer(options.minIntersectingTime);
  let inView = false;
  let observer: IntersectionObserver;

  if (typeof IntersectionObserver !== 'undefined' && node) {
    observer = new IntersectionObserver(
      (entries, observeInstance) => {
        const observe = observeInstance.observe;
        const unobserve = observeInstance.unobserve;

        entries.forEach((singleEntry) => {
          const entry = singleEntry;

          if (prevPos.y && prevPos.y > entry.boundingClientRect.y) {
            scrollDirection.vertical = 'up';
          } else {
            scrollDirection.vertical = 'down';
          }

          if (prevPos.x && prevPos.x > entry.boundingClientRect.x) {
            scrollDirection.horizontal = 'left';
          } else {
            scrollDirection.horizontal = 'right';
          }

          prevPos.y = entry.boundingClientRect.y;
          prevPos.x = entry.boundingClientRect.x;

          inView = entry.isIntersecting;

          node.dispatchEvent(
            new CustomEvent('change', {
              detail: {
                entry,
                inView,
                observe,
                scrollDirection,
                unobserve,
              },
            })
          );

          if (entry.isIntersecting) {
            inView = true;

            intersectionTimer.resume(() => {
              node.dispatchEvent(
                new CustomEvent('enter', {
                  detail: {
                    entry,
                    inView,
                    observe,
                    scrollDirection,
                    unobserve,
                  },
                })
              );

              options.unobserveOnEnter && observeInstance.unobserve(node);
            });
          } else {
            inView = false;
            node.dispatchEvent(
              new CustomEvent('leave', {
                detail: {
                  entry,
                  inView,
                  observe,
                  scrollDirection,
                  unobserve,
                },
              })
            );

            if (options.accumulateIntersectingTime) {
              intersectionTimer.pause();
            } else {
              intersectionTimer.reset();
            }
          }
        });
      },
      {
        root: options.root,
        rootMargin: options.rootMargin,
        threshold: options.threshold,
      }
    );

    observer.observe(node);
  }

  return {
    destroy() {
      observer.unobserve(node);
    },
  };
}
