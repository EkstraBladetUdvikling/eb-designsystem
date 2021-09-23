<script lang="ts">
  import { Icon } from '../../';
  export let fieldName = undefined;
  export let group = undefined;
  export let label = undefined;
  export let inputtype = 'checkbox';
  export let value: string = '';

  export let className = undefined;

  let baseClass = `form-checkbox form-checkbox--icon`;

  if (className) baseClass = `${className} ${baseClass}`;
</script>

<label>
  <input type={inputtype} class={baseClass} name={fieldName} {group} {value} />
  <span class="flex form-label">
    {label}
    {#if inputtype === 'checkbox'}
      <Icon className="form-checkbox-toggle--on margin-s--l" name="checksquare" width="16" />
      <Icon className="form-checkbox-toggle--off margin-s--l" name="square" width="16" />
    {:else}
      <Icon className="form-checkbox-toggle--on margin-s--l" name="checkcircle" width="16" />
      <Icon className="form-checkbox-toggle--off margin-s--l" name="circle" width="16" />
    {/if}
  </span>
</label>
