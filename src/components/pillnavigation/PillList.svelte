<script lang="ts">
  export let className = undefined;

  let baseClass = `pillnavigation toggle toggle--buttons`;

  if (className) baseClass = `${className} ${baseClass}`;
</script>

<div class={baseClass}>
  <slot />
</div>
