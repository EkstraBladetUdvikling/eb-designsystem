<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Button, ButtonGroup } from '../../src';

  let source = '';

  sourceType.subscribe((value) => {
    source = value;
  });
</script>

<h1 class="color--eb">Button groups</h1>

{#if source === 'svelte'}
  <Prism language="js">
    {`import { Button, ButtonGroup } from '@ekstra-bladet/designsystem';`}
  </Prism>
{/if}

<h3>Default</h3>

<ButtonGroup className="margin-l--b">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

{#if source === 'svelte'}
  <Prism language="html">
    {`<ButtonGroup>
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

<ButtonGroup type="primary" className="margin-l--b">
  <Button>primary</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

<ButtonGroup type="secondary" className="margin-l--b">
  <Button>secondary</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

<ButtonGroup type="accept" className="margin-l--b">
  <Button>accept</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

<ButtonGroup type="cancel" className="margin-l--b">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

{#if source === 'svelte'}
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

<ButtonGroup color="Bordeaux">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

{#if source === 'svelte'}
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

<ButtonGroup solid={true} color="Black" colorHover="Red">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>

{#if source === 'svelte'}
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
