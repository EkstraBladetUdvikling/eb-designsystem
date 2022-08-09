<script lang="ts">
  import Prism from 'svelte-prism';

  import { sourceType } from '../stores';
</script>

<h1>HorizontalScrollHandler</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import {
  HorizontalScrollHandler,
  SCROLLDIRECTION,
} from '@ekstra-bladet/designsystem/svelte/functions/horizontalscroll';

let scrollContainer: HTMLDivElement;
let scrollItemContainer: HTMLDivElement;

const horizontalScrollHandler = new HorizontalScrollHandler();

onMount(() => {
  horizontalScrollHandler.init(scrollItemContainer, scrollContainer);
});

afterUpdate(() => {
  horizontalScrollHandler.update();
});
`}
  </Prism>
{:else}
  <Prism language="js">
    {`import {
  HorizontalScrollHandler,
  SCROLLDIRECTION,
} from '@ekstra-bladet/designsystem/svelte/functions/horizontalscroll';

const horizontalScrollHandler = new HorizontalScrollHandler();
horizontalScrollHandler.init('scrollHandlerId');

horizontalScrollHandler.scrollWithButton(DIRECTION.left);

`}
  </Prism>
  <Prism language="html">
    {`<div
  id="scrollHandlerId"
  class="horizontal-scroll-container"
  data-atend="false"
  data-atstart="true"
>
  ...
</div>`}
  </Prism>
{/if}
