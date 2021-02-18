<script lang="ts">
  import Router, {link} from 'svelte-spa-router';
  import Routes from './routes/routes';

  const routeList = Routes;

  // Fills the object to create a SPA routing
  let routes = {};
  routeList.forEach(route => {
    routes[route.link] = route.component;
  })
</script>

  {#each routeList as route}
    <a use:link href={route.link}>{route.title}</a>
  {/each}

  <Router {routes} />
