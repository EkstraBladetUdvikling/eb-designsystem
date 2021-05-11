<script>
  import Prism from 'svelte-prism';
</script>

<h1>Text</h1>

## Text alignment Findes som center, left og right

<div class="margin-l--tb">
  <p class="text-align--center">Centreret tekst</p>
  <p class="text-align--left">Venstrestillet tekst</p>
  <p class="text-align--right">Højrestillet tekst</p>
</div>

<Prism
  language="html"
  source={`
<p class="text-align--center">Centreret tekst</p>
<p class="text-align--left">Venstrestillet tekst</p>
<p class="text-align--right">Højrestillet tekst</p>
`}
/>

## Text transform Findes som lowercase og uppercase

<Prism
  language="html"
  source={`
<p class="text-transform--lowercase">små bogstaver</p>
<p class="text-transform--uppercase">STORE BOGSTAVER</p>
`}
/>
