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
        on:click={() => changeSourceType('svelte')}>Svelte</button
      >
      <button
        class="button button--small"
        data-selected={$sourceType === 'html'}
        on:click={() => changeSourceType('html')}>HTML</button
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

  :root {
    --buttongroup-color: var(--color--default);
    --buttongroup-color--hover: var(--buttongroup-color);
    --buttongroup-fgcolor: var(--fgcolor--default);
    --buttongroup-fgcolor--hover: var(--buttongroup-fgcolor);
  }

  .buttongroup {
    display: flex;
  }

  .buttongroup .button {
    background: var(--color--white);
    border-color: var(--buttongroup-color);
    border-right-width: 0;
    color: var(--buttongroup-color);
  }

  .buttongroup .button:active,
  .buttongroup .button:hover,
  .buttongroup .button:focus,
  .buttongroup .button[data-selected='true'] {
    background: var(--buttongroup-color--hover);
    border-color: var(--buttongroup-color--hover);
    color: var(--buttongroup-fgcolor--hover);
  }

  .buttongroup .button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .buttongroup .button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
  }

  .buttongroup .button:last-of-type {
    border-top-left-radius: 0;
    border-right-width: 1px;
    border-bottom-left-radius: 0;
  }

  .buttongroup--secondary .button {
    background: var(--color--white);
    border-color: var(--color--secondary);
    border-right-width: 0;
    color: var(--color--secondary);
  }

  .buttongroup--secondary .button:active,
  .buttongroup--secondary .button:hover,
  .buttongroup--secondary .button:focus,
  .buttongroup--secondary .button[data-selected='true'] {
    background: var(--color--secondary);
    border-color: var(--color--secondary);
    color: var(--fgcolor--secondary);
  }
</style>
