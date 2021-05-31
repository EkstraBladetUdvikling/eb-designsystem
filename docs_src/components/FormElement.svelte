<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { FormElement } from '../../src';

  let source = '';
  let radio = 1;

  sourceType.subscribe((value) => {
    source = value;
  });
</script>

<h1 class="color--eb">Form Element</h1>

{#if source === 'svelte'}
  <Prism language="js">
    {`import { FormElement } from '@ekstra-bladet/designsystem';`}
  </Prism>
{/if}

<h3>Text input</h3>

<FormElement inputtype="text" size="small" label="input size small" />
<FormElement inputtype="text" label="input size medium (standard)" />
<FormElement inputtype="text" size="large" label="input size large" />

{#if source === 'svelte'}
  <Prism language="html">
    {`<FormElement inputtype="text" size="small" label="" />
<FormElement inputtype="text" label="" />
<FormElement inputtype="text" size="large" label="" />`}
  </Prism>
{:else}
  <Prism language="html">
    {`FormElement er ikke blevet opdateret til HTML endnu`}
  </Prism>
{/if}

<h3>Number input</h3>

<FormElement inputtype="number" label="Noget tal indhold her" />

{#if source === 'svelte'}
  <Prism language="html">
    {`<FormElement inputtype="number" label="" />`}
  </Prism>
{:else}
  <Prism language="html">
    {`FormElement er ikke blevet opdateret til HTML endnu`}
  </Prism>
{/if}

<h3>Select</h3>

<FormElement inputtype="select" label="Select">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</FormElement>

{#if source === 'svelte'}
  <Prism language="html">
    {`<FormElement inputtype="select" label="">
  <option value="option1"></option>
  <option value="option2"></option>
</FormElement>`}
  </Prism>
{:else}
  <Prism language="html">
    {`FormElement er ikke blevet opdateret til HTML endnu`}
  </Prism>
{/if}

<h3>Checkbox and radio</h3>

<FormElement inputtype="checkbox" label="Checkox" />
<FormElement inputtype="radio" label="Radio" value={1} />

{#if source === 'svelte'}
  <Prism language="html">
    {`<FormElement inputtype="checkbox" label="" />
<FormElement inputtype="radio" label="" bind:group={group} value={1} />`}
  </Prism>
{:else}
  <Prism language="html">
    {`FormElement er ikke blevet opdateret til HTML endnu`}
  </Prism>
{/if}

<h3>Textarea</h3>

<FormElement inputtype="textarea" label="Textarea" />

{#if source === 'svelte'}
  <Prism language="html">
    {`<FormElement inputtype="textarea" label="" />`}
  </Prism>
{:else}
  <Prism language="html">
    {`FormElement er ikke blevet opdateret til HTML endnu`}
  </Prism>
{/if}
