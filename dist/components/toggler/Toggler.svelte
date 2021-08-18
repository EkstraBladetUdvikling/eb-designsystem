<script lang="ts">
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

  let itsOn = defaultState;
  let name: 'toggle-on' | 'toggle-off' = itsOn ? 'toggle-on' : 'toggle-off';
  const dispatch = createEventDispatcher();
  function toggle(evt: Event, status?: boolean) {
    evt.preventDefault();
    itsOn = status ?? !itsOn;

    name = itsOn ? 'toggle-on' : 'toggle-off';
    dispatch('toggle', itsOn);
  }
</script>

{#if isSwitch}
  <div class="flex flex-align--center">
    <button data-status={itsOn} class="toggle--switch {baseClass}" on:click={(evt) => toggle(evt, true)}>
      <slot name="on" />
    </button>
    <Icon className="margin-s--rl" bind:name width="20" on:click={toggle} style="cursor: pointer;" />
    <button data-status={itsOn} class="toggle--switch {baseClass}" on:click={(evt) => toggle(evt, false)}>
      <slot name="off" />
    </button>
  </div>
{:else}
  <button class={baseClass} on:click={toggle}>
    {#if itsOn}
      <slot name="on" />
    {:else}
      <slot name="off" />
    {/if}
  </button>
{/if}
