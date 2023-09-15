export function throttle(callback: (argData: any) => void, wait: number) {
  let inThrottle: boolean;
  return function(this: any, ...args: [argData: any]) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    if (!inThrottle) {
      callback.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  };
}
