<script lang="ts">
  import Prism from 'svelte-prism';

  import { Card } from '../../src';
</script>

<h1 class="color--eb">Text</h1>

<h3>Text alignment</h3>

<Card className="bg--graa7 padding-m">
  <p class="text-align--center">Centreret tekst</p>
  <p class="text-align--left">Venstrestillet tekst</p>
  <p class="text-align--right">Højrestillet tekst</p>
</Card>

<Prism language="html">
  {`<p class="text-align--center"></p>
<p class="text-align--left"></p>
<p class="text-align--right"></p>`}
</Prism>

<h3>Text transform</h3>

<Card className="bg--graa7 padding-m">
  <p class="text-transform--lowercase">SMÅ BOGSTAVER</p>
  <p class="text-transform--uppercase">store bogstaver</p>
</Card>

<Prism language="html">
  {`<p class="text-transform--lowercase"></p>
<p class="text-transform--uppercase"></p>`}
</Prism>

<h3>Line height</h3>
<p>Default line-height will be based on the browser usually around 1.2</p>
<Card className="bg--graa7">
  <div class="flex flex-justify--between" slot="content">
    <div class="width-1of3 margin-m">
      <p>normal line-height</p>
      <p>normal line-height</p>
      <p>normal line-height</p>
    </div>
    <div class="width-1of3 margin-m lineheight-m">
      <p>lineheight-m</p>
      <p>lineheight-m</p>
      <p>lineheight-m</p>
    </div>
  </div>
</Card>

<Prism language="html">
  {`<div class="lineheight-m">
  <p>line-height: 1.5em</p>
</div>`}
</Prism>
