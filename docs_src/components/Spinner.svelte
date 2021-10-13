<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Spinner } from '../../src';
</script>

<h1 class="color--eb">Spinner</h1>

{#if $sourceType === 'svelte'}
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
{/if}

<div class="padding-l">
  <Spinner isLoading={true} />
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Spinner isLoading={true}/>`}
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
