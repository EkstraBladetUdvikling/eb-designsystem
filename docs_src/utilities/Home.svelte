<script lang="ts">
  import { link } from '@dvcol/svelte-simple-router';

  import { utilities } from '../routes/utilities';
</script>

<h1>Utilities</h1>

<div class="grid-width--small">
  <p>Utilities exposed from Ekstra Bladet designsystem</p>
</div>

<ul>
  {#each utilities.routes as route}
    <li><a href={route.path} use:link>{route.name}</a></li>
  {/each}
</ul>
