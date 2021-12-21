import type { IInviewOptions, IInviewPosition, IInviewScrollDirection } from '../types/inviewAction';

class Timer {
  private timeout: ReturnType<typeof setTimeout>;
  private startDate: Date;
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

  public resume<T>(callback: (args: T[]) => any, ...args: T[]) {
    if (this.delay) {
      this.startDate = new Date();
      this.timeout = setTimeout(() => {
        callback.apply(this, Array.prototype.slice.call(args, 2, args.length));
      }, this.delay);
    } else {
      callback.apply(this, Array.prototype.slice.call(args, 2, args.length));
    }
  }
}

const defaultOptions: IInviewOptions = {
  accumulateIntersectingTime: true, // Acculmulate time in viewport
  minIntersectingTime: 0, // Require element to be visible x ms
  root: null,
  rootMargin: '0px',
  threshold: 0,
  unobserveOnEnter: false,
};

export default function inview(node: HTMLElement, options: IInviewOptions): { destroy: () => void } {
  const actionOptions: IInviewOptions = {
    ...defaultOptions,
    ...options,
  };

  const prevPos: IInviewPosition = {
    x: undefined,
    y: undefined,
  };

  const scrollDirection: IInviewScrollDirection = {
    horizontal: undefined,
    vertical: undefined,
  };

  const intersectionTimer: Timer = new Timer(actionOptions.minIntersectingTime);
  let inView = false;
  let observer: IntersectionObserver;

  if (typeof IntersectionObserver !== 'undefined' && node) {
    observer = new IntersectionObserver(
      (entries, observeInstance) => {
        const observe = observeInstance.observe;
        const unobserve = observeInstance.unobserve;

        entries.forEach((singleEntry) => {
          const entry = singleEntry;

          if (prevPos.y > entry.boundingClientRect.y) {
            scrollDirection.vertical = 'up';
          } else {
            scrollDirection.vertical = 'down';
          }

          if (prevPos.x > entry.boundingClientRect.x) {
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

            if (actionOptions.accumulateIntersectingTime) {
              intersectionTimer.pause();
            } else {
              intersectionTimer.reset();
            }
          }
        });
      },
      {
        root: actionOptions.root,
        rootMargin: actionOptions.rootMargin,
        threshold: actionOptions.threshold,
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
