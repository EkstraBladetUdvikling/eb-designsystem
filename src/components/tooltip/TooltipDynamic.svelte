<script lang="ts">
  import tippy, { Instance, Props, RenderProps } from 'tippy.js/headless';
  import { afterUpdate, onMount, onDestroy, SvelteComponent } from 'svelte';
  import { tooltipStore } from '../../functions/tooltipStore';

  export let anchorNode: HTMLElement;
  export let content: string | typeof SvelteComponent; // Sanitized text or Svelte Component
  export let props = {}; // Props passed to chosen component
  export let tippyOptions: Partial<Omit<Props, keyof RenderProps>> = {}; // Additional TippyJS props

  let tooltipNode: HTMLDivElement;
  let instance: Instance<typeof tippyOptions> = null;
  $: textOnly = typeof content === 'string' || content instanceof String;

  onMount(() => {
    instance = tippy(anchorNode, {
      render(_instance) {
        const popperElem = document.createElement('div');
        const arrowElem = document.createElement('div');

        popperElem.className = 'tooltip-dynamic';
        arrowElem.className = 'tooltip-arrow';
        arrowElem.setAttribute('data-popper-arrow', '');
        popperElem.appendChild(tooltipNode);
        popperElem.appendChild(arrowElem);

        return {
          popper: popperElem,
        };
      },
      ...tippyOptions,
    });

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
    instance.destroy();
    if (anchorNode.hasAttribute('id')) {
      const id = anchorNode.getAttribute('id');
      delete $tooltipStore[id];
    }
  });
</script>

<div bind:this={tooltipNode}>
  {#if textOnly}
    <div class="tooltip-dynamic-textonly">
      {content}
    </div>
  {:else}
    <svelte:component this={content} {...props} />
  {/if}
</div>
