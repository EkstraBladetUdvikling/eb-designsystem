<script lang="ts">
  import Icon from '../icon/Icon.svelte';
  export let position: 'left' | 'right' = 'left';

  export let className: string = undefined;

  let cssClass = `tooltip tooltip--${position}`;

  if (className) cssClass = `${cssClass} ${className}`;
</script>

<label class={cssClass}>
  <input type="checkbox" hidden class="tooltip-input" />
  <div class="tooltip-off">
    <Icon className="tooltip-toggle" name="questioncircle" width="18" />
  </div>
  <div class="tooltip-on">
    <Icon className="tooltip-toggle" name="timescircle" width="18" />
    <div class="padding-s">
      <slot />
    </div>
  </div>
</label>
