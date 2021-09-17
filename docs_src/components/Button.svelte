<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Button, Icon } from '../../src';
</script>

<h1 class="color--eb">Buttons</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { Button } from '@ekstra-bladet/designsystem';`}
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
        <td>disabled</td>
        <td>boolean</td>
        <td>false</td>
        <td />
      </tr>
      <tr>
        <td>extension</td>
        <td>'icon' | 'link' | 'solid' | 'icon link' | 'icon solid'</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>href</td>
        <td>string</td>
        <td />
        <td>Coverts the Button into a clickable link</td>
      </tr>
      <tr>
        <td>size</td>
        <td>'big' | 'small'</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>type</td>
        <td>'accept' | 'cancel' | 'primary' | 'secondary'</td>
        <td />
        <td />
      </tr>
    </tbody>
  </table>
{/if}

<h3>Default</h3>

<Button>Button</Button>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Button></Button>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<button class="button"></button>`}
  </Prism>
{/if}

<h3>Extension attribute</h3>

<Button className="margin-m" extension="solid">Solid</Button>
<Button className="margin-m" extension="link">Link</Button>
<Button className="margin-m" extension="icon">
  <span style="font-size: 30px">&times;</span>
</Button>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Button extension="solid"></Button>
<Button extension="link"></Button>
<Button extension="icon">
  <span style="font-size: 30px">&times;</span>
</Button>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<button class="button button--solid"></button>
<button class="button button--link"></button>
<button class="button button--icon">
  <span style="font-size: 30px;">&times;</span>
</button>`}
  </Prism>
{/if}

<h3>Size attribute</h3>
<p><b>big</b> and <b>small</b> can be combined with the other three extensions</p>

<Button className="margin-m" size="big">Big</Button>
<Button className="margin-m" size="small">Small</Button>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Button size="big"></Button>
<Button size="small"></Button>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<button class="button button--big"></button>
<button class="button button--small"></button>`}
  </Prism>
{/if}

<h3>Variations</h3>

<Button className="margin-m" type="primary">Primary</Button>
<Button className="margin-m" type="secondary">Secondary</Button>
<Button className="margin-m" type="accept">Accept</Button>
<Button className="margin-m" type="cancel">Cancel</Button>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Button type="primary"></Button>
<Button type="secondary"></Button>
<Button type="accept"></Button>
<Button type="cancel"></Button>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<button class="button button--primary"></button>
<button class="button button--secondary"></button>
<button class="button button--accept"></button>
<button class="button button--cancel"></button>`}
  </Prism>
{/if}

<h3>With Icon</h3>

<Button className="margin-m">
  <span>Icon to the right</span>
  <Icon className="icon" name="angleright" width="20" />
</Button>
<Button className="margin-m">
  <Icon className="icon" name="angleleft" width="20" />
  <span>Icon to the left</span>
</Button>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Button>
  <span></span>
  <Icon className="icon" name="angleright" width="20" />
</Button>
<Button>
  <Icon className="icon" name="angleleft" width="20" />
  <span></span>
</Button>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<button class="button">
  <span></span>
  <svg viewBox="0 0 50 50">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#angle_right"></use>
  </svg>
</button>
<button class="button">
  <svg viewBox="0 0 50 50">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#angle_left"></use>
  </svg>
  <span></span>
</button>`}
  </Prism>
{/if}
