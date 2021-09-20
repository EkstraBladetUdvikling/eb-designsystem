<script lang="ts">
  import { link } from 'svelte-spa-router';

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
    <li><a href="#a11y" use:link={{ disabled: false, href: route.href }}>{route.title}</a></li>
  {/each}
</ul>
