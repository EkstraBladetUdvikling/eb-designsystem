<script lang="ts">
  import Toggler from '../../src/_components/toggler/Toggler.svelte';
</script>

<Toggler>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>

<Toggler>
  <i slot="on" class="fas fa-bars" />
  <i slot="off" class="far fa-times-circle" />
</Toggler>
