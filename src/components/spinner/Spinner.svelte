<script lang="ts">
  import './spinner.css';

  export let isLoading = false;
</script>

{#if isLoading}
  <div class="loader flex flex--center">
    <i class="fas fa-circle bounce bounce1" />
    <i class="fas fa-circle bounce bounce2" />
    <i class="fas fa-circle bounce bounce3" />
  </div>
{/if}
