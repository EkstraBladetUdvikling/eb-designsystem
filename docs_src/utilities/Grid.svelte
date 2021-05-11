<script lang="ts">
  import Prism from 'svelte-prism';
</script>

<h1>Grid</h1>

<div class="grid-width--xlarge text-align--center bg--graa1" style="overflow: hidden">
  <p>grid-width--xlarge: 930px</p>
  <p>Page content width - frontpage</p>
  <div class="grid-width--large vertical-center bg--graa3" style="overflow: hidden">
    <p>grid-width--large: 910px</p>
    <p>Page content width</p>
    <div class="grid-width--medium vertical-center bg--graa4" style="overflow: hidden">
      <p>grid-width--medium: 730px</p>
      <p>Bodytext container width</p>
      <div class="grid-width--small vertical-center bg--graa5" style="overflow: hidden">
        <p>grid-width--small: 610px</p>
        <p>Widget width</p>
      </div>
    </div>
  </div>
</div>

### Brugseksempler

<Prism
  language="html"
  source={`
<div class="grid-width--small">Small grid</div>
<div class="grid-width--medium">Medium grid</div>
<div class="grid-width--large">Large grid</div>
<div class="grid-width--xlarge">Xlarge grid</div>
`}
/>

### CSS variable names

<Prism
  language="css"
  source={`
--grid-small: 610px;
--grid-medium: 730px;
--grid-large: 910px;
--grid-xlarge: 930px;
`}
/>
