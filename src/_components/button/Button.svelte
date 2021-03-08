<script lang="ts">
  export let className: string;
  export let disabled: boolean = false;

  let cssClass = 'button';

  if (className) {
    cssClass = `${cssClass} ${className}`;
  }

  type TExtension = 'icon' | 'link' | 'solid' | 'icon link' | 'icon solid';
  type TSize = 'big' | 'small';
  export let extension: TExtension;
  export let size: TSize;

  if (extension) {
    let extSplit = extension.split(' ');
    console.log(extSplit);
    extSplit.forEach((extClass) => {
      cssClass = `${cssClass} button--${extClass}`;
    });
  }

  if (size) {
    cssClass = `${cssClass} button--${size}`;
  }

  type TType = 'accept' | 'cancel' | 'primary' | 'secondary';
  export let type: TType;

  if (type) {
    cssClass = `${cssClass} button--${type}`;
  }

  let buttonEl: HTMLButtonElement;
  /**
   * For use in group
   */
  import { getContext, onMount } from 'svelte';
  import { BUTTONS } from '../buttongroup/ButtonGroup.svelte';

  let registerTab, selectButton, selectedButton;

  const button = {};
  const contextButtons: any = getContext(BUTTONS);
  if (contextButtons) {
    registerTab = contextButtons.registerTab;
    selectButton = contextButtons.selectButton;
    selectedButton = contextButtons.selectedButton;

    registerTab(button);
  }

  onMount(() => {
    if (typeof selectButton !== 'undefined') {
      buttonEl.addEventListener('click', () => selectButton(button));
    }
  });
</script>

<button bind:this={buttonEl} class={cssClass} on:click {disabled} data-selected={$selectedButton === button}>
  <slot />
</button>
