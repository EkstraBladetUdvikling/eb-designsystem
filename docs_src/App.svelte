<script lang="ts">
  import './css/designsystem.css';

  import { RouterContext, RouterView } from '@dvcol/svelte-simple-router';

  import { options } from './routes/routes';

  import Icons from '../docs/svg/symbol/icons.svelte';
  import Navbar from './main/Navbar.svelte';
  import Sidebar from './main/Sidebar.svelte';
</script>

<RouterContext {options}>
  <Navbar />
  <Sidebar />
  <div class="content-container padding-xl">
    <RouterView></RouterView>
  </div>

  <Icons />
</RouterContext>

<style>
  .content-container {
    margin-top: 60px; /* height of navbar */
    margin-left: 250px; /* length of sidebar */
  }
</style>
