<script lang="ts">
  export let isLoading = false;
  export let fullScreen = false;
</script>

{#if isLoading}
  <div class="loader {fullScreen ? "full-screen-loader " : ""}flex flex--center">
    <i class="fas fa-circle bounce bounce1" />
    <i class="fas fa-circle bounce bounce2" />
    <i class="fas fa-circle bounce bounce3" />
  </div>
{/if}
