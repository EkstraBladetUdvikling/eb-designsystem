<script lang="ts">
  import Prism from 'svelte-prism';
</script>

<h1>timePassedSince</h1>
<p>Takes a datetimestring and transforms it to a string with the time passed since the given time</p>
<code>
  <div class="padding-xl--l padding-m--tb">
    <p>@param datetime: string - valid datetimestring</p>
    <p>@returns string</p>
  </div>
</code>

<Prism language="js">
  {`import { timePassedSince } from '@ekstra-bladet/designsystem';`}
</Prism>
