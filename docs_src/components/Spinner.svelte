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
