<script lang="ts">
  import { link } from 'svelte-spa-router';
  import { onMount } from 'svelte';

  export let menuItemList: {
    component: any;
    group?: string;
    link: string;
    title: string;
  }[] = [];

  let url = window.location.hash.substr(1);

  const tempObject = {};
  menuItemList.forEach((v) => (tempObject[v.group || 0] || (tempObject[v.group || 0] = [])).push(v));
  const groupedMenuItems = Object.keys(tempObject).map((v) => tempObject[v] as typeof menuItemList);

  function titleCase(input: string) {
    return input[0].toUpperCase() + input.substr(1).toLowerCase();
  }

  // Chance URL on menu-click
  onMount(() => {
    const m = document.querySelectorAll('#sidebar-menu .sidebar-item');
    m.forEach((item) => {
      item.addEventListener('click', () => {
        url = window.location.hash.substr(1);
      });
    });
  });
  // Listener to check whenever the hash URL changes make sure to match the menu
  window.addEventListener('hashchange', () => {
    url = window.location.hash.substr(1);
  });
</script>

<div id="sidebar-menu" class="sidebar-container height-100vh bg--white margin-l--r">
  <div class="flex flex-justify--around sidebar-logo-container padding-m--rl">
    <div>
      <a href="#/">
        <img alt="" src="ekstrabladet.svg" style="height:70px;" />
      </a>
    </div>
    <div class="flex-item flex-item--center">
      <p class="flex--grow width-1of1 color--graa1 fontweight-bold">Design system</p>
    </div>
  </div>
  {#each groupedMenuItems as group}
    <div class="sidebar-menuitem-container padding-l">
      {#if group.length && group[0].group}
        <div class="sidebar-submenu-title fontsize-small">{titleCase(group[0].group)}</div>
      {/if}
      <div class="sidebar-submenu-items">
        {#each group as menuItem}
          <a
            class="sidebar-item width-1of1 padding-m--t padding-m--rl"
            class:active-item={menuItem.link === url}
            href={menuItem.link}
            use:link
          >
            {menuItem.title}
          </a>
        {/each}
      </div>
    </div>
  {/each}
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
    top: 0px; /* height of navbar */
    position: fixed;
    width: 250px;
    overflow-y: auto;
    border-right: 1px solid var(--color--graa6);
  }
  .sidebar-logo-container {
    height: 60px;
    max-height: 60px;
    border-bottom: 1px solid var(--color--graa6);
  }
  .sidebar-menuitem-container {
    border-bottom: 1px solid var(--color--graa6);
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
