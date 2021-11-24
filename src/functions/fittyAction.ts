import fitty from 'fitty';

export function fittyaction(node: HTMLElement): any {
  const fittyInstance = fitty(node);

  document.fonts.ready.then(() => {
    // Check if fitty needs to refit after loading fonts
    if (node.offsetWidth > node.parentElement.offsetWidth) {
      fittyInstance.fit();
    }
  });

  return {
    destroy() {
      fittyInstance.unsubscribe();
    },
  };
}
