<script lang="ts">
<<<<<<< HEAD
  import Router from 'svelte-spa-router';
=======
  import Router, { link } from 'svelte-spa-router';
>>>>>>> 3aa7e31c70ece60311f84da8298c8e1af45694ea
  import Routes from './routes/routes';
  import Sidebar from './routes/Sidebar.svelte';
  import Navbar from './routes/Navbar.svelte';
  import Icon from '../src/_components/icon';

  const routeList = Routes;

  // Fills the object to create a SPA routing
  let routes = {};
<<<<<<< HEAD
  let menuItemList = [];
  routeList.forEach((route) => {
    routes[route.link] = route.component;
    menuItemList.push(route);
  });
</script>

<style>
  .content-container {
    margin-top: 90px; /* height of navbar + 15px to create space */
    margin-left: 280px; /* length of sidebar + 15px to create space */
  }
</style>

<Navbar />
<Sidebar {menuItemList} />
<div class="content-container">
  <Router {routes} />
</div>
=======
  routeList.forEach((route) => {
    routes[route.link] = route.component;
  });
</script>

{#each routeList as route}
  <a use:link href={route.link}>{route.title}</a>
{/each}

<Router {routes} />
>>>>>>> 3aa7e31c70ece60311f84da8298c8e1af45694ea
