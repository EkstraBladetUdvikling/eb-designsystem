<script lang="ts">
  import Icon from '../../src/_components/icon';
</script>

<div class="navmenu-container position-fixed width-1of1 margin-xl--b">
  <nav class="navmenu flex flex-align--center padding-xl--rl">
    <a href="/" class="margin-m--t margin-m--r">
      <img src="ekstrabladet.svg" style="height:70px;" />
    </a>
    <span class="flex--grow width-1of1 color--graa1">Ekstra Bladet Design System</span>

    <a href="https://github.com/EkstraBladetUdvikling/eb-designsystem" class="flex"
      ><i class="fab fa-github margin-s--r" />Github</a
    >
  </nav>
</div>

<style>
  a {
      color: var(--color--black);
    transition: .5s;
    }
    a:hover {
      color: var(--color--red);
    transition: .5s;
    }
    .navmenu-container {
    top: 0;
    left: 0;
      z-index: 9999;

    background-color: var(--color--white);
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
    }
    .navmenu-container .navmenu {
      height: 60px;
    max-height: 60px;
    }
</style>
