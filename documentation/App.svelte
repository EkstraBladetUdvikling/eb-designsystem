<script lang="ts">
  import Router from 'svelte-spa-router';
  import Routes from './routes/routes';
  import Sidebar from './routes/Sidebar.svelte';
  import Navbar from './routes/Navbar.svelte';

  const routeList = Routes;

  // Fills the object to create a SPA routing
  let routes = {};
  let menuItemList = [];
  routeList.forEach((route) => {
    routes[route.link] = route.component;
    menuItemList.push(route);
  });

  function routeDidLoad(event) {
    console.log('event', event);
    // prism.highlightAll();
  }
</script>

<Navbar />
<Sidebar {menuItemList} />
<div class="content-container">
  <Router {routes} on:routeLoaded{routeDidLoad} />
</div>

<style>
  .content-container {
      margin-top: 90px; /* height of navbar + 15px to create space */
    margin-left: 280px; /* length of sidebar + 15px to create space */
    }
</style>
