<script lang="ts">
  import Checkbox from './Checkbox.svelte';

  import Select from './Select.svelte';

  import TextInput from './TextInput.svelte';

  export let inputtype = 'text';
  export let label = undefined;
  export let className = undefined;

  let component = TextInput;
  switch (inputtype) {
    case 'select':
      component = Select;
      break;
    case 'checkbox':
    case 'radio':
      component = Checkbox;
      break;
  }
</script>

<div class="form-element margin-l--b">
  <svelte:component this={component} class={className} {label} {inputtype}>
    <slot />
  </svelte:component>
</div>
