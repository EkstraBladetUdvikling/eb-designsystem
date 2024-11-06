<script lang="ts">
  import type { ITooltipOptions, TTooltipInstance } from '../../types/tooltipAction';

  import { onDestroy, onMount, tick } from 'svelte';

  import { tooltipRender } from '../../functions/tooltipRender';
  import { tooltipStore } from '../../functions/tooltipStore';

  type ToolTipProps = ITooltipOptions & { anchorNode: HTMLElement };

  let { allowHTML = false, anchorNode, content, props = $bindable({}), tippyOptions = {} }: ToolTipProps = $props();

  let tooltipNode: HTMLDivElement;
  let instance: TTooltipInstance | null = null;
  let textOnly = $state(typeof content === 'string' || content instanceof String);

  let SvelteComponentContent = $state(content as any);

  onMount(() => {
    instance = tooltipRender(anchorNode, tooltipNode, tippyOptions);

    // Add to store for programmatic access, if anchor has unique id
    if (anchorNode.hasAttribute('id')) {
      const id = anchorNode.getAttribute('id');
      if (id) {
        $tooltipStore[id] = instance;
      }
    }
  });

  tick().then(() => {
    if (instance) {
      instance.setProps(tippyOptions);
    }
  });

  onDestroy(() => {
    // Remove tooltip instance and store entry
    if (instance) {
      instance.destroy();
    }
    const id = anchorNode.getAttribute('id');
    if (id) {
      delete $tooltipStore[id];
    }
  });
</script>

<div bind:this={tooltipNode} class:tooltip-textonly={textOnly}>
  {#if !textOnly}
    <SvelteComponentContent {...props} />
  {:else if allowHTML}
    {@html content}
  {:else}
    {content}
  {/if}
</div>
