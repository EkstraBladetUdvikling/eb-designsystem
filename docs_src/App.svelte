<script lang="ts">
  import './css/eb-designsystem--utilities.css';

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
</script>

<Navbar />
<Sidebar {menuItemList} />
<div class="content-container padding-xl">
  <Router {routes} />
</div>

<style>
  .content-container {
      margin-top: 60px; /* height of navbar */
    margin-left: 250px; /* length of sidebar */
    }
</style>
