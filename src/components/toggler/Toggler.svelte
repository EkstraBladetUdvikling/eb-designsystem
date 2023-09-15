<script lang="ts">
  import type { IconTypes } from '../../types/Icon';

  import { createEventDispatcher } from 'svelte';

  import Icon from '../icon/Icon.svelte';

  export let className: string | undefined = undefined;
  export let defaultState = true;
  export let isSwitch = false;
  export let disabled = false;

  let baseClass = `toggle-button`;

  if (className) baseClass = `${className} ${baseClass}`;

  /**
   * Handle user click on toggle element
   */
  let name: IconTypes = defaultState ? 'toggle-on' : 'toggle-off';
  const dispatch = createEventDispatcher();
  function toggle(evt: Event, status?: boolean) {
    evt.preventDefault();
    defaultState = status ?? !defaultState;

    name = defaultState ? 'toggle-on' : 'toggle-off';
    dispatch('toggle', defaultState);
  }

  $: defaultState = defaultState;
</script>

{#if isSwitch}
  <div class="flex flex-align--center">
    <button
      data-status={defaultState}
      class="toggle--switch {baseClass}"
      on:click|stopPropagation={(evt) => toggle(evt, true)}
      {disabled}
      class:toggle-disabled={disabled}
    >
      <slot name="on" />
    </button>
    <Icon className="margin-s--rl" bind:name width="30" on:click={toggle} style="cursor: pointer;" />
    <button
      data-status={defaultState}
      class="toggle--switch {baseClass}"
      on:click|stopPropagation={(evt) => toggle(evt, false)}
      {disabled}
      class:toggle-disabled={disabled}
    >
      <slot name="off" />
    </button>
  </div>
{:else}
  <button class={baseClass} on:click|stopPropagation={toggle} {disabled} class:toggle-disabled={disabled}>
    {#if defaultState}
      <slot name="on" />
    {:else}
      <slot name="off" />
    {/if}
    <slot />
  </button>
{/if}
