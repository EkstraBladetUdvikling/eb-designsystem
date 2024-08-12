export function throttle(callback: (argData: unknown) => void, wait: number) {
  let inThrottle: boolean;
  return function (this: unknown, ...args: [argData: unknown]) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    if (!inThrottle) {
      callback.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  };
}
