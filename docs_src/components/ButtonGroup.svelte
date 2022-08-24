<script lang="ts">
  import Prism from 'svelte-prism';
  import type { Writable } from 'svelte/store';

  import { sourceType } from '../stores';
  import { Button, ButtonGroup } from '../../src';

  let selectedId: Writable<number>;
</script>

<h1 class="color--eb">Button groups</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { Button, ButtonGroup } from '@ekstra-bladet/designsystem';`}
  </Prism>

  <table class="table">
    <thead>
      <tr>
        <th>Prop name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>className</td>
        <td>string</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>type</td>
        <td>'accept' | 'cancel' | 'primary' | 'secondary'</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>color</td>
        <td>EB Background color variable</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>colorHover</td>
        <td>EB Background color variable</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>solid</td>
        <td>boolean</td>
        <td>false</td>
        <td />
      </tr>
      <tr>
        <td>selectedId</td>
        <td>Writable - number</td>
        <td>0 (first button)</td>
        <td>Can be set onMount</td>
      </tr>
    </tbody>
  </table>
{/if}

<h3>Default</h3>
<p>Button-index selected: {$selectedId}</p>

<ButtonGroup className="margin-l--b" bind:selectedId>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<ButtonGroup bind:selectedId>
  <Button></Button>
  <Button></Button>
  <Button></Button>
</ButtonGroup>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<div class="buttongroup">
  <button class="button"></button>
  <button class="button"></button>
  <button class="button"></button>
</div>`}
  </Prism>
{/if}

<h3>Variations</h3>

<ButtonGroup type="primary" className="margin-m--b">
  <Button>Primary</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

<ButtonGroup type="secondary" className="margin-m--b">
  <Button>Secondary</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

<ButtonGroup type="accept" className="margin-m--b">
  <Button>Accept</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

<ButtonGroup type="cancel" className="margin-l--b">
  <Button>Cancel</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<ButtonGroup type="primary">...</ButtonGroup>
<ButtonGroup type="secondary">...</ButtonGroup>
<ButtonGroup type="accept">...</ButtonGroup>
<ButtonGroup type="cancel">...</ButtonGroup>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<div class="buttongroup buttongroup--primary">...</div>
<div class="buttongroup buttongroup--secondary">...</div>
<div class="buttongroup buttongroup--accept">...</div>
<div class="buttongroup buttongroup--cancel">...</div>`}
  </Prism>
{/if}

<h3>Farve muligheder fra eb-colors</h3>

<ButtonGroup color="Bordeaux" className="margin-l--b">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<ButtonGroup color="Bordeaux">...</ButtonGroup>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<div class="buttongroup" style="
  --buttongroup-color: #8a0c36;
  --buttongroup-fgcolor: #fff;
  --buttongroup-color--hover: #8a0c36;
  --buttongroup-fgcolor--hover: #fff;
">...</div>`}
  </Prism>
{/if}

<h3>Solid button group</h3>

<ButtonGroup solid={true} color="Black" colorHover="Red" className="margin-l--b">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<ButtonGroup solid={true} color="Black" colorHover="Red">...</ButtonGroup>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<div class="buttongroup buttongroup--solid" style="
  --buttongroup-color: #000;
  --buttongroup-fgcolor: #fff;
  --buttongroup-color--hover: #bd1118;
  --buttongroup-fgcolor--hover: #fff;
">...</div>`}
  </Prism>
{/if}
