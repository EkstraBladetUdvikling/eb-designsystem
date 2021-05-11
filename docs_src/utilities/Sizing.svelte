<script>
  import Prism from 'svelte-prism';
</script>

<div class="grid-width--large">
  <h1 class="color--eb">Sizing</h1>

  <h3>Bredder</h3>

  <ul>
    <li>width-auto</li>
    <li>width-100vw</li>
    <li>width-1of1</li>
    <li>width-1of2</li>
    <li>width-1of3</li>
    <li>width-1of4</li>
    <li>width-1of5</li>
    <li>width-1of6</li>
    <li>width-2of3</li>
    <li>width-3of4</li>
    <li>width-5of6</li>
  </ul>

  <p>Bredde i brøkdele</p>

  <div class="bg--graa5 padding-l">
    <div class="bg--white margin-l--b padding-l width-1of1" />
    <div class="bg--white margin-l--tb padding-l width-1of2" />
    <div class="bg--white margin-l--tb padding-l width-1of3" />
    <div class="bg--white margin-l--tb padding-l width-1of4" />
    <div class="bg--white margin-l--tb padding-l width-1of5" />
    <div class="bg--white margin-l--tb padding-l width-1of6" />
    <div class="bg--white margin-l--tb padding-l width-2of3" />
    <div class="bg--white margin-l--tb padding-l width-3of4" />
    <div class="bg--white margin-l--t padding-l width-5of6" />
  </div>

  <Prism
    language="html"
    source={`
  <div class="bg--graa5 padding-l">
    <div class="bg--white margin-l--b padding-l width-1of1" />
    <div class="bg--white margin-l--tb padding-l width-1of2" />
    <div class="bg--white margin-l--tb padding-l width-1of3" />
    <div class="bg--white margin-l--tb padding-l width-1of4" />
    <div class="bg--white margin-l--tb padding-l width-1of5" />
    <div class="bg--white margin-l--tb padding-l width-1of6" />
    <div class="bg--white margin-l--tb padding-l width-2of3" />
    <div class="bg--white margin-l--tb padding-l width-3of4" />
    <div class="bg--white margin-l--t padding-l width-5of6" />
  </div>
`}
  />

  <h3>Højder</h3>

  <ul>
    <li>height-auto</li>
    <li>height-1of1</li>
    <li>height-100vh *</li>
  </ul>

  * Viewport height - Vær opmærksom på at disse opfører sig meget forskelligt på forskellige devices html
</div>
