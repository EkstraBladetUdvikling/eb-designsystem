<script lang="ts">
  export let iconOn: string = 'times';
  export let iconOff: string = 'question';
  export let position: 'left' | 'right' = 'left';

  export let className: string;

  let cssClass = `tooltip tooltip--${position}`;

  if (className) cssClass = `${cssClass} ${className}`;
</script>

<label class={cssClass}>
  <input type="checkbox" hidden class="tooltip-input" />
  <div class="tooltip-off">
    <i class="tooltip-toggle fas fa-{iconOff}" />
  </div>
  <div class="tooltip-on">
    <i class="tooltip-toggle fas fa-{iconOn}" />
    <div class="padding-s">
      <slot />
    </div>
  </div>
</label>
