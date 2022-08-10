<script lang="ts">
  import Prism from 'svelte-prism';

  import { sourceType } from '../stores';
</script>

<h1>HorizontalScroll</h1>

<p>The file exports an enum called SCROLLDIRECTION and a class called HorizontalScrollHandler.</p>

<h2>SCROLLDIRECTION - enum</h2>

<p>The idea of the enum is to ensure correct arguments is passed to <b>scrollWithButton</b> function.</p>
<p>Properties:</p>
<ul>
  <li>left</li>
  <li>right</li>
</ul>

<h2>HorizontalScrollHandler - Class</h2>

<p>Instantiation takes no arguments.</p>
<p>The class has three public functions</p>
<code>
  <div class="padding-xl--l padding-m--tb">
    <div>
      <h3 class="margin-none">init</h3>
      <p>Sets up function to handle scrolling</p>
      <p>
        <b>@param scrollItemContainer</b> HTMLDivElement <em>required</em> - the closest parent to the elements in the scroll
        list
      </p>
      <p>
        <b>@param scrollContainer</b> HTMLDivElement <em>required</em> - the parent, which has the width of the element
      </p>
    </div>
    <div>
      <h3 class="margin-none">scrollWithButton</h3>
      <p>Moves the list to make the next element, which is not fully visible, the new "first" element of the list</p>
      <p>
        <b>@param scrollContainer</b> HTMLDivElement <em>required</em> - the parent, which has the width of the element
      </p>
    </div>
    <div>
      <h3 class="margin-none">update</h3>
      <p>
        Should be called when new elements are added to list, to ensure all elements will be visible through click
        functionality
      </p>
    </div>
  </div>
</code>
<p>
  The reason for the use of an init function and not utilizing the contructor is to ensure an instance exists when
  referencing <em>scrollWithButton</em> in svelte context
</p>
{#if $sourceType === 'svelte'}
  <p>See full implementation in <b>HorizontalScroll.svelte</b></p>
  <Prism language="js"
    >{`import { HorizontalScrollHandler, SCROLLDIRECTION } from '../../functions/horizontalscroll';

let scrollContainer: HTMLDivElement;
let scrollItemContainer: HTMLDivElement;

const horizontalScrollHandler = new HorizontalScrollHandler();

onMount(() => {
  horizontalScrollHandler.init(scrollItemContainer, scrollContainer);
});

afterUpdate(() => {
  horizontalScrollHandler.update();
});`}
  </Prism>
{:else}
  <Prism language="js">
    {`import {
  HorizontalScrollHandler,
  SCROLLDIRECTION,
} from '@ekstra-bladet/designsystem';

const scrollItemContainer = document.getElementById('scrollItemContainer');
const scrollContainer = document.getElementById('scrollContainer');

const horizontalScrollHandler = new HorizontalScrollHandler();
horizontalScrollHandler.init(scrollItemContainer, scrollContainer);

prevScrollBtn.addEventListener('click', () => {
  horizontalScrollHandler.scrollWithButton(SCROLLDIRECTION.left);
});

nextScrollBtn.addEventListener('click', () => {
  horizontalScrollHandler.scrollWithButton(SCROLLDIRECTION.right);
});
`}
  </Prism>
  <Prism language="html">
    {`<div
  id="scrollContainer"
  class="horizontal-scroll-container"
  data-atend="false"
  data-atstart="true"
>
  <div id="scrollItemContainer" data-horizontallist="itemcontainer" class="horizontal-scroll-items flex">
    ...
  </div>
</div>`}
  </Prism>
{/if}
