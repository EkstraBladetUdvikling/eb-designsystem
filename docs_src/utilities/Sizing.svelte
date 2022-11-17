<script lang="ts">
  import Prism from 'svelte-prism';
</script>

<h1 class="color--eb">Sizing</h1>

<h3>Bredder</h3>

<div class="card bg--graa7">
  <div class="bg--eb padding-m width-100vw">width-100vw</div>
  <div class="bg--eb padding-m width-auto">width-auto</div>
  <div class="bg--eb padding-m width-1of1">width-1of1</div>
  <div class="bg--eb padding-m width-5of6">width-5of6</div>
  <div class="bg--eb padding-m width-3of4">width-3of4</div>
  <div class="bg--eb padding-m width-2of3">width-2of3</div>
  <div class="bg--eb padding-m width-1of2">width-1of2</div>
  <div class="bg--eb padding-m width-1of3">width-1of3</div>
  <div class="bg--eb padding-m width-1of4">width-1of4</div>
  <div class="bg--eb padding-m width-1of5">width-1of5</div>
  <div class="bg--eb padding-m width-1of6">width-1of6</div>
</div>

<Prism language="html">
  {`<div class="width-100vw"></div>
<div class="width-auto"></div>
<div class="width-1of1"></div>
<div class="width-5of6"></div>
<div class="width-3of4"></div>
<div class="width-2of3"></div>
<div class="width-1of2"></div>
<div class="width-1of3"></div>
<div class="width-1of4"></div>
<div class="width-1of5"></div>
<div class="width-1of6"></div>`}
</Prism>

<h3>Højder</h3>

<div class="card">
  <div class="text-align--center bg--graa7" style="height: 200px; overflow: hidden">
    <div class="bg--eb padding-m width-1of4 height-100vh" style="display: inline-block">height-100vh*</div>
    <div class="bg--eb padding-m width-1of4 height-auto" style="display: inline-block">height-auto</div>
    <div class="bg--eb padding-m width-1of4 height-1of1" style="display: inline-block">height-1of1</div>
  </div>
  <div class="card-footer">
    <p class="fontsize-small">
      * Viewport height - Vær opmærksom på at disse opfører sig meget forskelligt på forskellige devices html
    </p>
  </div>
</div>

<Prism language="html">
  {`<div class="height-100vh"></div>
<div class="height-auto"></div>
<div class="height-1of1"></div>`}
</Prism>
