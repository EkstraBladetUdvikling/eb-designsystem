<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Badge, Card, Icon } from '../../dist';
  import { iconnames } from '../../dist/components/icon/svgs/iconnames';
  import { graphicnames } from '../../dist/components/icon/graphics/graphicnames';
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
        <td>Used to select icon if type is set to 'fa'</td>
      </tr>
      <tr>
        <td>name <Badge type="primary" extension="small">required</Badge></td>
        <td>IconTypes</td>
        <td />
        <td>Only names listed beneath are valid</td>
      </tr>
      <tr>
        <td>flipped</td>
        <td>boolean</td>
        <td>false</td>
        <td>Flip the icon horizontally</td>
      </tr>
      <tr>
        <td>type</td>
        <td>'svg' | 'fa'</td>
        <td>svg</td>
        <td>Use EB svg icons or FontAwesome icons</td>
      </tr>
      <tr>
        <td>width</td>
        <td>number</td>
        <td>36</td>
        <td>The widthof the icon in pixels. Only on 'svg' mode</td>
      </tr>
      <tr>
        <td>style</td>
        <td>string</td>
        <td />
        <td>Custom styling. Only on 'svg' mode</td>
      </tr>
    </tbody>
  </table>
{/if}

<h3>Icons</h3>
<p>
  Icons are simple and dynamic only made with fill. Fill has the value currentColor and makes it possible to add the
  desired color to the icon.
</p>
<div class="flex flex-wrap--wrap">
  {#each iconnames as name}
    <Card className="flex-align--center flex-justify--center margin-s padding-m">
      <Icon {name} className="margin-s" style="width: 36px; height: 36px;" />
      <small>{name}</small>
    </Card>
  {/each}
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Icon name="icon_name" />`}
  </Prism>

  <div class="flex flex-wrap--wrap">
    <Card className="flex-align--center flex-justify--center margin-s padding-m">
      <Icon name="lightning" gradient="true" className="margin-s" style="width: 36px; height: 36px;" />
      <small>lightning with gradient</small>
    </Card>
    <Card className="flex-align--center flex-justify--center margin-s padding-m">
      <Icon name="tagsolid" gradient="true" className="margin-s" style="width: 36px; height: 36px;" />
      <small>tagsolid with gradient</small>
    </Card>
  </div>

  <Prism language="html">
    {`<Icon name="icon_name" gradient={true} />`}
  </Prism>
{:else}
  <Prism language="html">
    {`<svg viewBox="0 0 50 50">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_name"></use>
</svg>`}
  </Prism>
{/if}

<h3>Graphics</h3>
<p>Graphics are capable of containing more layers i.e static colors on stroke and fill.</p>

<div class="flex flex-wrap--wrap">
  {#each graphicnames as name}
    <Card className="flex-align--center flex-justify--center margin-s padding-m">
      <Icon {name} className="margin-s" style="width: 36px; height: 36px;" />
      <small>{name}</small>
    </Card>
  {/each}
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Icon name="icon_name" />`}
  </Prism>
{:else}
  <Prism language="html">
    {`<svg viewBox="0 0 50 50">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_name"></use>
</svg>`}
  </Prism>
{/if}

<h3><a href="https://fontawesome.com/" target="_blank">Font Awesome</a> icons</h3>
<Icon type="fa" className="fas fa-snowplow" />

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Icon type="fa" className="fas fa-snowplow" />`}
  </Prism>
{:else}
  <Prism language="html">
    {`<i class="fas fa-snowplow"></i>`}
  </Prism>
{/if}
