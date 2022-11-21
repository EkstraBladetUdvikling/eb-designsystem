<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';

  import { Icon } from '../../src';
</script>

<h1 class="color--eb">Badge</h1>

{#if $sourceType === 'svelte'}
  <p>Only valid as a HTML-standard element</p>
{:else}
  <p>Badges are used as tags. The size can be set through font-size.</p>

  <h3>Default</h3>

  <div class="flex">
    <span class="badge">Badge</span>
  </div>

  <Prism language="html">
    {`<span class="badge"></span>`}
  </Prism>

  <h3>Variations</h3>

  <div class="flex">
    <span class="badge margin-s" data-type="primary">Primary</span>
    <span class="badge margin-s" data-type="secondary">Secondary</span>
    <span class="badge margin-s" data-type="success">Success</span>
    <span class="badge margin-s" data-type="danger">Danger</span>
  </div>

  <Prism language="html">
    {`<span class="badge" data-type="primary"></span>
<span class="badge" data-type="secondary"></span>
<span class="badge" data-type="success"></span>
<span class="badge" data-type="danger"></span>`}
  </Prism>

  <h3>Color examples from eb-colors</h3>

  <div class="flex">
    <span class="badge bg--bluedark margin-s">bg-bluedark</span>
    <span class="badge bg--green margin-s">bg-green</span>
    <span class="badge bg--greendark margin-s">bg-greendark</span>
  </div>

  <Prism language="html">
    {`<span class="badge bg--bluedark"></span>
<span class="badge bg--green"></span>
<span class="badge bg--greendark"></span>`}
  </Prism>

  <h3>Advanced examples</h3>

  <div class="flex">
    <span class="badge margin-s padding-none padding-s--r card--shadow bg--black fontsize-small">
      <Icon
        name="lightning"
        className="bg--white color--flash border-radius-s padding-s margin-s--r"
        style="margin-left: -1px;"
        width="15"
      />
      UPDATE
    </span>
  </div>

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
