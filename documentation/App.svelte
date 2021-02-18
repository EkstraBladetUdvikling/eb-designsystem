<script lang="ts">
  import Router from 'svelte-spa-router';
  import Routes from './routes/routes';

  const routes = Routes;
</script>

  <a href="#/">Forside</a>
  <a href="#/components/accordion">Accordion</a>
  <a href="#/components/button">Button</a>
  <a href="#/components/card">Card</a>
  <a href="#/components/icon">Icon</a>
  <a href="#/components/horizontalscroll">Horizontal Scroll</a>
  <a href="#/components/menu">Menu</a>

  <a href="#/utilities/datatheme">Data Theme</a>


  <Router {routes} />
