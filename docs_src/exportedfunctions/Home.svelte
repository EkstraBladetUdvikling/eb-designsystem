<script lang="ts">
  import { link } from '@dvcol/svelte-simple-router';

  import { exportedfunctions } from '../routes/exportedfunctions';
</script>

<h1>Exported Functions</h1>

<div class="grid-width--small">
  <p>Functions exported from the design system to be used in svelte/typescript/javascript applications</p>
</div>
<ul>
  {#each exportedfunctions.routes as route}
    <li><a href={route.path} use:link>{route.name}</a></li>
  {/each}
</ul>
