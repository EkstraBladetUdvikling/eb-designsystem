<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Badge, Card, Icon, Button } from '../../dist';
  import { iconnames, iconnameshtml } from '../../dist/components/icon/svgs/iconnames';
  import { graphicnames, graphicnameshtml } from '../../dist/components/icon/graphics/graphicnames';

  let size = 14;

  const decrement = () => {
    return --size;
  };

  const increment = () => {
    return ++size;
  };
</script>

<h1 class="color--eb">Icon library</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { Icon } from '@ekstra-bladet/designsystem';`}
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
        <td>Custom class names</td>
      </tr>
      <tr>
        <td>name <Badge type="primary" extension="small">required</Badge></td>
        <td>IconTypes</td>
        <td />
        <td>Only names listed beneath are valid</td>
      </tr>
      <tr>
        <td>type</td>
        <td>'svg'</td>
        <td>svg</td>
        <td>Use EB svg icons</td>
      </tr>
      <tr>
        <td>width</td>
        <td>number</td>
        <td>36</td>
        <td>The width of the icon in pixels</td>
      </tr>
      <tr>
        <td>style</td>
        <td>string</td>
        <td />
        <td>Custom styling</td>
      </tr>
    </tbody>
  </table>
{/if}

<h3>Icons</h3>
<p>
  Icons are simple and dynamic only made with fill. Fill has the value currentColor and makes it possible to add the
  desired color to the icon.
</p>
<p>
  Most icons are derived from <a href="https://fontawesome.com/" target="_blank">FontAwesome</a> using only the
  <b>light</b>
  or <b>solid</b> library!
</p>
<div class="flex flex-row flex-justify--center flex-align--center">
  <Button className="margin-m--r" type="cancel" on:click={decrement}>
    <Icon name="angleleft" width={18} />
  </Button>
  <p>Size: {size}px</p>
  <Button className="margin-m--l" type="cancel" on:click={increment}>
    <Icon name="angleright" width={18} />
  </Button>
</div>
<div class="flex flex-wrap--wrap">
  {#each iconnames as name, i}
    <Card className="flex-align--center flex-justify--center margin-s padding-m">
      <Icon {name} className="margin-s" style="width: {size}px; height: {size}px;" />
      {#if $sourceType === 'svelte'}
        <small>{name}</small>
      {:else}
        <small>{iconnameshtml[i]}</small>
      {/if}
    </Card>
  {/each}
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Icon name="iconname" />`}
  </Prism>
{:else}
  <Prism language="html">
    {`<svg class="icon-svg" viewBox="0 0 50 50">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-name"></use>
</svg>`}
  </Prism>
{/if}

<h3>Graphics</h3>
<p>Graphics are capable of containing more layers i.e static colors on stroke and fill.</p>

<div class="flex flex-wrap--wrap">
  {#each graphicnames as name, i}
    <Card className="flex-align--center flex-justify--center margin-s padding-m">
      <Icon {name} className="margin-s" style="width: 36px; height: 36px;" />
      {#if $sourceType === 'svelte'}
        <small>{name}</small>
      {:else}
        <small>{graphicnameshtml[i]}</small>
      {/if}
    </Card>
  {/each}
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Icon name="iconname" />`}
  </Prism>
{:else}
  <Prism language="html">
    {`<svg class="icon-svg" viewBox="0 0 50 50">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-name"></use>
</svg>`}
  </Prism>
{/if}
