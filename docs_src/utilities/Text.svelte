<script>
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
<p>Default line-height er baseret på browseren normalt 1.2</p>
<Card className="bg--graa7 padding-m">
  <p>Denne brødtekst har en line-height på normal (default). <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</Card>

<Prism language="html">
  {`<div>
  <p>line-height: normal</p>
</div>`}
</Prism>

<Card className="bg--graa7 padding-m lineheight-m">
  <p>Denne brødtekst har en line-height på 1.5. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</Card>

<Prism language="html">
  {`<div class="lineheight-m">
  <p>line-height: 1.5em</p>
</div>`}
</Prism>
