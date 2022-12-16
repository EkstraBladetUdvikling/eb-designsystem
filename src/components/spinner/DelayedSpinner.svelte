<script lang="ts">
  import Spinner from './Spinner.svelte';

  export let delay = 150;

  let isLoading = false;

  setTimeout(() => {
    isLoading = true;
  }, delay);
</script>

<Spinner {isLoading} />
