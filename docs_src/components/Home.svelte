<script lang="ts">
  import { link } from 'svelte-spa-router';

  import { components } from '../routes/components';
</script>

<h1>Components</h1>

<div class="grid-width--small">
  <p>Components mainly consists of svelte components, but must can be used as straight HTML components</p>
</div>

<ul>
  {#each components.routes as route}
    <li><a href="#a11y" use:link={{ disabled: false, href: route.href }}>{route.title}</a></li>
  {/each}
</ul>
