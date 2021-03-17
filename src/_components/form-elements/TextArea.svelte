<script lang="ts">
  import { onMount } from 'svelte';

  export let inputtype = 'textarea';
  export let label = undefined;
  export let className = undefined;
  export let size = "padding-m--tb";

  let textareaEl: HTMLTextAreaElement;
  let baseClass = `form-input form-input--${inputtype} width-1of1`;

  if (className) baseClass = `${className} ${baseClass}`;

     /* focus effect on form elements */
     onMount(() => {
    textareaEl.addEventListener('focus', () => {
      textareaEl.parentElement.setAttribute('data-focus', 'true');
      const inputLabel = textareaEl.previousElementSibling;
      inputLabel.classList.remove('hidden');
    });
    textareaEl.addEventListener('focusout', () => {
      textareaEl.parentElement.setAttribute('data-focus', 'false');
      const inputValue = textareaEl.value;
      if (inputValue.length === 0) {
        const inputLabel = textareaEl.previousElementSibling;
        inputLabel.classList.add('hidden');
      }
    });
  });
</script>

<div class={`form-input-container flex flex-column border-radius padding-m--rl ${size}`}>
  {#if label}
    <span class="hidden">{label}:</span>
  {/if}
  <textarea bind:this={textareaEl} on:focus class={baseClass} placeholder={label}></textarea>
</div>
