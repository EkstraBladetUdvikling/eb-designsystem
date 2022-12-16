<script lang="ts">
  import Icon from '../icon/Icon.svelte';

  export let delay = 150;

  let isLoading = false;

  setTimeout(() => {
    isLoading = true;
  }, delay);
</script>

{#if isLoading}
  <div class="loader flex flex--center">
    <Icon className="bounce bounce1" name="circle-solid" style="width: 18px; height: 18px;" />
    <Icon className="bounce bounce2" name="circle-solid" style="width: 18px; height: 18px;" />
    <Icon className="bounce bounce3" name="circle-solid" style="width: 18px; height: 18px;" />
  </div>
{/if}
