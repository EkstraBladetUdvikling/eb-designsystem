<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { bluedarkBGClass, greenBGClass, greendarkBGClass } from '@ekstra-bladet/eb-colors';
  import { Badge, Icon } from '../../src';
</script>

<h1 class="color--eb">Badge</h1>

<p>Badges kan benyttes som mærkater eller som indikation af tags. Størrelsen af et badge kan styres vha. font-sizes.</p>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { Badge } from '@ekstra-bladet/designsystem';`}
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
        <td>extension</td>
        <td>'small'</td>
        <td />
        <td>Make a smaller version of the badge</td>
      </tr>
      <tr>
        <td>href</td>
        <td>string</td>
        <td />
        <td>Coverts the Badge into a clickable link</td>
      </tr>
      <tr>
        <td>style</td>
        <td>string</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>type</td>
        <td>'danger' | 'primary' | 'secondary' | 'success'</td>
        <td />
        <td />
      </tr>
    </tbody>
  </table>
{/if}

<h3>Default</h3>

<div class="flex">
  <Badge>Badge</Badge>
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Badge></Badge>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<span class="badge"></span>`}
  </Prism>
{/if}

<h3>Variations</h3>

<div class="flex">
  <Badge className="margin-s" type="primary">Primary</Badge>
  <Badge className="margin-s" type="secondary">Secondary</Badge>
  <Badge className="margin-s" type="success">Success</Badge>
  <Badge className="margin-s" type="danger">Danger</Badge>
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Badge type="primary"></Badge>
<Badge type="secondary"></Badge>
<Badge type="success"></Badge>
<Badge type="danger"></Badge>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<span class="badge" data-type="primary"></span>
<span class="badge" data-type="secondary"></span>
<span class="badge" data-type="success"></span>
<span class="badge" data-type="danger"></span>`}
  </Prism>
{/if}

<h3>Farve muligheder fra eb-colors</h3>

<div class="flex">
  <Badge className="margin-s {bluedarkBGClass}">bluedarkBGClass</Badge>
  <Badge className="margin-s {greenBGClass}">greenBGClass</Badge>
  <Badge className="margin-s {greendarkBGClass}">greendarkBGClass</Badge>
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`import { bluedarkBGClass, greenBGClass, greendarkBGClass } from '@ekstra-bladet/eb-colors';

<Badge className="margin-s {bluedarkBGClass}">bluedarkBGClass</Badge>
<Badge className="margin-s {greenBGClass}">greenBGClass</Badge>
<Badge className="margin-s {greendarkBGClass}">greendarkBGClass</Badge>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<span class="badge bg--bluedark"></span>
<span class="badge bg--green"></span>
<span class="badge bg--greendark"></span>`}
  </Prism>
{/if}

<h3>Advanced examples</h3>

<div class="flex">
  <Badge className="margin-s padding-none padding-s--r card--shadow bg--black fontsize-small">
    <Icon
      name="lightning"
      className="bg--white color--flash border-radius-s padding-s margin-s--r"
      style="margin-left: -1px;"
      width="15"
    />
    UPDATE
  </Badge>
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Badge className="margin-s padding-none padding-s--r card--shadow bg--black fontsize-small">
  <Icon
    name="lightning"
    className="icon-svg bg--white color--flash border-radius-s padding-s margin-s--r"
    style="margin-left: -1px;"
    width="15"/>
  UPDATE
</Badge>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<span class="badge margin-s padding-none padding-s--r card--shadow bg--black fontsize-small">
  <svg viewBox="0 0 10 16"
    className="icon-svg bg--white color--flash border-radius-s padding-s margin-s--r"
    style="margin-left: -1px; width: 15px; height: 15px;"/>
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lightning"></use>
  </svg>
  UPDATE
</span>`}
  </Prism>
{/if}
