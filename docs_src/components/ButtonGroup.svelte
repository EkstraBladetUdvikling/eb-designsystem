<script lang="ts">
  import Prism from 'svelte-prism';
  import type { Writable } from 'svelte/store';

  import { sourceType } from '../stores';
</script>

<h1 class="color--eb">Button groups</h1>

<h3>Default</h3>

{#if $sourceType === 'svelte'}
  <p>Only valid as a HTML-standard element</p>
{:else}
  <div class="buttongroup">
    <button class="button" data-selected="true">Button 1</button>
    <button class="button">Button 2</button>
    <button class="button">Button 3</button>
  </div>

  <Prism language="html">
    {`<div class="buttongroup">
  <button class="button" data-selected="true"></button>
  <button class="button"></button>
  <button class="button"></button>
</div>`}
  </Prism>

  <h3>Variations</h3>

  <div class="margin-m--b buttongroup buttongroup--primary">
    <button class="button" data-selected="true">Primary</button>
    <button class="button">Button 2</button>
    <button class="button">Button 3</button>
  </div>

  <div class="margin-m--b buttongroup buttongroup--secondary">
    <button class="button" data-selected="true">Secondary</button>
    <button class="button">Button 2</button>
    <button class="button">Button 3</button>
  </div>

  <div class="margin-m--b buttongroup buttongroup--accept">
    <button class="button" data-selected="true">Accept</button>
    <button class="button">Button 2</button>
    <button class="button">Button 3</button>
  </div>

  <div class="margin-l--b buttongroup buttongroup--cancel">
    <button class="button" data-selected="true">Cancel</button>
    <button class="button">Button 2</button>
    <button class="button">Button 3</button>
  </div>

  <Prism language="html">
    {`<div class="buttongroup buttongroup--primary">...</div>
<div class="buttongroup buttongroup--secondary">...</div>
<div class="buttongroup buttongroup--accept">...</div>
<div class="buttongroup buttongroup--cancel">...</div>`}
  </Prism>

  <h3>Farve muligheder fra eb-colors</h3>

  <div
    class="margin-l--b buttongroup"
    style="
  --buttongroup-color: #8a0c36;
  --buttongroup-fgcolor: #fff;
  --buttongroup-color--hover: #8a0c36;
  --buttongroup-fgcolor--hover: #fff;
"
  >
    <button class="button">Button 1</button>
    <button class="button">Button 2</button>
    <button class="button">Button 3</button>
  </div>

  <Prism language="html">
    {`<div class="buttongroup" style="
  --buttongroup-color: #8a0c36;
  --buttongroup-fgcolor: #fff;
  --buttongroup-color--hover: #8a0c36;
  --buttongroup-fgcolor--hover: #fff;
">...</div>`}
  </Prism>

  <h3>Solid button group</h3>

  <div
    class="buttongroup buttongroup--solid margin-l--b"
    style="
--buttongroup-color: #000;
--buttongroup-fgcolor: #fff;
--buttongroup-color--hover: #FF0000;
--buttongroup-fgcolor--hover: #fff;"
  >
    <button class="button">Button 1</button>
    <button class="button">Button 2</button>
    <button class="button">Button 3</button>
  </div>

  <Prism language="html">
    {`<div class="buttongroup buttongroup--solid" style="
  --buttongroup-color: #000;
  --buttongroup-fgcolor: #fff;
  --buttongroup-color--hover: #FF0000;
  --buttongroup-fgcolor--hover: #fff;
">...</div>`}
  </Prism>
{/if}
