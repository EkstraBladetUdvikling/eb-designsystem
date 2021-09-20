<script lang="ts">
  import { Icon } from '../../../dist';
  export let isLoading = false;
</script>

{#if isLoading}
  <div class="loader flex flex--center">
    <Icon className="bounce bounce1" name="circlesolid" style="width: 18px; height: 18px;" />
    <Icon className="bounce bounce2" name="circlesolid" style="width: 18px; height: 18px;" />
    <Icon className="bounce bounce3" name="circlesolid" style="width: 18px; height: 18px;" />
  </div>
{/if}
