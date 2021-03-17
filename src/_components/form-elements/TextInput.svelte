<script lang="ts">
  import { onMount } from 'svelte';

  export let inputtype = 'text';
  export let label = undefined;
  export let className = undefined;
  export let size = "padding-m--tb";

  let inputEl: HTMLInputElement;
  let baseClass = `form-input form-input--${inputtype} width-1of1`;

  if (className) baseClass = `${className} ${baseClass}`;

   /* focus effect on form elements */
   onMount(() => {
    inputEl.addEventListener('focus', () => {
      inputEl.parentElement.setAttribute('data-focus', 'true');
      const inputLabel = inputEl.previousElementSibling;
      inputLabel.classList.remove('hidden');
    });
    inputEl.addEventListener('focusout', () => {
      inputEl.parentElement.setAttribute('data-focus', 'false');
      const inputValue = inputEl.value;
      if (inputValue.length === 0) {
        const inputLabel = inputEl.previousElementSibling;
        inputLabel.classList.add('hidden');
      }
    });
  });
</script>

<div class={`form-input-container flex border-radius padding-m--rl ${size}`}>
  {#if label}
    <span class="hidden">{label}:</span>
  {/if}
  <input bind:this={inputEl} on:focus type={inputtype} placeholder={label} class={baseClass} />
</div>
