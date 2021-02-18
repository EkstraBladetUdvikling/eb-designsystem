<script lang="typescript">
  import Icon from '../icon';

  export let classExtension: string;
  export let name: string;
  export let style: string;
  export let viewBox: string;

</script>

<div class="card-icon">
  <Icon {name} {classExtension} {style} {viewBox} />
</div>
