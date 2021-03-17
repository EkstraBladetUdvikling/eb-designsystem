/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 */
export function throttle(callback, wait) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      callback.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  };
}
