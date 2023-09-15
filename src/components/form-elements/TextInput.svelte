<script lang="ts">
  import { onMount } from 'svelte';

  export let inputtype: string = 'text';
  export let label: string | undefined = undefined;
  export let className: string | undefined = undefined;
  export let size: string = 'padding-m--tb';

  let inputEl: HTMLInputElement;
  let inputLabelEl: HTMLSpanElement;
  let baseClass = `form-input form-input--${inputtype} width-1of1`;

  if (className) baseClass = `${className} ${baseClass}`;

  /* focus effect on form elements */
  onMount(() => {
    inputEl.addEventListener('focus', () => {
      if (inputEl.parentElement) {
        inputEl.parentElement.setAttribute('data-focus', 'true');
      }
      if (inputEl.previousElementSibling) {
        inputEl.previousElementSibling.classList.remove('hidden');
      }
    });
    inputEl.addEventListener('focusout', () => {
      if (inputEl.parentElement) {
        inputEl.parentElement.setAttribute('data-focus', 'false');
      }
      if (inputEl.value.length === 0) {
        inputLabelEl.classList.add('hidden');
      }
    });
  });
</script>

<div class={`form-input-container flex border-radius padding-m--rl ${size}`}>
  {#if label}
    <span bind:this={inputLabelEl} class="hidden">{label}:</span>
  {/if}
  <input bind:this={inputEl} on:focus type={inputtype} placeholder={label} class={baseClass} />
</div>
