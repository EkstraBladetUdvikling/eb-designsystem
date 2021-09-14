<script lang="ts">
  import Prism from 'svelte-prism';
  import { Card } from '../../src';
</script>

<h1 class="color--eb">Fonts</h1>

<h3>Font family</h3>

<Card className="bg--graa7 padding-l--rl">
  <div class="ff-primary margin-l--tb">
    <strong>.ff-primary:</strong>
    <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ææ Øø Åå 1234567890</p>
  </div>
  <div class="ff-secondary">
    <strong>.ff-secondary:</strong>
    <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ææ Øø Åå 1234567890</p>
  </div>
</Card>

<Prism language="html">
  {`<div class="ff-primary"></div>
<div class="ff-secondary"></div>`}
</Prism>

<h3>Font-weight</h3>

<Card className="bg--graa7 padding-l--rl">
  <p class="fontweight-normal">fontweight-normal</p>
  <p class="fontweight-bold">fontweight-bold</p>
  <p class="fontweight-bolder">fontweight-bolder</p>
</Card>

<Prism language="html">
  {`<p class="fontweight-normal"></p>
<p class="fontweight-bold"></p>
<p class="fontweight-bolder"></p>`}
</Prism>

<h3>Font-size</h3>

<p>Font-size er sat i rem for at understøtte brugerens font-size valg i browseren.</p>
<p>Rem værdien er udregnet i forhold til en basis font-size på 16px, hvilket er browser-standarden</p>
<p>Der er både en <u>larger</u> og en <u>smaller</u> mulighed, der begge er relative til parent fontsize</p>

<Card className="bg--graa7 padding-l">
  <div class="fontsize-xxsmall padding-m--b">
    fontsize-xxsmall = .625rem ~ 10px;
    <div class="fontsize-smaller">fontsize-smaller</div>
    <div class="fontsize-larger">fontsize-larger</div>
  </div>
  <div class="fontsize-xsmall padding-m--tb">
    fontsize-xsmall = .75rem ~ 12px;
    <div class="fontsize-smaller">fontsize-smaller</div>
    <div class="fontsize-larger">fontsize-larger</div>
  </div>
  <div class="fontsize-small padding-m--tb">
    fontsize-small = .875rem ~ 14px;
    <div class="fontsize-smaller">fontsize-smaller</div>
    <div class="fontsize-larger">fontsize-larger</div>
  </div>
  <div class="fontsize-medium padding-m--tb">
    fontsize-medium = 1rem ~ 16px;
    <div class="fontsize-smaller">fontsize-smaller</div>
    <div class="fontsize-larger">fontsize-larger</div>
  </div>
  <div class="fontsize-large padding-m--tb">
    fontsize-large = 1.125rem ~ 18px;
    <div class="fontsize-smaller">fontsize-smaller</div>
    <div class="fontsize-larger">fontsize-larger</div>
  </div>
  <div class="fontsize-xlarge padding-m--tb">
    fontsize-xlarge = 1.25rem ~ 20px;
    <div class="fontsize-smaller">fontsize-smaller</div>
    <div class="fontsize-larger">fontsize-larger</div>
  </div>
  <div class="fontsize-xxlarge padding-m--tb">
    fontsize-xxlarge = 1.875rem ~ 30px;
    <div class="fontsize-smaller">fontsize-smaller</div>
    <div class="fontsize-larger">fontsize-larger</div>
  </div>
  <div class="fontsize-xxxlarge padding-m--tb">
    fontsize-xxxlarge = 2.25rem ~ 36px;
    <div class="fontsize-smaller">fontsize-smaller</div>
    <div class="fontsize-larger">fontsize-larger</div>
  </div>
  <div class="fontsize-xxxxlarge padding-m--t">
    fontsize-xxxxlarge = 3.125rem ~ 50px;
    <div class="fontsize-smaller">fontsize-smaller</div>
    <div class="fontsize-larger">fontsize-larger</div>
  </div>
</Card>

<Prism language="html">
  {`<div class="fontsize-xxsmall"></div>
<div class="fontsize-xsmall"></div>
<div class="fontsize-small"></div>
<div class="fontsize-medium"></div>
<div class="fontsize-large"></div>
<div class="fontsize-xlarge"></div>
<div class="fontsize-xxlarge"></div>
<div class="fontsize-xxxlarge"></div>
<div class="fontsize-xxxxlarge"></div>

<div class="fontsize-smaller"></div>
<div class="fontsize-larger"></div>`}
</Prism>

<h3>Headers and font aliases</h3>

<Card className="bg--graa7 padding-l--rl padding-l--t">
  <h1>h1</h1>
  <h2>h2</h2>
  <h3>h3</h3>
  <h4>h4</h4>
  <h5>h5</h5>
  <h6>h6</h6>

  <p class="fs-ads">fs-ads</p>
  <p class="fs-bodytext">fs-bodytext</p>
  <p class="fs-caption">fs-caption</p>
  <p class="fs-quote">fs-quote</p>
  <p class="fs-showmore">fs-showmore</p>
  <p class="fs-subtitle">fs-subtitle</p>
  <p class="fs-timestamp">fs-timestamp</p>
  <p class="fs-title">fs-title</p>
</Card>
