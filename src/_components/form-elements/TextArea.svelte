<script lang="ts">
  import { onMount } from 'svelte';

  export let inputtype = 'textarea';
  export let label = undefined;
  export let className = undefined;
  export let size = "padding-m--tb";

  let baseClass = `form-input form-input--${inputtype} width-1of1`;

  if (className) baseClass = `${className} ${baseClass}`;

  /* focus effect on form elements */
  onMount(() => {
    const inputForms = document.querySelectorAll('.form-input');
    inputForms.forEach((input, index) => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focus');
        const inputLabel = input.previousElementSibling;
        inputLabel.classList.remove('hidden');
      });
      input.addEventListener('focusout', () => {
        input.parentElement.classList.remove('focus');
        const inputElement = document.querySelectorAll('.form-input')[index] as HTMLInputElement;
        const inputValue = inputElement.value;
        if (inputValue.length === 0) {
          const inputLabel = input.previousElementSibling;
          inputLabel.classList.add('hidden');
        }
      });
    });
  });
</script>

<div class={`form-input-container flex flex-column border-radius padding-m--rl ${size}`}>
  {#if label}
    <span class="hidden">{label}:</span>
  {/if}
  <textarea class={baseClass} placeholder={label}></textarea>
</div>
