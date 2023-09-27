<script lang="ts">
  import { colorNames } from '@ekstra-bladet/eb-colors';
  import Prism from 'svelte-prism';

  import DrEditionSVGs from '../assets/dredition/DrEditionSVGs.svelte';
  import { graphicnameshtml } from '../../src/components/icon/graphics/graphicnames';
  import { iconnameshtml } from '../../src/components/icon/svgs/iconnames';

  import { Icon } from '../../src';
  import { sourceType } from '../stores';

  let iconColor = 'black';

  let size = 24;

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
        <td>name <span class="badge badge--small" data-type="primary">required</span></td>
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
  Most icons are derived from <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">FontAwesome</a> using
  only the
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
  <button class="button button--cancel margin-m--r" on:click={decrement}>
    <Icon name="angle-left" width={18} />
  </button>
  <p>Size: <input type="number" bind:value={size} style="width: 45px;" />px</p>
  <button class="button button--cancel margin-m--l" on:click={increment}>
    <Icon name="angle-right" width={18} />
  </button>
</div>
<div class="flex flex-wrap--wrap" style="--icon-fill: var(--color--{iconColor});">
  {#each iconnameshtml as name, i}
    <div class="card flex-align--center flex-justify--center margin-s padding-m bg--graa6">
      <Icon {name} className="margin-s" width={size} />
      <small>{iconnameshtml[i]}</small>
    </div>
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

<h3>Filter extension</h3>
<p>A (small) subset of icons will respond to the CSS variable --icon-filter, can be used to create a drop-shadow</p>

<div class="dropit-example flex">
  <div class="flex">
    <div class="dropit">
      <Icon name="share" />
    </div>
    <Icon name="share" />
  </div>

  <div class="flex">
    <div class="dropit">
      <Icon name="volume" />
    </div>
    <Icon name="volume" />
  </div>

  <div class="flex">
    <div class="dropit">
      <Icon name="volume-off" />
    </div>
    <Icon name="volume-off" />
  </div>
</div>

<h3>Graphics</h3>
<p>Graphics are capable of containing more layers i.e static colors on stroke and fill.</p>

<div class="flex flex-wrap--wrap">
  {#each graphicnameshtml as name, i}
    <div class="card flex-align--center flex-justify--center margin-s padding-m bg--graa6">
      <Icon {name} className="margin-s" width={86} />
      <small>{graphicnameshtml[i]}</small>
    </div>
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
  <div class="card flex-align--center flex-justify--center margin-s padding-m bg--graa6">
    <Icon name="figcaption-pin" className="margin-s" width={36} />
    <small>figcaption-pin</small>
  </div>
</div>

<h3>Frontpage icons (DrEdition)</h3>
<p>Icons used in DrEdition Aptoma i.e ekstrabladet.dk frontpage cards</p>

<DrEditionSVGs />

<style>
  .dropit-example {
    --icon-fill: red;
    --icon-size: 40px;
    gap: 20px;
  }

  .dropit {
    --icon-filter: drop-shadow(0px 20px 4px black);
  }
</style>
