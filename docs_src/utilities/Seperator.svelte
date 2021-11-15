<script>
  import Prism from 'svelte-prism';
</script>

<h1 class="color--eb">Seperator</h1>

<h3>Seperator</h3>

<div>
  <p>Seperator is <i>class</i> that can be used to seperate content i.e in a box/container.</p>
</div>

<div class="flex">
  <div class="width-1of3 padding-m box-shadow border-radius">
    <p>Header</p>
    <div class="seperator" />
    <p>Content</p>
    <div class="seperator" />
    <p>Footer</p>
  </div>
</div>

<Prism language="html">
  {`<div class="seperator"></div>`}
</Prism>
