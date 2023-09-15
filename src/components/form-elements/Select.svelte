<script lang="ts">
  export let inputtype = 'text';
  export let label: string | undefined = undefined;
  export let className: string | undefined = undefined;
  export let selected: string | undefined = undefined;

  let baseClass = `form-input form-input--${inputtype}`;

  if (className) baseClass = `${className} ${baseClass}`;
</script>

<label class="form-label" for="select">{label}</label>
<select bind:value={selected} class={baseClass} id="select">
  <slot />
</select>
