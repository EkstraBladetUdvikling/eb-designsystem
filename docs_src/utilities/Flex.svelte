<script lang="ts">
  import Prism from 'svelte-prism';
  import { Card } from '../../src';
</script>

<h1 class="color--eb">Flex</h1>

<h3>Flex container</h3>

<Prism language="html">
  {`<div class="flex"></div>`}
</Prism>

<h3>Justify content</h3>
<p>Justify content anvendes til <i>horizontal</i> placering af child elementer.</p>

<Card className="bg--graa7">
  <strong class="margin-m">flex flex-justify--start</strong>
  <div class="flex flex-justify--start bg--eb">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
  <strong class="margin-m margin-l--t">flex flex-justify--end</strong>
  <div class="flex flex-justify--end bg--eb">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
  <strong class="margin-m margin-l--t">flex flex-justify--center</strong>
  <div class="flex flex-justify--center bg--eb">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
  <strong class="margin-m margin-l--t">flex flex-justify--around</strong>
  <div class="flex flex-justify--around bg--eb">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
  <strong class="margin-m margin-l--t">flex flex-justify--between</strong>
  <div class="flex flex-justify--between bg--eb">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
</Card>

<Prism language="html">
  {`<div class="flex flex-justify--start"></div>
<div class="flex flex-justify--end"></div>
<div class="flex flex-justify--center"></div>
<div class="flex flex-justify--around"></div>
<div class="flex flex-justify--between"></div>`}
</Prism>

<h3>Align items</h3>
<p>Align items anvendes til <i>veritcal</i> placering af child elementer.</p>

<Card className="bg--graa7">
  <strong class="margin-m">flex flex-align--start</strong>
  <div class="flex flex-align--start bg--eb" style="height: 100px">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
  <strong class="margin-m margin-l--t">flex flex-align--end</strong>
  <div class="flex flex-align--end bg--eb" style="height: 100px">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
  <strong class="margin-m margin-l--t">flex flex-align--center</strong>
  <div class="flex flex-align--center bg--eb" style="height: 100px">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
  <strong class="margin-m margin-l--t">flex flex-align--stretch</strong>
  <div class="flex flex-align--stretch bg--eb" style="height: 100px">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
</Card>

<Prism language="html">
  {`<div class="flex flex-align--start"></div>
<div class="flex flex-align--end"></div>
<div class="flex flex-align--center"></div>
<div class="flex flex-align--stretch"></div>`}
</Prism>

<h3>Flex center</h3>
<p>Flex center centrere alle child elementer både <i>horizontalt</i> og <i>vertical</i>.</p>

<Card className="bg--graa7">
  <div class="flex flex--center bg--eb" style="height: 100px">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
</Card>

<Prism language="html">
  {`<div class="flex flex--center"></div>`}
</Prism>

<h3>Directions</h3>
<p>Directions bestemmer rækkefølgen for visning af child elementer.</p>

<Card className="bg--graa7">
  <strong class="margin-m">flex flex--column</strong>
  <div class="flex flex--column">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
  <strong class="margin-m margin-l--t">flex flex--column-reverse</strong>
  <div class="flex flex--column-reverse">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
  <strong class="margin-m margin-l--t">flex</strong>
  <div class="flex bg--eb">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
  <strong class="margin-m margin-l--t">flex flex-row--reverse</strong>
  <div class="flex flex-row--reverse bg--eb">
    <div class="bg--graa4 padding-l">Flex item 1</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
</Card>

<Prism language="html">
  {`<div class="flex flex--column"></div>
<div class="flex flex--column--reverse"></div>
<div class="flex"></div>
<div class="flex flex-row--reverse"></div>`}
</Prism>

<h3>Wrap</h3>
<p>
  Flex wrap sørger for at alle child elementer beholder deres størrelse og istedet wrapper elementerne på multiple lines
  istedet for one-line.
</p>

<Card className="bg--graa7">
  <strong class="margin-m">flex</strong>
  <div class="flex">
    <div class="bg--graa4 width-1of3 padding-l">Flex item 1</div>
    <div class="bg--graa3 width-1of3 padding-l">Flex item 2</div>
    <div class="bg--graa2 width-1of3 padding-l">Flex item 3</div>
    <div class="bg--graa1 width-1of3 padding-l">Flex item 4</div>
  </div>
  <strong class="margin-m margin-l--t">flex flex-wrap--wrap</strong>
  <div class="flex flex-wrap--wrap bg--eb">
    <div class="bg--graa4 width-1of3 padding-l">Flex item 1</div>
    <div class="bg--graa3 width-1of3 padding-l">Flex item 2</div>
    <div class="bg--graa2 width-1of3 padding-l">Flex item 3</div>
    <div class="bg--graa1 width-1of3 padding-l">Flex item 4</div>
  </div>
</Card>

<Prism language="html">
  {`<div class="flex"></div>
<div class="flex flex-wrap--wrap"></div>`}
</Prism>

<h2>Flex items</h2>

<h3>Align self</h3>

<Card className="bg--graa7">
  <div class="flex bg--eb" style="height: 100px">
    <div class="flex-item--start bg--graa4 width-1of3 padding-l">flex-item--start</div>
    <div class="flex-item--end bg--graa2 width-1of3 padding-l">flex-item--end</div>
    <div class="flex-item--center bg--graa3 width-1of3 padding-l">flex-item--center</div>
    <div class="flex-item--stretch bg--graa1 width-1of3 padding-l">flex-item--stretch</div>
  </div>
</Card>

<Prism language="html">
  {`<div class="flex">
  <div class="flex-item--start"></div>
  <div class="flex-item--end"></div>
  <div class="flex-item--center"></div>
  <div class="flex-item--stretch"></div>
</div>`}
</Prism>

<h3>Grow and shrik</h3>
<p><code>flex-item--grow</code> sørger for at child element udfylder den tilbageværende plads i flex containeren.</p>
<p>
  <code>flex-item--noshrink</code> sørger for at et child element altid vil have den samme størrelse også på scalering.
</p>

<Card className="bg--graa7">
  <strong class="margin-m margin-l--t">Grow</strong>
  <div class="flex bg--eb">
    <div class="flex-item--grow bg--graa4 padding-l">flex-item--grow</div>
    <div class="bg--graa3 padding-l">Flex item 2</div>
    <div class="bg--graa2 padding-l">Flex item 3</div>
  </div>
  <strong class="margin-m margin-l--t">No shrink</strong>
  <div class="flex bg--eb">
    <div class="flex-item--noshrink width-2of3 bg--graa4 padding-l">flex-item--noshrink width-2of3</div>
    <div class="bg--graa3 width-1of3 padding-l">width-1of3</div>
    <div class="bg--graa2 width-1of3 padding-l">width-1of3</div>
  </div>
</Card>

<Prism language="html">
  {`<div class="flex">
  <div class="flex-item--grow"></div>
  <div class="flex-item--noshrink"></div>
</div>`}
</Prism>
