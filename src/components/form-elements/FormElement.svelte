<script lang="ts">
  import Checkbox from './Checkbox.svelte';
  import Select from './Select.svelte';
  import TextArea from './TextArea.svelte';
  import TextInput from './TextInput.svelte';

  import type { SvelteComponent } from 'svelte';

  export let className = undefined;
  export let fieldName = undefined;
  export let inputtype = 'text';
  export let label = undefined;
  export let value: number | string = '';
  export let size = 'medium';

  let component: typeof SvelteComponent<any> = TextInput;
  switch (inputtype) {
    case 'select':
      component = Select;
      break;
    case 'checkbox':
    case 'radio':
      component = Checkbox;
      break;
    case 'textarea':
      component = TextArea;
      break;
  }

  switch (size) {
    case 'small': {
      size = 'padding-s--tb';
      break;
    }
    case 'medium': {
      size = 'padding-m--tb';
      break;
    }
    case 'large': {
      size = 'padding-l--tb';
      break;
    }
  }
</script>

<div class="form-element margin-l--b">
  <svelte:component this={component} class={className} {size} {label} {inputtype} {value} name={fieldName}>
    <slot />
  </svelte:component>
</div>
