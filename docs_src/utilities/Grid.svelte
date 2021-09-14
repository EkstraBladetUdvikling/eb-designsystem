<script>
  import Prism from 'svelte-prism';
  import { Card } from '../../src';
</script>

<h1 class="color--eb margin-l--b">Grid</h1>

<Card className="bg--graa7 text-align--center">
  <div class="grid-width--xlarge vertical-center bg--eb" style="overflow: hidden">
    <p>grid-width--xlarge: 930px</p>
    <p>Page content width - frontpage</p>
    <div class="grid-width--large vertical-center bg--eb2" style="overflow: hidden">
      <p>grid-width--large: 910px</p>
      <p>Page content width</p>
      <div class="grid-width--medium vertical-center bg--eb" style="overflow: hidden">
        <p>grid-width--medium: 730px</p>
        <p>Bodytext container width</p>
        <div class="grid-width--small vertical-center bg--eb2" style="overflow: hidden">
          <p>grid-width--small: 610px</p>
          <p>Widget width</p>
        </div>
      </div>
    </div>
  </div>
</Card>

<h3>HTML class names</h3>

<Prism language="html">
  {`<div class="grid-width--xlarge"></div>
<div class="grid-width--large"></div>
<div class="grid-width--medium"></div>
<div class="grid-width--small"></div>`}
</Prism>

<h3>CSS variable names</h3>

<Prism language="css">
  {`--grid-small: 610px;
--grid-medium: 730px;
--grid-large: 910px;
--grid-xlarge: 930px;`}
</Prism>
