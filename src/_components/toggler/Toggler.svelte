<script lang="ts">
  export let className = undefined;

  let baseClass = `toggle`;

  if (className) baseClass = `${className} ${baseClass}`;
</script>

<label class={baseClass}>
  <input type="checkbox" hidden class="toggle-input" />
  <span class="toggle toggle-on">
    <slot name="on" />
  </span>
  <span class="toggle toggle-off">
    <slot name="off" />
  </span>
</label>
