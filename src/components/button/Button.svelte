<script lang="ts">
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
    const extSplit = extension.split(' ');

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

  import type { TButton, TRegisterButton, TSelectButton, TSelectedButton } from '../../types/ButtonGroup';

  export let initial = false;

  let contextButton: TButton;

  let selectButton: TSelectButton;
  let selectedButton: TSelectedButton;

  const contextButtons: any = getContext(BUTTONS);

  if (contextButtons) {
    const registerButton: TRegisterButton = contextButtons.registerButton;

    contextButton = contextButtons.createContextButton();
    selectButton = contextButtons.selectButton;
    selectedButton = contextButtons.selectedButton;

    registerButton(contextButton);

    if (initial) {
      selectButton(contextButton);
    }
  }

  onMount(() => {
    if (typeof selectButton !== 'undefined') {
      buttonEl.addEventListener('click', () => selectButton(contextButton));
    }
  });

  $: cssClass = className ? `${baseClass} ${className}` : baseClass;
</script>

{#if href}
  <a {href} bind:this={buttonEl} class={cssClass} on:click {disabled} data-selected={$selectedButton === contextButton}>
    <slot />
  </a>
{:else}
  <button bind:this={buttonEl} class={cssClass} on:click {disabled} data-selected={$selectedButton === contextButton}>
    <slot />
  </button>
{/if}
