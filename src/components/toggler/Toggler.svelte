<script lang="ts">
  import type { IconTypes } from 'Icon.svelte';

  import { createEventDispatcher } from 'svelte';

  import Icon from '../icon/Icon.svelte';

  export let className = undefined;
  export let defaultState = true;
  export let isSwitch = false;

  let baseClass = `toggle-button`;

  if (className) baseClass = `${className} ${baseClass}`;

  /**
   * Handle user click on toggle element
   */
  let name: IconTypes = defaultState ? 'toggleon' : 'toggleoff';
  const dispatch = createEventDispatcher();
  function toggle(evt: Event, status?: boolean) {
    evt.preventDefault();
    defaultState = status ?? !defaultState;

    name = defaultState ? 'toggleon' : 'toggleoff';
    dispatch('toggle', defaultState);
  }

  $: defaultState;
</script>

{#if isSwitch}
  <div class="flex flex-align--center">
    <button
      data-status={defaultState}
      class="toggle--switch {baseClass}"
      on:click|stopPropagation={(evt) => toggle(evt, true)}
    >
      <slot name="on" />
    </button>
    <Icon className="margin-s--rl" bind:name width="30" on:click={toggle} style="cursor: pointer;" />
    <button
      data-status={defaultState}
      class="toggle--switch {baseClass}"
      on:click|stopPropagation={(evt) => toggle(evt, false)}
    >
      <slot name="off" />
    </button>
  </div>
{:else}
  <button class={baseClass} on:click|stopPropagation={toggle}>
    {#if defaultState}
      <slot name="on" />
    {:else}
      <slot name="off" />
    {/if}
  </button>
{/if}
