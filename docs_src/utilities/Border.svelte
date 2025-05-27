<script lang="ts">
  import Prism from 'svelte-prism';
</script>

<h1 class="color--eb">Border</h1>

<h3>Border</h3>

<div class="card bg--graa7">
  <div class="card-content flex flex-justify--between flex-wrap--wrap">
    <div class="border border--black width-1of3 padding-xl margin-l bg--eb">border</div>
    <div class="border--t border--black width-1of3 padding-xl margin-l bg--eb">border--t</div>
    <div class="border--b border--black width-1of3 padding-xl margin-l bg--eb">border--b</div>
    <div class="border--l border--black width-1of3 padding-xl margin-l bg--eb">border--l</div>
    <div class="border--r border--black width-1of3 padding-xl margin-l bg--eb">border--r</div>
  </div>
</div>

<Prism language="html">
  {`<div class="border"></div>
<div class="border--t"></div>
<div class="border--b"></div>
<div class="border--l"></div>
<div class="border--r"></div>`}
</Prism>

<h3>Border-radius</h3>

<div class="card bg--graa7">
  <div class="card-content flex flex-justify--between flex-wrap--wrap">
    <div class="border-radius padding-xl width-1of3 margin-l bg--eb">border-radius</div>
    <div class="border-radius-s padding-xl width-1of3 margin-l bg--eb">border-radius-s</div>
    <div class="border-radius--t padding-xl width-1of3 margin-l bg--eb">border-radius--t</div>
    <div class="border-radius-s--t padding-xl width-1of3 margin-l bg--eb">border-radius-s--t</div>
    <div class="border-radius--b padding-xl width-1of3 margin-l bg--eb">border-radius--b</div>
    <div class="border-radius-s--b padding-xl width-1of3 margin-l bg--eb">border-radius-s--b</div>
  </div>
</div>

<Prism language="html">
  {`<div class="border-radius"></div>
<div class="border-radius-s"></div>
<div class="border-radius--t"></div>
<div class="border-radius-s--t"></div>
<div class="border-radius--b"></div>
<div class="border-radius-s--b"></div>`}
</Prism>

<h3>Border colors</h3>
<p>All border colors available</p>

<div class="card bg--graa7">
  <div class="card-content flex flex-justify--between flex-wrap--wrap">
    <div class="flex flex-align--center border border--black padding-xl width-1of3 margin-l">border--black</div>
    <div class="flex flex-align--center border border--graa1 padding-xl width-1of3 margin-l">border--graa1</div>
    <div class="flex flex-align--center border border--graa2 padding-xl width-1of3 margin-l">border--graa2</div>
    <div class="flex flex-align--center border border--graa3 padding-xl width-1of3 margin-l">border--graa3</div>
    <div class="flex flex-align--center border border--graa4 padding-xl width-1of3 margin-l">border--graa4</div>
    <div class="flex flex-align--center border border--graa5 padding-xl width-1of3 margin-l">border--graa5</div>
    <div class="flex flex-align--center border border--graa6 padding-xl width-1of3 margin-l">border--graa6</div>
    <div class="flex flex-align--center border border--graa7 padding-xl width-1of3 margin-l">border--graa7</div>
    <div class="flex flex-align--center border border--white padding-xl width-1of3 margin-l">border--white</div>
  </div>
</div>

<Prism language="html">
  {`<div class="border border--black"></div>
<div class="border border--graa1"></div>
<div class="border border--graa2"></div>
<div class="border border--graa3"></div>
<div class="border border--graa4"></div>
<div class="border border--graa5"></div>
<div class="border border--graa6"></div>
<div class="border border--graa7"></div>
<div class="border border--white"></div>`}
</Prism>
