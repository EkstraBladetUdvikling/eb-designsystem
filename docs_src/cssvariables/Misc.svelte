<script lang="ts">
  import Prism from 'svelte-prism';
</script>

<h1>Miscellaneous</h1>

<div>
  <p>Variables that didn't fit another category</p>
</div>

<h2>Box shadow</h2>

<Prism language="css">
  {`--box-shadow: 0 5px 18px rgba(var(--rgb-color--black), .1);`}
  {`--box-shadow--dark: 0 5px 18px rgba(var(--rgb-color--black), .6);`}
</Prism>

<h2>Border radius</h2>

<Prism language="css">
  {`--border-radius--small: 5px;`}
  {`--border-radius: 10px;`}
  {`--border-radius--medium: var(--border-radius);`}
</Prism>
