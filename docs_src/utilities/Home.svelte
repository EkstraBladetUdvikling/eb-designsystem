<script lang="ts">
  import { link } from 'svelte-spa-router';

  import { utilities } from '../routes/utilities';
</script>

<h1>Utilities</h1>

<div class="grid-width--small">
  <p>Utilities exposed from Ekstra Bladet designsystem</p>
</div>

<ul>
  {#each utilities.routes as route}
    <li><a href="#a11y" use:link={{ disabled: false, href: route.href }}>{route.title}</a></li>
  {/each}
</ul>
