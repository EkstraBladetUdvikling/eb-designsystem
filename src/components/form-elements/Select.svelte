<script lang="ts">
  export let inputtype = 'text';
  export let label = undefined;
  export let className = undefined;

  let baseClass = `form-input form-input--${inputtype}`;

  if (className) baseClass = `${className} ${baseClass}`;
</script>

<label class="form-label" for="select">{label}</label>
<select classname={baseClass} id="select">
  <slot />
</select>
