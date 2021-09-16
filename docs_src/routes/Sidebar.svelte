<script lang="ts">
  import { link, location } from 'svelte-spa-router';

  import { menuItems } from './routes';
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
  <div class="sidebar-menuitem-container padding-l">
    <div class="sidebar-submenu-items">
      <a
        class="sidebar-item width-1of1 padding-m--t padding-m--rl"
        class:active-item={'/' === $location}
        href="#a11y"
        use:link={{ disabled: false, href: '/' }}
      >
        Overblik
      </a>
    </div>
  </div>
  {#each menuItems as group}
    <div class="sidebar-menuitem-container padding-l">
      <div class="sidebar-submenu-title fontsize-small">{group.title}</div>

      <div class="sidebar-submenu-items">
        {#each group.routes as menuItem}
          <a
            class="sidebar-item width-1of1 padding-m--t padding-m--rl"
            class:active-item={menuItem.href === $location}
            href="#a11y"
            use:link={{ disabled: menuItem.disabled, href: menuItem.href }}
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
