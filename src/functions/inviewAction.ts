/* Modified version of https://github.com/maciekgrzybek/svelte-inview */
import type { IInviewOptions, IInviewPosition, IInviewScrollDirection } from '../types/inviewAction';

const defaultOptions: IInviewOptions = {
  minIntersectingTime: 0,
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

  let timeoutIntersecting: ReturnType<typeof setTimeout> = undefined;
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

            timeoutIntersecting = setTimeout(() => {
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
            }, options.minIntersectingTime);
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

            clearTimeout(timeoutIntersecting);
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
