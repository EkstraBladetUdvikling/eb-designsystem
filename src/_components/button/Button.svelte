<script lang="ts">
  export let className: string;
  export let disabled: boolean = false;

  let cssClass = 'button';

  if (className) {
    cssClass = `${cssClass} ${className}`;
  }

  type TExtension = 'big' | 'icon' | 'link' | 'small' | 'solid';
  export let extension: TExtension | TExtension[];

  if (extension) {
    if (typeof extension === 'string') {
      cssClass = `${cssClass} button--${extension}`;
    } else if (Array.isArray(extension)) {
      cssClass = `${cssClass} button--${extension.join(' button--')}`;
    }
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
