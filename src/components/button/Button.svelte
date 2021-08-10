<script lang="ts">
  import './button.css';

  type TExtension = 'icon' | 'link' | 'solid' | 'icon link' | 'icon solid';
  type TSize = 'big' | 'small';
  type TType = 'accept' | 'cancel' | 'primary' | 'secondary';

  export let className: string = undefined;
  export let disabled: boolean = false;
  export let extension: TExtension = undefined;
  export let href: string = undefined;
  export let size: TSize = undefined;
  export let type: TType = undefined;

  let baseClass = 'button';
  if (extension) {
    let extSplit = extension.split(' ');

    extSplit.forEach((extClass) => {
      baseClass = `${baseClass} button--${extClass}`;
    });
  }

  if (size) {
    baseClass = `${baseClass} button--${size}`;
  }

  if (type) {
    baseClass = `${baseClass} button--${type}`;
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

  $: cssClass = className ? `${baseClass} ${className}` : baseClass;
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
