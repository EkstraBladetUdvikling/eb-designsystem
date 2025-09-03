<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';

  import { Icon } from '../../src';
</script>

<h1 class="color--eb">Buttons</h1>

{#if $sourceType === 'svelte'}
  <p>Only valid as a HTML-standard element</p>
{:else}
  <h3>Knap redesign</h3>
  <div class="flex flex-align--center padding-l--l margin-m--tb" style="gap: var(--distance-large);">
    <button class="button button--small" data-redesign="primary red">
      Primær rød (small)
    </button>
    <button class="button" data-redesign="primary red">
      Primær rød (standard)
    </button>
    <button class="button button--big" data-redesign="primary red">
      Primær rød (stor)
    </button>
  </div>

  <Prism language="html">
    {`<button class="button" data-redesign="primary red"></button>
<button class="button button--big" data-redesign="primary red"></button>
<button class="button button--small" data-redesign="primary red"></button>`}
  </Prism>

  <div class="flex padding-l--l margin-m--tb">
    <button class="button" data-redesign="primary black">
      Primær sort
    </button>
  </div>

  <div class="flex padding-l--l margin-m--tb">
    <button class="button" data-redesign="secondary transparent">
      Sekundær transparent
    </button>
  </div>

  <div class="flex bg--graa6 padding-l margin-m--tb">
    <button class="button" data-redesign="secondary onlight">
      Sekundær lys
    </button>
  </div>

  <div class="flex bg--graa1 padding-l margin-m--tb">
    <button class="button" data-redesign="secondary ondark">
      Sekundær mørk
    </button>
    <button class="button button--icon" data-redesign="secondary ondark">
      <Icon name="times" width="18" />
    </button>
  </div>

  <Prism language="html">
    {`<button class="button" data-redesign="primary black"></button>
<button class="button" data-redesign="secondary transparent"></button>
<button class="button" data-redesign="secondary onlight"></button>
<button class="button" data-redesign="secondary ondark"></button>
<button class="button button--icon" data-redesign="secondary ondark">
  <Icon name="times" width="18" />
</button>`}
  </Prism>

  <hr class="margin-xxl--tb" />

  <h3>Gammel knap design</h3>
  <div class="flex">
    <button class="button">Button</button>
    <button class="button margin-l--l" disabled>Disabled</button>
  </div>

  <Prism language="html">
    {`<button class="button"></button>`}
  </Prism>

  <h3>Extension attribute</h3>
  <div class="flex">
    <button class="margin-m button button--solid">Solid</button>
    <button class="margin-m button button--solid" disabled>Disabled</button>
  </div>
  <div class="flex">
    <button class="margin-m button button--link">Link</button>
    <button class="margin-m button button--link" disabled>Disabled</button>
  </div>
  <div class="flex">
    <button class="margin-m button button--icon">
      <span style="font-size: 30px">&times;</span>
    </button>
    <button class="margin-m button button--icon" disabled>
      <span style="font-size: 30px">&times;</span>
    </button>
  </div>

  <Prism language="html">
    {`<button class="button button--solid"></button>
<button class="button button--link"></button>
<button class="button button--icon">
  <span style="font-size: 30px;">&times;</span>
</button>`}
  </Prism>

  <h3>Size attribute</h3>
  <p><b>big</b> and <b>small</b> can be combined with the other three extensions</p>

  <button class="margin-m button button--big">Big</button>
  <button class="margin-m button button--small">Small</button>

  <Prism language="html">
    {`<button class="button button--big"></button>
<button class="button button--small"></button>`}
  </Prism>

  <h3>Variations</h3>

  <button class="margin-m button button--primary">Primary</button>
  <button class="margin-m button button--secondary">Secondary</button>
  <button class="margin-m button button--accept">Accept</button>
  <button class="margin-m button button--cancel">Cancel</button>

  <Prism language="html">
    {`<button class="button button--primary"></button>
<button class="button button--secondary"></button>
<button class="button button--accept"></button>
<button class="button button--cancel"></button>`}
  </Prism>

  <h3>With Icon</h3>

  <button class="margin-m button">
    <span>Icon to the right</span>
    <Icon name="angle-right" width="20" />
  </button>
  <button class="margin-m button">
    <Icon name="angle-left" width="20" />
    <span>Icon to the left</span>
  </button>

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

  <h3>Colors</h3>

  <div class="flex margin-m--b">
    <button class="button" style="--button-color: var(--color--eb);">Eb</button>
    <button class="button button--solid margin-m--l" style="--button-color: var(--color--eb);">Eb</button>
  </div>
  <div class="flex margin-m--b">
    <button class="button" style="--button-color: var(--color--blue);">Blue</button>
    <button class="button button--solid margin-m--l" style="--button-color: var(--color--blue);">Blue</button>
  </div>
  <div class="flex margin-m--b">
    <button class="button" style="--button-color: var(--color--underholdning);">Underholdning</button>
    <button class="button button--solid margin-m--l" style="--button-color: var(--color--underholdning);">
      Underholdning
    </button>
  </div>



  <Prism language="html">
    {`<button class="button" style="--button-color: var(--color--eb);"></button>
<button class="button" style="--button-color: var(--color--blue);"></button>
<button class="button" style="--button-color: var(--color--underholdning);"></button>`}
  </Prism>
{/if}
