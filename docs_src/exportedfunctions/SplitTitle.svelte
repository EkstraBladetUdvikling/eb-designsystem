<script lang="ts">
  import Prism from 'svelte-prism';
</script>

<h1>SplitTitle</h1>
<p>Splits the title into lines based on given min and max number of lines.</p>
<p>The created lines is returned as an array of strings.</p>
<code>
  <div>
    <div><b>@param input</b> string <em>required</em></div>
    <div><b>@param minLines</b> number = 1</div>
    <div><b>@param maxLines</b> number = 4</div>
  </div>
</code>

<Prism language="js">
  {`import { splitTitle } from '@ekstra-bladet/designsystem/svelte/functions/splitTitle';

const lines = splitTitle('Split this into lines', 2, 3);
`}
</Prism>
