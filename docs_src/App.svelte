<script lang="ts">
  import './css/eb-designsystem.css';

  import Router from 'svelte-spa-router';

  import { routes as Routes } from './routes/routes';

  import Sidebar from './routes/Sidebar.svelte';
  import Navbar from './routes/Navbar.svelte';

  // Fills the object to create a SPA routing
  let routes = {};

  Routes.forEach((route) => {
    routes[route.href] = route.component;
  });
</script>

<Navbar />
<Sidebar menuItems={Routes} />
<div class="content-container padding-xl">
  <Router {routes} />
</div>

<style>
  .content-container {
    margin-top: 60px; /* height of navbar */
    margin-left: 250px; /* length of sidebar */
  }
</style>
