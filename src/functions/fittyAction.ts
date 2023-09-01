import fitty from 'fitty';

export function fittyaction(node: HTMLElement): any {
  const fittyInstance = fitty(node, {
    minSize: 14,
  });

  setTimeout(() => {
    fittyInstance.fit();
  }, 100);

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
    update() {
      fittyInstance.fit();
    },
  };
}
