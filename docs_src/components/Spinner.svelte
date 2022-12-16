<script lang="ts">
  import Prism from 'svelte-prism';

  import { sourceType } from '../stores';

  import { ButtonGroup, DelayedSpinner, Spinner } from '../../src';

  $: view = 'delayedspinner';
</script>

<h1 class="color--eb">
  Spinner
  {#if $sourceType === 'svelte'}
    and DelayedSpinner
  {/if}
</h1>
<p>
  <strong>NB!</strong> It is adviced to implement a delayed loading animation, as the user experience is that something
  must be too slow if a spinner/loader is shown.<br />
  Please be mindful of this when introducing spinners to a project.
</p>

{#if $sourceType === 'svelte'}
  <div class="margin-xl--tb">
    <ButtonGroup>
      <button data-selected={view === 'spinner'} class="button" on:click={() => (view = 'spinner')}> Spinner </button>
      <button data-selected={view === 'delayedspinner'} class="button" on:click={() => (view = 'delayedspinner')}>
        DelayedSpinner
      </button>
    </ButtonGroup>
  </div>
  {#if view === 'spinner'}
    <Prism language="js">
      {`import { Spinner } from '@ekstra-bladet/designsystem';`}
    </Prism>

    <table class="table">
      <thead>
        <tr>
          <th>Prop name</th>
          <th>Type</th>
          <th>Default value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>isLoading</td>
          <td>boolean</td>
          <td>false</td>
          <td>Will only show if set to 'true'</td>
        </tr>
      </tbody>
    </table>
  {:else if view === 'delayedspinner'}
    <Prism language="js">
      {`import { DelayedSpinner } from '@ekstra-bladet/designsystem';`}
    </Prism>

    <table class="table">
      <thead>
        <tr>
          <th>Prop name</th>
          <th>Type</th>
          <th>Default value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>delay</td>
          <td>number</td>
          <td>150</td>
          <td>Shows a spinner after the given delay</td>
        </tr>
      </tbody>
    </table>
  {/if}
{/if}

<div class="padding-l">
  {#if view === 'spinner' || $sourceType !== 'svelte'}
    <Spinner isLoading={true} />
  {:else if view === 'delayedspinner'}
    <DelayedSpinner />
  {/if}
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {#if view === 'spinner'}
      {`<Spinner isLoading={true}/>`}
    {:else if view === 'delayedspinner'}
      {`<DelayedSpinner />`}
    {/if}
  </Prism>
{:else}
  <Prism language="html">
    {`<div class="loader flex flex--center">
    <svg viewBox="0 0 18 18" class="bounce bounce1">
      <use xlink:href="#circle-solid"></use>
    </svg>
    <svg viewBox="0 0 18 18" class="bounce bounce2">
      <use xlink:href="#circle-solid"></use>
    </svg>
    <svg viewBox="0 0 18 18" class="bounce bounce3">
      <use xlink:href="#circle-solid"></use>
    </svg>
</div>`}
  </Prism>
{/if}
