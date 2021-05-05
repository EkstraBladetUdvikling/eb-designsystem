<script lang="ts">
  export let className: string;
  export let disabled: boolean = false;

  $: cssClass = 'button';

  if (className) {
    cssClass = `${cssClass} ${className}`;
  }

  type TExtension = 'icon' | 'link' | 'solid' | 'icon link' | 'icon solid';
  export let extension: TExtension;

  export let href: string = undefined;

  type TSize = 'big' | 'small';
  export let size: TSize;

  if (extension) {
    let extSplit = extension.split(' ');

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

  let buttonEl: HTMLButtonElement | HTMLAnchorElement;
  /**
   * For use in group
   */
  import { getContext, onMount } from 'svelte';
  import { BUTTONS } from '../buttongroup/ButtonGroup.svelte';

  export let initial = false;

  let registerTab, selectButton, selectedButton;

  const button = {};
  const contextButtons: any = getContext(BUTTONS);
  if (contextButtons) {
    registerTab = contextButtons.registerTab;
    selectButton = contextButtons.selectButton;
    selectedButton = contextButtons.selectedButton;

    registerTab(button);

    if (initial) {
      selectButton(button);
    }
  }

  onMount(() => {
    if (typeof selectButton !== 'undefined') {
      buttonEl.addEventListener('click', () => selectButton(button));
    }
  });
</script>

{#if href}
  <a {href} bind:this={buttonEl} class={cssClass} on:click {disabled} data-selected={$selectedButton === button}>
    <slot />
  </a>
{:else}
  <button bind:this={buttonEl} class={cssClass} on:click {disabled} data-selected={$selectedButton === button}>
    <slot />
  </button>
{/if}
