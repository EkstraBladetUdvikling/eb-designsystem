<script lang="ts">
  import Prism from 'svelte-prism';

  import { Spinner } from '../../src';

  let spinnerActive = true;
</script>

<h1 class="color--eb">Spinner</h1>

<Prism language="js" source={`import { Spinner } from '@ekstra-bladet/designsystem'`} />

<div class="padding-l bg--graa5">
  <Spinner isLoading={spinnerActive} />
</div>

<Prism language="html" source={`<Spinner isLoading={true}/>`} />
<Prism language="html" source={`<Spinner isLoading={false}/>`} />
