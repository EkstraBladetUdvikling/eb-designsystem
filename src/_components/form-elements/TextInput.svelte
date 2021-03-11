<script lang="ts">
  export let inputtype = 'text';
  export let label = undefined;
  export let className = undefined;

  let baseClass = `form-input form-input--${inputtype}`;

  if (className) baseClass = `${className} ${baseClass}`;
</script>

<input type={inputtype} placeholder={label} class={baseClass} />
{#if label}
  <span class="form-label">{label}</span>
{/if}
