<script lang="ts">
  import { onMount } from 'svelte';

  export let inputtype = 'textarea';
  export let label: string | undefined = undefined;
  export let className: string | undefined = undefined;
  export let size = 'padding-m--tb';

  let textareaEl: HTMLTextAreaElement;
  let textareaLabelEl: HTMLSpanElement;
  let baseClass = `form-input form-input--${inputtype} width-1of1`;

  if (className) baseClass = `${className} ${baseClass}`;

  /* focus effect on form elements */
  onMount(() => {
    textareaEl.addEventListener('focus', () => {
      if (textareaEl.parentElement) {
        textareaEl.parentElement.setAttribute('data-focus', 'true');
      }
      if (textareaEl.previousElementSibling) {
        textareaEl.previousElementSibling.classList.remove('hidden');
      }
    });
    textareaEl.addEventListener('focusout', () => {
      if (textareaEl.parentElement) {
        textareaEl.parentElement.setAttribute('data-focus', 'false');
      }
      if (textareaEl.value.length === 0) {
        textareaLabelEl.classList.add('hidden');
      }
    });
  });
</script>

<div class={`form-input-container flex flex--column border-radius padding-m--rl ${size}`}>
  {#if label}
    <span bind:this={textareaLabelEl} class="hidden">{label}:</span>
  {/if}
  <textarea bind:this={textareaEl} on:focus class={baseClass} placeholder={label} />
</div>
