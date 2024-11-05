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
        <td>delay</td>
        <td>number</td>
        <td>150</td>
        <td></td>
      </tr>
      <tr>
        <td>size</td>
        <td>number</td>
        <td>18</td>
        <td>pixel value which translates to <em>--icon-size: [size]px</em></td>
      </tr>
    </tbody>
  </table>
{/if}

<div class="padding-l">
  <Spinner />
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Spinner />`}
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
