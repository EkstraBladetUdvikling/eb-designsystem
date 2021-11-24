<script lang="ts">
  import { link } from 'svelte-spa-router';

  import { exportedfunctions } from '../routes/exportedfunctions';
</script>

<h1>Exported Functions</h1>

<div class="grid-width--small">
  <p>Functions exported from the design system to be used in svelte/typescript/javascript applications</p>
</div>
<ul>
  {#each exportedfunctions.routes as route}
    <li><a href="#a11y" use:link={{ disabled: false, href: route.href }}>{route.title}</a></li>
  {/each}
</ul>
