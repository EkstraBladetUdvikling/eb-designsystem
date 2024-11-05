<script lang="ts">
  import GithubIcon from '../assets/icons/github.svelte';

  import { sourceType } from '../stores';

  import type { SourceTyping } from '../stores';

  function changeSourceType(source: SourceTyping) {
    sourceType.set(source);
  }
</script>

<div class="navmenu-container position-fixed margin-xl--b bg-red">
  <nav class="navmenu flex flex-justify--between flex-align--center padding-xl--rl">
    <a href="https://github.com/EkstraBladetUdvikling/eb-designsystem" target="_blank" class="flex" rel="noreferrer">
      <GithubIcon width={20} />
      <span class="flex flex-align--end padding-s--l">Github</span>
    </a>
    <div class="buttongroup buttongroup--secondary">
      <button
        class="button button--small"
        data-selected={$sourceType === 'svelte'}
        onclick={() => changeSourceType('svelte')}>Svelte</button
      >
      <button
        class="button button--small"
        data-selected={$sourceType === 'html'}
        onclick={() => changeSourceType('html')}>HTML</button
      >
    </div>
  </nav>
</div>

<style>
  a {
    color: var(--color--white);
    transition: 0.5s;
  }
  .navmenu-container {
    top: 0;
    left: 250px; /* Width of sidebar */
    z-index: 9999;

    background-color: var(--color--red);
    border-bottom: 1px solid var(--color--graa6);
    width: calc(100% - 250px);
  }
  .navmenu-container .navmenu {
    height: 60px;
    max-height: 60px;
  }
</style>
