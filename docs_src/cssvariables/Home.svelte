<script lang="ts">
  import { link } from '@dvcol/svelte-simple-router';

  import { cssvariables } from '../routes/cssvariables';
</script>

<h1>CSS Variables</h1>

<div class="grid-width--small">
  <p>Utility CSS variables to be used in styling</p>
  <p>These are not meant to be overridden</p>
</div>
<ul>
  {#each cssvariables.routes as route}
    <li><a href={route.path} use:link>{route.name}</a></li>
  {/each}
</ul>
