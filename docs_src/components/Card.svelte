<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Card } from '../../src';
</script>

<h1 class="color--eb">Card</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { Card } from '@ekstra-bladet/designsystem';`}
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
        <td>Card specific classes: card--small-media & card--small-media--reverse</td>
      </tr>
      <tr>
        <td>url</td>
        <td>string</td>
        <td />
        <td>Converts the Card into a clickable link</td>
      </tr>
      <tr>
        <td>style</td>
        <td>string</td>
        <td />
        <td /></tr
      >
      <tr>
        <td>theme</td>
        <td>'darkmode' | 'lightmode'</td>
        <td />
        <td>See <a href="/#/utilities/datatheme">Data Theme</a> for doc</td>
      </tr>
      <tr>
        <th colspan="4">Intersection observer</th>
      </tr>
      <tr>
        <td>intersection</td>
        <td>boolean</td>
        <td>false</td>
        <td>Enables IntersectionObserver <em>(articleCardInview)</em></td>
      </tr>
      <tr>
        <td>intersectionRoot</td>
        <td>string | null</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>intersectionThreshold</td>
        <td>number</td>
        <td>0.5</td>
        <td />
      </tr>
      <tr>
        <td>intersectionData</td>
        <td>any</td>
        <td>&#123;&#125;</td>
        <td>The data send via the CustomEvent detail property</td>
      </tr>
    </tbody>
  </table>
{/if}

<h3>Card slots</h3>

<Card className="margin-l--b">
  <div slot="header">Header</div>
  <div slot="media">
    <img src="https://loremflickr.com/1280/400/cat" alt="" />
  </div>
  <div slot="content">Content</div>
  <div slot="footer">Footer</div>
</Card>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Card>
  <div slot="header"></div>
  <div slot="media">
    <img src="" alt="" />
  </div>
  <div slot="content"></div>
  <div slot="footer"></div>
</Card>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<div class="card">
  <div class="card-header"></div>
  <div class="card-media">
    <img src="" alt="">
  </div>
  <div class="card-content"></div>
  <div class="card-footer"></div>
</div>`}
  </Prism>
{/if}

<h3>Small media card</h3>

<Card className="card--small-media margin-l--b">
  <div slot="media">
    <img src="https://loremflickr.com/250/120/dog" alt="" />
  </div>
  <div slot="content">Content</div>
</Card>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Card className="card--small-media">
  <div slot="media">
    <img src="" alt="" />
  </div>
  <div slot="content"></div>
</Card>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<div class="card card--small-media">
  <div class="card-media">
    <img src="" alt="" />
  </div>
  <div class="card-content"></div>
</div>`}
  </Prism>
{/if}
