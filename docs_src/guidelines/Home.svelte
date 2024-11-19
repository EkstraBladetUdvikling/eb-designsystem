<script lang="ts">
  import { link } from '@dvcol/svelte-simple-router';

  import { guidelines } from '../routes/guidelines';
</script>

<h1>Guidelines</h1>

<div class="grid-width--small">
  <p>
    Guidelines on how to implements languages or frameworks when working with frontend code in the context of Ekstra
    Bladet
  </p>
</div>
<ul>
  {#each guidelines.routes as route}
    <li><a href={route.path} use:link>{route.name}</a></li>
  {/each}
</ul>
