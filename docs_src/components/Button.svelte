<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Icon } from '../../src';
</script>

<h1 class="color--eb">Buttons</h1>

{#if $sourceType === 'svelte'}
  <p>Only valid as a HTML-standard element</p>
{:else}
  <!-- Sizes -->
  <h3>Sizes</h3>
  <p class="margin-xs--b">Small / default / large using <code>button--sm</code> and <code>button--lg</code>.</p>
  <div class="margin-xxl--tb">
    <div class="flex flex-align--center padding-l--l margin-s--tb" style="gap: 10px;">
      <button class="button button--primary button--sm">Primary small</button>
      <button class="button button--primary">Primary default</button>
      <button class="button button--primary button--lg">Primary large</button>
    </div>

    <Prism language="html">
      {`<button class="button button--primary button--sm">Small</button>
<button class="button button--primary">Default</button>
<button class="button button--primary button--lg">Large</button>`}
    </Prism>
  </div>

  <!-- Variants -->
  <h3>Variants</h3>
  <p class="margin-xs--b">Primary + brand; Secondary on light/dark; Transparent (light/dark); Link; Status.</p>
  <div class="margin-xxl--tb">
    <div class="flex margin-m--tb" style="gap: 10px;">
      <button class="button button--primary">Primary</button>
      <button class="button button--primary--brand">Primary (brand)</button>
      <button class="button button--secondary--onlight">Secondary on light</button>

      <div class="flex padding-s" style="gap: 10px; background:#000; border-radius:9999px;">
        <button class="button button--secondary--ondark">Secondary on dark</button>
        <button class="button button--transparent--ondark">Transparent on dark</button>
      </div>

      <button class="button button--transparent--onlight">Transparent</button>
      <button class="button button--link">Link</button>
      <button class="button button--danger">Danger</button>
      <button class="button button--success">Success</button>
    </div>

    <Prism language="html">
      {`<button class="button button--primary">Primary</button>
<button class="button button--primary--brand">Primary (brand)</button>
<button class="button button--secondary--onlight">Secondary on light</button>
<button class="button button--secondary--ondark">Secondary on dark</button>
<button class="button button--transparent--ondark">Transparent on dark</button>
<button class="button button--transparent--onlight">Transparent</button>
<button class="button button--link">Link</button>
<button class="button button--danger">Danger</button>
<button class="button button--success">Success</button>`}
    </Prism>
  </div>

  <!-- Disabled -->
  <h3>Disabled</h3>
  <p class="margin-xs--b">Single disabled treatment across variants.</p>
  <div class="margin-xxl--tb">
    <div class="flex margin-m--tb" style="gap: 10px;">
      <button class="button button--primary" disabled>Disabled primary</button>
      <button class="button button--primary--brand" disabled>Disabled brand</button>
      <button class="button button--secondary--onlight" disabled>Disabled secondary</button>
      <button class="button button--transparent--onlight" disabled>Disabled transparent</button>
      <button class="button button--link" disabled>Disabled link</button>
    </div>

    <Prism language="html">
      {`<button class="button button--primary" disabled>…</button>
<button class="button button--primary--brand" disabled>…</button>
<button class="button button--secondary--onlight" disabled>…</button>
<button class="button button--transparent--onlight" disabled>…</button>
<button class="button button--link" disabled>…</button>`}
    </Prism>
  </div>

  <!-- Icons -->
  <h3>Icons</h3>
  <p class="margin-xs--b">Icon left/right via markup order. Icon-only: <code>button--icon-only</code></p>
  <div class="margin-xxl--tb">
    <div class="flex margin-m--tb" style="gap: 10px;">
      <button class="button button--primary">
        <Icon name="angle-left" className="button__icon" />
        <span>Icon left</span>
      </button>
      <button class="button button--primary">
        <span>Icon right</span>
        <Icon name="angle-right" className="button__icon" />
      </button>
      <button class="button button--primary button--icon-only" aria-label="Close">
        <Icon name="times" className="button__icon" />
      </button>
    </div>

    <Prism language="html">
      {`<button class="button button--primary">
  <svg class="button__icon">…</svg>
  <span>Icon left</span>
</button>

<button class="button button--primary">
  <span>Icon right</span>
  <svg class="button__icon">…</svg>
</button>

<button class="button button--primary button--icon-only" aria-label="Close">
  <svg class="button__icon">…</svg>
</button>
`}
    </Prism>
  </div>
{/if}
