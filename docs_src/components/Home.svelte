<script lang="ts">
  import { link } from '@dvcol/svelte-simple-router';

  import { components } from '../routes/components';
</script>

<h1>Components</h1>

<div class="grid-width--small">
  <p>Components mainly consists of svelte components but can be used as straight HTML components if it's a must</p>
</div>

<ul>
  {#each components.routes as route}
    <li><a href={route.path} use:link>{route.name}</a></li>
  {/each}
</ul>
