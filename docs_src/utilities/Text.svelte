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
  {`<p class="text-align--center">Centreret tekst</p>
<p class="text-align--left">Venstrestillet tekst</p>
<p class="text-align--right">Højrestillet tekst</p>`}
</Prism>

<h3>Text transform</h3>

<Card className="bg--graa7 padding-m">
  <p class="text-transform--lowercase">SMÅ BOGSTAVER</p>
  <p class="text-transform--uppercase">store bogstaver</p>
</Card>

<Prism language="html">
  {`<p class="text-transform--lowercase">små bogstaver</p>
<p class="text-transform--uppercase">STORE BOGSTAVER</p>`}
</Prism>
