<script lang="ts">
  import Prism from 'svelte-prism';
</script>

<h1 class="color--eb">Text</h1>

<h3>Text alignment</h3>

<div class="card bg--graa7 padding-m">
  <p class="text-align--center">Centreret tekst</p>
  <p class="text-align--left">Venstrestillet tekst</p>
  <p class="text-align--right">Højrestillet tekst</p>
</div>

<Prism language="html">
  {`<p class="text-align--center"></p>
<p class="text-align--left"></p>
<p class="text-align--right"></p>`}
</Prism>

<h3>Text transform</h3>

<div class="card bg--graa7 padding-m">
  <p class="text-transform--lowercase">SMÅ BOGSTAVER</p>
  <p class="text-transform--uppercase">store bogstaver</p>
</div>

<Prism language="html">
  {`<p class="text-transform--lowercase"></p>
<p class="text-transform--uppercase"></p>`}
</Prism>

<h3>Line height</h3>
<p>Default line-height will be based on the browser usually around 1.2</p>
<div class="card bg--graa7">
  <div class="card-content flex flex-justify--between">
    <div class="width-1of3 margin-m">
      <p class="lineheight-m">normal line-height</p>
      <p class="lineheight-l">sub-overskrift/manchet line-height</p>
      <p class="lineheight-xl">lead-in line-height</p>
      <p class="lineheight-xxl">Overskrift(H1) line-height</p>
    </div>
    <div class="width-1of3 margin-m">
      <p class="lineheight-m">lineheight-m</p>
      <p class="lineheight-l">lineheight-l</p>
      <p class="lineheight-xl">lineheight-xl</p>
      <p class="lineheight-xxl">lineheight-xxl</p>
    </div>
  </div>
</div>

<Prism language="html">
  {`<div class="lineheight-m">
  <p>line-height: 1.5em</p>
</div>`}
</Prism>
