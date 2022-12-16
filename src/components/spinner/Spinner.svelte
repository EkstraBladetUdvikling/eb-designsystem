<script lang="ts">
  import Icon from '../icon/Icon.svelte';

  export let delay = 150;
  export let size = 18;

  let isLoading = false;

  setTimeout(() => {
    isLoading = true;
  }, delay);

  $: style = `--icon-size: ${size}px;`;
</script>

{#if isLoading}
  <div class="loader flex flex--center" {style}>
    <Icon className="bounce bounce1" name="circle-solid" />
    <Icon className="bounce bounce2" name="circle-solid" />
    <Icon className="bounce bounce3" name="circle-solid" />
  </div>
{/if}
