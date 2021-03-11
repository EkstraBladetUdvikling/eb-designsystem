<div class="navmenu-container position-fixed width-1of1 margin-xl--b bg-red">
  <nav class="navmenu flex flex-align--center padding-xl--rl">
    <a href="https://github.com/EkstraBladetUdvikling/eb-designsystem" target="_blank" class="flex"
      ><i class="fab fa-github margin-s--r" />Github</a
    >
  </nav>
</div>

<style>
    a {
      color: var(--color--white);
      transition: .5s;
    }
    .navmenu-container {
    top: 0;
    left: 250px; /* Width of sidebar */
    z-index: 9999;

    background-color: var(--color--red);
    border-bottom: 1px solid var(--color--graa6);
    }
    .navmenu-container .navmenu {
      height: 60px;
      max-height: 60px;
    }
</style>
