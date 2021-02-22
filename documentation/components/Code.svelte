<script lang="ts">
  export let language = 'markup';

  export let className: string;

  let cssClass = 'margin-l--tb';
  if (className) cssClass = `${cssClass} ${className}`;
</script>

<div class={cssClass}>
  <pre>
    <code class="language-{language}">
      <slot>
      </slot>
    </code>
  </pre>
</div>
