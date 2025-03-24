<script lang="ts">
  import Prism from 'svelte-prism';
</script>

<h1>SplitTitle</h1>
<p>Splits the title into lines based on given min and max number of lines.</p>
<p>The created lines is returned as an array of strings.</p>
<code>
  <div class="padding-xl--l padding-m--tb">
    <b>@param ISplitTitleOptions</b> object
    <div class="padding-l--l">
      <div><b>@prop options</b> string <em>required</em></div>
      <div><b>@prop minChars?</b> number = 3</div>
      <div><b>@prop minLines?</b> number = 1</div>
      <div><b>@prop maxLines?</b> number = 4</div>
    </div>
  </div>
</code>

<Prism language="js">
  {`import { splitTitle } from '@ekstra-bladet/designsystem/svelte/functions/splitTitle';

const lines = splitTitle({ input: 'Split this into lines', minChars: 4, minLines: 2, maxLines: 3 });
`}
</Prism>
