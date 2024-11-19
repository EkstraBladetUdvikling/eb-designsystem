<script lang="ts">
  import Icon from '../icon/Icon.svelte';

  interface Props {
    delay?: number;
    size?: number;
  }

  let { delay = 150, size = 18 }: Props = $props();

  let isLoading = $state(false);

  setTimeout(() => {
    isLoading = true;
  }, delay);

  let style = $derived(`--icon-size: ${size}px;`);
</script>

{#if isLoading}
  <div class="loader flex flex--center" {style}>
    <Icon className="bounce bounce1" name="circle-solid" />
    <Icon className="bounce bounce2" name="circle-solid" />
    <Icon className="bounce bounce3" name="circle-solid" />
  </div>
{/if}
