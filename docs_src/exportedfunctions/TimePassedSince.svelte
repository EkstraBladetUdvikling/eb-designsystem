<script lang="ts">
  import Prism from 'svelte-prism';
</script>

<h1>timePassedSince</h1>
<p>Takes a datetimestring and transforms it to a string with the time passed since the given time</p>
<code>
  <div class="padding-xl--l padding-m--tb">
    <p><b>@param datetime</b> valid datetimestring <em>required</em></p>
    <p><b>@param todayAsText</b> boolean <em>optional</em></p>
  </div>
</code>

<Prism language="js">
  {`import { timePassedSince } from '@ekstra-bladet/designsystem';`}
</Prism>
