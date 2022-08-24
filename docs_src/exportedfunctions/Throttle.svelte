<script lang="ts">
  import Prism from 'svelte-prism';
</script>

<h1>Throttle</h1>
<p>
  Throttle the execution of a given callback. Usefull with scroll events as they fire rapidly and there is no good way
  to tell if the user stopped scrolling.
</p>
<p>Takes a callback function and a number, the amount of milliseconds to throttle, as arguments</p>

<code>
  <div>
    <b>@param callback</b> <em>required</em> callback function
  </div>
  <div>
    <b>@param wait</b> <em>required</em> number of milliseconds to wait
  </div>
</code>
<Prism language="js">
  {`import { throttle } from '@ekstra-bladet/designsystem';

window.addEventListener(
  'scroll',
  throttle((data) => {
    callback(data);
  }, 150)
);
`}
</Prism>
