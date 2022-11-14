<script lang="ts">
  import Prism from 'svelte-prism';

  import { Card } from '../../src';

  function moveToAllColors() {
    document.getElementById('all-colors-section').scrollIntoView();
  }
</script>

<h1 class="color--eb">Color</h1>

<h3>Text color</h3>
<p
  class="color--red"
  on:click={moveToAllColors}
  on:keydown={moveToAllColors}
  role="button"
  tabindex={0}
  style="cursor: pointer;"
>
  View all colors available
</p>

<Card className="bg--graa7">
  <div class="flex flex-justify--between flex-wrap--wrap" slot="content">
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--black">color--black</div>
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--black color--white">color--white</div>
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--sport">color--sport</div>
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--eb">color--eb</div>
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--orangedark">color--orangedark</div>
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--nyheder">color--nyheder</div>
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--section">
      color--section
      <em>(inherit the color of the section i.e sport)</em>
    </div>
  </div>
</Card>

<Prism language="html">
  {`<div class="color--black"></div>
<div class="color--white"></div>
<div class="color--blue"></div>
<div class="color--sport"></div>
<div class="color--orangedark"></div>
<div class="color--nyheder"></div>
<div class="color--section"></div>`}
</Prism>

<h3>Background color</h3>
<p class="color--red" on:click={moveToAllColors} on:keydown={moveToAllColors} style="cursor: pointer;">
  View all colors available
</p>

<Card className="bg--graa7">
  <div class="flex flex-justify--between flex-wrap--wrap" slot="content">
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--black">bg--black</div>
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--black">bg--white</div>
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--underholdning">bg--underholdning</div>
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--eb">bg--eb</div>
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--orangedark">bg--orangedark</div>
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--nyheder">bg--nyheder</div>
    <div class="flex flex--column padding-xl width-1of3 margin-l bg--white color--section">
      bg--section
      <em>(inherit the color of the section i.e sport)</em>
    </div>
  </div>
</Card>

<Prism language="html">
  {`<div class="bg--black"></div>
<div class="bg--white"></div>
<div class="bg--underholdning"></div>
<div class="bg--eb"></div>
<div class="bg--orangedark"></div>
<div class="bg--nyheder"></div>
<div class="bg--section"></div>`}
</Prism>

<h3 id="all-colors-section">All colors available on ekstrabladet</h3>

<object data="https://ekstrabladetudvikling.github.io/eb-colors/" width="100%" height="500" title="eb-colors">
  Error: Embedded data could not be displayed. Visit this link instead: <a
    href="https://ekstrabladetudvikling.github.io/eb-colors/">eb-colors</a
  >
</object>
