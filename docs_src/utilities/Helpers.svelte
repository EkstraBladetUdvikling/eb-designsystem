<script>
  import Prism from 'svelte-prism';
  import { Card } from '../../src';
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

<Card className="bg--graa7">
  <div>
    <div class="bg--eb padding-m float-left">float-left</div>
    <div class="bg--eb padding-m float-right">float-right</div>
  </div>
</Card>

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

<Card className="bg--graa7">
  <div class="vertical-center width-1of3 padding-l bg--eb">vertical-center</div>
</Card>

<Prism language="html">
  {`<div class="vertical-center"></div>
<div class="vertical-auto"></div>`}
</Prism>

<h3>Margin & padding</h3>
<p>
  For både <strong>margin</strong> og <strong>padding</strong> klassen har vi fem størrelser
  <em>(s, m, l, xl og xxl)</em>
  og så
  <em>none</em> som sættes på med bindesteg.
</p>

<Prism language="html">
  {`<div class="margin-none padding-none"></div>
<div class="margin-s padding-s"></div>
<div class="margin-m padding-m"></div>
<div class="margin-l padding-l"></div>
<div class="margin-xl padding-xl"></div>
<div class="margin-xxl padding-xxl"></div>`}
</Prism>

<p>
  Ønskes der derimod kun at have <strong>margin</strong> og <strong>padding</strong> i en retning tilføjes dette med double
  bindestreg.
</p>

<Prism language="html">
  {`<div class="margin-l--t padding-l--t"></div>
<div class="margin-l--r padding-l--r"></div>
<div class="margin-l--b padding-l--b"></div>
<div class="margin-l--l padding-l--l"></div>`}
</Prism>

<p>Vi har også to samle klasser for <em>top-bottom</em> og <em>right-left</em>.</p>

<Prism language="html">
  {`<div class="margin-l--tb padding-l--tb"></div>
<div class="margin-l--rl padding-l--rl"></div>`}
</Prism>

<h3>Border-radius</h3>

<Card className="bg--graa7">
  <div class="flex flex-justify--between flex-wrap--wrap" slot="content">
    <div class="border-radius padding-xl width-1of3 margin-l bg--eb">border-radius</div>
    <div class="border-radius-s padding-xl width-1of3 margin-l bg--eb">border-radius-s</div>
    <div class="border-radius--t padding-xl width-1of3 margin-l bg--eb">border-radius--t</div>
    <div class="border-radius-s--t padding-xl width-1of3 margin-l bg--eb">border-radius-s--t</div>
    <div class="border-radius--b padding-xl width-1of3 margin-l bg--eb">border-radius--b</div>
    <div class="border-radius-s--b padding-xl width-1of3 margin-l bg--eb">border-radius-s--b</div>
  </div>
</Card>

<Prism language="html">
  {`<div class="border-radius"></div>
<div class="border-radius-s"></div>
<div class="border-radius--t"></div>
<div class="border-radius-s--t"></div>
<div class="border-radius--b"></div>
<div class="border-radius-s--b"></div>`}
</Prism>
