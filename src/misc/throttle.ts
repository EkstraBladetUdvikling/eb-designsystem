/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 */
let myTimeout;
export function throttle(callback, wait) {
  if (!myTimeout) {
    myTimeout = setTimeout(() => {
      clearTimeout(myTimeout);
      myTimeout = undefined;
      callback();
    }, wait);
  }
}
