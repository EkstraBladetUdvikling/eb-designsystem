<script lang="ts">
  import Checkbox from './Checkbox.svelte';
  import Select from './Select.svelte';
  import TextArea from './TextArea.svelte';
  import TextInput from './TextInput.svelte';

  import type { SvelteComponent } from 'svelte';

  export let className: string | undefined = undefined;
  export let fieldName: string | undefined = undefined;
  export let inputtype: string = 'text';
  export let label: string | undefined = undefined;
  export let value: number | string = '';
  export let size: string = 'medium';

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
