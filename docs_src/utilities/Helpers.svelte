<script lang="ts">
  import Prism from 'svelte-prism';
</script>

<h1 class="color--eb">Helpers</h1>

<h3>Skjult element</h3>

<Prism language="html">
  {`<div class="hidden"></div>`}
</Prism>

<h3>Position</h3>

<Prism language="html">
  {`<div class="position-absolute"></div>
<div class="position-fixed"></div>
<div class="position-relative"></div>`}
</Prism>

<h3>Floats</h3>

<div class="card bg--graa7">
  <div>
    <div class="bg--eb padding-m float-left">float-left</div>
    <div class="bg--eb padding-m float-right">float-right</div>
  </div>
</div>

<Prism language="html">
  {`<div class="float-left"></div>
<div class="float-right"></div>`}
</Prism>

<h3>Clear</h3>

<Prism language="html">
  {`<div class="clear"></div>`}
</Prism>

<h3>Centrér vertikalt</h3>
<p>Kræver en fast bredde på elementet.</p>

<div class="card bg--graa7">
  <div class="vertical-center width-1of3 padding-l bg--eb">vertical-center</div>
</div>

<Prism language="html">
  {`<div class="vertical-center"></div>
<div class="vertical-auto"></div>`}
</Prism>

<h3>Box-shadow</h3>

<div class="card bg--graa7">
  <div class="card-content">
    <div class="border-radius box-shadow--small padding-xl margin-l bg--eb">box-shadow--small</div>
    <div class="border-radius box-shadow padding-xl margin-l bg--eb">box-shadow</div>
    <div class="border-radius box-shadow--large padding-xl margin-l bg--eb">box-shadow--large</div>
  </div>
</div>

<Prism language="html">
  {`<div class="box-shadow--small"></div>
<div class="box-shadow"></div>
<div class="box-shadow--large"></div>`}
</Prism>
