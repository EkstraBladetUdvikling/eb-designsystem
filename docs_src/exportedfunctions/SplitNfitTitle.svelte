<script lang="ts">
  import Prism from 'svelte-prism';
  import { link } from 'svelte-spa-router';
  import { exportedfunctions } from '../routes/exportedfunctions';

  const splitRoute = exportedfunctions.routes.find((exfunc) => exfunc.title === 'SplitTitle');
</script>

<h1>SplitNfitTitle</h1>

<p>
  Uses
  <a href="#a11y" use:link={{ disabled: false, href: splitRoute.href }}> {splitRoute.title}</a> to split the title, and
  then uses
  <a href="https://www.npmjs.com/package/fitty" target="_blank">fitty</a> to adjust font-size to make the lines fit the width
  of the parent element.
</p>
<p>Returns a document fragment</p>
<code>
  <div class="padding-xl--l padding-m--tb">
    <div><b>@param title</b> string <em>required</em></div>
    <div>
      <b>@param options</b> object
      <div class="padding-l--l">
        <div><b>@prop maxLines?</b> number = 10</div>
        <div><b>@prop minLines?</b> number = 1</div>
        <div><b>@prop maxSize?</b> number</div>
        <div><b>@prop minSize?</b> number</div>
        <div><b>@prop multiLine?</b> boolean</div>
        <div><b>@prop observeMutations?</b> MutationObserverInit</div>
        <div>
          <b>@prop safe?</b> boolean = false - when false the browser waits for document.fonts.ready, should be false if
          using custom fonts
        </div>
      </div>
    </div>
  </div>
</code>
<Prism language="js">
  {`import { splitNfitTitle } from '@ekstra-bladet/designsystem';

const titleEl = splitNfitTitle('This is my title that I want split and fitted');
document.appendChild(titleEl);
`}
</Prism>
