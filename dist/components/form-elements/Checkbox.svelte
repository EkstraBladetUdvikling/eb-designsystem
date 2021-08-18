<script lang="ts">
  export let fieldName = undefined;
  export let group = undefined;
  export let label = undefined;
  export let inputtype = 'checkbox';
  export let value;

  export let className = undefined;

  let baseClass = `form-checkbox form-checkbox--icon`;

  if (className) baseClass = `${className} ${baseClass}`;
</script>

<label>
  <input type={inputtype} class={baseClass} name={fieldName} {group} {value} />
  <span class="form-label">
    {label}
    {#if inputtype === 'checkbox'}
      <i class="far fa-check-square form-checkbox-toggle--on" aria-hidden="true" />
      <i class="far fa-square form-checkbox-toggle--off" aria-hidden="true" />
    {:else}
      <i class="far fa-check-circle form-checkbox-toggle--on" aria-hidden="true" />
      <i class="far fa-circle form-checkbox-toggle--off" aria-hidden="true" />
    {/if}
  </span>
</label>
