<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Badge, Card, Icon, Button } from '../../svelte';
  import { iconnames, iconnameshtml } from '../../svelte/components/icon/svgs/iconnames';
  import { graphicnames, graphicnameshtml } from '../../svelte/components/icon/graphics/graphicnames';
  import DrEditionSVGs from '../assets/dredition/DrEditionSVGs.svelte';
  import { colorNames } from '@ekstra-bladet/eb-colors';

  let iconColor = 'black';

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
  Icons are simple and dynamic only made with fill. When using the class <em>icon-svg</em>, fill is set to the css
  variable <em>--icon-fill</em> which defaults to <em>currentColor</em>. This means that the icon will inherit the color
  from the nearest parent where color is defined.
</p>
<p>But by changing the css variable, the color can be handled separately from any set color.</p>
<p>
  Most icons are derived from <a href="https://fontawesome.com/" target="_blank">FontAwesome</a> using only the
  <b>light</b>
  or <b>solid</b> library!
</p>
<div class="flex flex-row flex-justify--center flex-align--center">
  <div class="margin-m--r">
    Change icon color <select bind:value={iconColor}>
      <option>black</option>
      {#each Object.keys(colorNames) as colorName}
        <option>{colorName}</option>
      {/each}
    </select>
  </div>
  <Button className="margin-m--r" type="cancel" on:click={decrement}>
    <Icon name="angle-left" width={18} />
  </Button>
  <p>Size: <input type="number" bind:value={size} style="width: 45px;" />px</p>
  <Button className="margin-m--l" type="cancel" on:click={increment}>
    <Icon name="angle-right" width={18} />
  </Button>
</div>
<div class="flex flex-wrap--wrap" style="--icon-fill: var(--color--{iconColor});">
  {#each iconnameshtml as name, i}
    <Card className="flex-align--center flex-justify--center margin-s padding-m bg--graa6">
      <Icon {name} className="margin-s" width={size} />
      <small>{iconnameshtml[i]}</small>
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
  {#each graphicnameshtml as name, i}
    <Card className="flex-align--center flex-justify--center margin-s padding-m bg--graa6">
      <Icon {name} className="margin-s" width={86} />
      <small>{graphicnameshtml[i]}</small>
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

<h3>* Figcaption pin background</h3>

<p>The "background" of figcaption-pin can be changed through the css variable <em>--ebds-figcaption-bg</em></p>
<div class="flex flex-wrap--wrap">
  <Card className="flex-align--center flex-justify--center margin-s padding-m bg--graa6">
    <Icon name="figcaption-pin" className="margin-s" width={36} />
    <small>figcaption-pin</small>
  </Card>
</div>

<h3>DrEdition</h3>
<p>Animated and static icons used in DrEdition i.e ekstrabladet.dk frontpage cards</p>

<DrEditionSVGs />
