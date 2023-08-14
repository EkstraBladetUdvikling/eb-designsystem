<script lang="ts">
  import type { TTippyCustomOptions, TTooltipInstance } from '../../types/tooltipAction';

  import { afterUpdate, onDestroy, onMount } from 'svelte';

  import { tooltipRender } from '../../functions/tooltipRender';
  import { tooltipStore } from '../../functions/tooltipStore';

  export let allowHTML: boolean = false; // Allow HTML
  export let anchorNode: HTMLElement;
  export let content: string | any; // Text or Svelte Component
  export let props = {}; // Props passed to chosen component
  export let tippyOptions: TTippyCustomOptions = {}; // Additional TippyJS props

  let tooltipNode: HTMLDivElement;
  let instance: TTooltipInstance = null;
  $: textOnly = typeof content === 'string' || content instanceof String;

  $: svelteComponentContent = content as any;

  onMount(() => {
    instance = tooltipRender(anchorNode, tooltipNode, tippyOptions);

    // Add to store for programmatic access, if anchor has unique id
    if (anchorNode.hasAttribute('id')) {
      const id = anchorNode.getAttribute('id');
      $tooltipStore[id] = instance;
    }
  });

  afterUpdate(() => {
    instance.setProps(tippyOptions);
  });

  onDestroy(() => {
    // Remove tooltip instance and store entry
    instance.destroy();
    if (anchorNode.hasAttribute('id')) {
      const id = anchorNode.getAttribute('id');
      delete $tooltipStore[id];
    }
  });
</script>

<div bind:this={tooltipNode} class:tooltip-textonly={textOnly}>
  {#if !textOnly}
    <svelte:component this={svelteComponentContent} {...props} />
  {:else if allowHTML}
    {@html content}
  {:else}
    {content}
  {/if}
</div>
