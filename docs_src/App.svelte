<script lang="ts">
  import './css/designsystem.css';

  import Router from 'svelte-spa-router';

  import { routes } from './routes/routes';

  import Icons from '../docs/svg/symbol/icons.svelte';
  import Navbar from './main/Navbar.svelte';
  import Sidebar from './main/Sidebar.svelte';
</script>

<Navbar />
<Sidebar />
<div class="content-container padding-xl">
  <Router {routes} />
</div>

<Icons />

<style>
  .content-container {
    margin-top: 60px; /* height of navbar */
    margin-left: 250px; /* length of sidebar */
  }
</style>
