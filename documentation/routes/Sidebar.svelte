<script lang="ts">
  import { link } from 'svelte-spa-router';
  import { onMount } from 'svelte';

  export let menuItemList = [];
  let url = window.location.hash.substr(1);
  let menuItems = [];
  let componentMenuItems = [];
  let utilityMenuItems = [];
  menuItemList.forEach((menuItem) => {
    if (menuItem.type === 'component') componentMenuItems.push(menuItem);
    if (menuItem.type === 'utility') utilityMenuItems.push(menuItem);
    if (!menuItem.type) menuItems.push(menuItem);
  });

  // Chance URL on menu-click
  onMount(() => {
    const m = document.querySelectorAll('#sidebar-menu .sidebar-item');
    m.forEach((item) => {
      item.addEventListener('click', () => {
        url = window.location.hash.substr(1);
      });
    });
  });
</script>

<div id="sidebar-menu" class="sidebar-container padding-l--t height-100vh bg--white margin-l--r">
  {#each menuItems as menuItem}
    <a
      class="sidebar-item {`${
        menuItem.link === url ? 'active-item' : ''
      }`} width-1of1 padding-m--t padding-l--rl fontsize-large"
      href={menuItem.link}
      use:link
    >
      {menuItem.title}
    </a>
  {/each}
  <div>
    <div class="sidebar-submenu-title padding-l--rl padding-l--t fontsize-large">Components</div>
    <div class="sidebar-submenu-items">
      {#each componentMenuItems as menuItem}
        <a
          class="sidebar-item {`${menuItem.link === url ? 'active-item' : ''}`} width-1of1 padding-m--t padding-xl--rl"
          href={menuItem.link}
          use:link
        >
          {menuItem.title}
        </a>
      {/each}
    </div>
  </div>
  <div>
    <div class="sidebar-submenu-title padding-l--rl padding-l--t fontsize-large">Utilities</div>
    <div class="sidebar-submenu-items">
      {#each utilityMenuItems as menuItem}
        <a
          class="sidebar-item {`${menuItem.link === url ? 'active-item' : ''}`} width-1of1 padding-m--t padding-xl--rl"
          href={menuItem.link}
          use:link
        >
          {menuItem.title}
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  a {
    color: var(--color--black);
    transition: 0.5s;
  }
  a:hover {
    color: var(--color--red);
    transition: 0.5s;
    text-decoration: none;
  }
  .sidebar-container {
    top: 60px; /* height of navbar */
    position: fixed;
    width: 250px;
    overflow-y: auto;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
  }
  .sidebar-container .sidebar-item {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    user-select: none;
  }
  .sidebar-submenu-title {
    color: var(--color--graa3);
  }
  .sidebar-item.active-item {
    color: var(--color--red);
  }
</style>
