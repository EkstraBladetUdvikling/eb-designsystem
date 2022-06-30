export function throttle(callback: (argData: any) => void, wait: number) {
  let inThrottle;
  return function (...args: any[]) {
    const context = this;
    if (!inThrottle) {
      callback.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  };
}
