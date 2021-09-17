<script lang="ts">
  import Prism from 'svelte-prism';
  import { rdmParagraphs } from '../lipsum';
  import { sourceType } from '../stores';
  import { Card, Tabs, Tab, TabContent, TabList } from '../../src';

  let content1 = rdmParagraphs();
  let content2 = rdmParagraphs();
  let content3 = rdmParagraphs();
</script>

<h1 class="color--eb">Tabs</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { Tabs, Tab, TabContent, TabList } from '@ekstra-bladet/designsystem';`}
  </Prism>

  <h2 class="margin-xl--t margin-m--b">Style: Tabs</h2>

  <Tabs>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2 Long Text Bla Bla</Tab>
      <Tab>Tab 3 Long Text Bla Bla</Tab>
    </TabList>
    <TabContent>
      <Card className="margin-m--t">
        <h2 slot="header">Content 1</h2>
        {@html content1}
      </Card>
    </TabContent>
    <TabContent>
      <Card className="margin-m--t">
        <h2 slot="header">Content 2</h2>
        {@html content2}
      </Card>
    </TabContent>
    <TabContent>
      <Card className="margin-m--t">
        <h2 slot="header">Content 3</h2>
        {@html content3}
      </Card>
    </TabContent>
  </Tabs>

  <Prism language="html">
    {`<Tabs>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>
  <TabContent>
    Content 1
  </TabContent>
  <TabContent>
    Content 2
  </TabContent>
  <TabContent>
    Content 3
  </TabContent>
</Tabs>`}
  </Prism>

  <h2 class="margin-xl--t margin-m--b">Style: Pillnavigation</h2>

  <Tabs>
    <TabList type="pillnavigation">
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabList>
    <TabContent>
      <Card className="margin-m--t">
        <h2 slot="header">Content 1</h2>
        <div slot="content" contenteditable="true" bind:innerHTML={content1} />
      </Card>
    </TabContent>
    <TabContent>
      <Card className="margin-m--t">
        <h2 slot="header">Content 2</h2>
        <div slot="content" contenteditable="true" bind:innerHTML={content2} />
      </Card>
    </TabContent>
    <TabContent>
      <Card className="margin-m--t">
        <h2 slot="header">Content 3</h2>
        <div slot="content" contenteditable="true" bind:innerHTML={content3} />
      </Card>
    </TabContent>
  </Tabs>

  <Prism language="html">
    {`<Tabs>
  <TabList type="pillnavigation">
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>
  <TabContent>
    Content 1
  </TabContent>
  <TabContent>
    Content 2
  </TabContent>
  <TabContent>
    Content 3
  </TabContent>
</Tabs>`}
  </Prism>
{:else}
  <p>Tabs er en ren Svelte component.</p>
{/if}
