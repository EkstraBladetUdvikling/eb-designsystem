<script lang="ts">
  import { link } from 'svelte-spa-router';

  import { cssvariables } from '../routes/cssvariables';
</script>

<h1>CSS Variables</h1>

<div class="grid-width--small">
  <p>Blah blah</p>
</div>
<ul>
  {#each cssvariables.routes as route}
    <li><a href="#a11y" use:link={{ disabled: false, href: route.href }}>{route.title}</a></li>
  {/each}
</ul>
