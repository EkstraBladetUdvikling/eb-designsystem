<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Badge, Card, Icon } from '../../src';
  import { iconnames } from '../../src/components/icon/svgs/iconnames';
  import { emojinames } from '../../src/components/icon/emojis/emojinames';

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

<h3>Piktogrammer</h3>
<p>Piktogrammer er simple ikoner, der kun er udført med fill ligesom <a href="https://fontawesome.com/" target="_blank">Font Awesome</a> ikoner. Fill på disse ikoner er sat til currentColor, så ikonerne kan modtage ønsket farve.</p>
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
{:else}
  <Prism language="html">
    {`<svg viewBox="0 0 50 50">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_name"></use>
</svg>`}
  </Prism>
{/if}

<h3>Emojis</h3>
<p>Emojis er grafikker der har flere lag pålagt med statiske farver - f.eks. vejrikoner eller EB logo. Emojis må gerne indeholde statiske farver på stroke og fill</p>

<div class="flex flex-wrap--wrap">
  {#each emojinames as name}
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

<h3><a href="https://fontawesome.com/" target="_blank">Font Awesome</a> ikoner</h3>
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
