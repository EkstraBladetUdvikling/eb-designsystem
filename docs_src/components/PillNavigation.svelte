<script lang="ts">
  import Prism from 'svelte-prism';
  import { rdmParagraphs } from '../util';
  import { sourceType } from '../stores';
  import { Card, PillNavigation, Pill, PillContent, PillList } from '../../src';

  let content1 = rdmParagraphs();
  let content2 = rdmParagraphs();
  let content3 = rdmParagraphs();
</script>

<h1 class="color--eb">Pill navigation</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { PillNavigation, Pill, PillContent, PillList } from '@ekstra-bladet/designsystem';`}
  </Prism>

  <PillNavigation className="margin-xl--t">
    <PillList>
      <Pill>Pill 1</Pill>
      <Pill>Pill 2</Pill>
      <Pill>Pill 3</Pill>
    </PillList>
    <PillContent>
      <Card className="margin-m--t">
        <h2 slot="header">Content 1</h2>
        <div slot="content" contenteditable="true" bind:innerHTML={content1} />
      </Card>
    </PillContent>
    <PillContent>
      <Card className="margin-m--t">
        <h2 slot="header">Content 2</h2>
        <div slot="content" contenteditable="true" bind:innerHTML={content2} />
      </Card>
    </PillContent>
    <PillContent>
      <Card className="margin-m--t">
        <h2 slot="header">Content 3</h2>
        <div slot="content" contenteditable="true" bind:innerHTML={content3} />
      </Card>
    </PillContent>
  </PillNavigation>

  <Prism language="html">
    {`<PillNavigation>
  <PillList>
    <Pill>Pill 1</Pill>
    <Pill>Pill 2</Pill>
    <Pill>Pill 3</Pill>
  </PillList>
  <PillContent>
    Content 1
  </PillContent>
  <PillContent>
    Content 2
  </PillContent>
  <PillContent>
    Content 3
  </PillContent>
</PillNavigation>`}
  </Prism>
{:else}
  <p>PillNavigation er en ren Svelte component.</p>
{/if}
