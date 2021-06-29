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
    <tbody>
      <tr>
        <td>fullScreen</td>
        <td>boolean</td>
        <td>false</td>
        <td>Enables the loader to cover the whole page. Centers the loader in the middle of the screen</td>
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
  <i class="fas fa-circle bounce bounce1" />
  <i class="fas fa-circle bounce bounce2" />
  <i class="fas fa-circle bounce bounce3" />
</div>`}
  </Prism>
{/if}

<p>It is also possible to enable the loader to cover the whole page.</p>
<div class="padding-l">
  <Spinner isLoading={true} fullScreen={true} />
</div>
{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Spinner isLoading={true} fullScreen={true}/>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<div class="loader full-screen-loader flex flex--center">
  <i class="fas fa-circle bounce bounce1" />
  <i class="fas fa-circle bounce bounce2" />
  <i class="fas fa-circle bounce bounce3" />
</div>`}
  </Prism>
{/if}
