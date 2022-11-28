<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';

  import { Icon } from '../../src';
</script>

<h1 class="color--eb">Buttons</h1>

{#if $sourceType === 'svelte'}
  <p>Only valid as a HTML-standard element</p>
{/if}

<h3>Default</h3>

<button>Button</button>

{#if $sourceType !== 'svelte'}
  <Prism language="html">
    {`<button class="button"></button>`}
  </Prism>
{/if}

<h3>Extension attribute</h3>

<button class="margin-m button button--solid">Solid</button>
<button class="margin-m button button--link">Link</button>
<button class="margin-m button button--icon">
  <span style="font-size: 30px">&times;</span>
</button>

{#if $sourceType !== 'svelte'}
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

<button class="margin-m button button--big">Big</button>
<button class="margin-m button button--small">Small</button>

{#if $sourceType !== 'svelte'}
  <Prism language="html">
    {`<button class="button button--big"></button>
<button class="button button--small"></button>`}
  </Prism>
{/if}

<h3>Variations</h3>

<button class="margin-m button button--primary">Primary</button>
<button class="margin-m button button--secondary">Secondary</button>
<button class="margin-m button button--accept">Accept</button>
<button class="margin-m button button--cancel">Cancel</button>

{#if $sourceType !== 'svelte'}
  <Prism language="html">
    {`<button class="button button--primary"></button>
<button class="button button--secondary"></button>
<button class="button button--accept"></button>
<button class="button button--cancel"></button>`}
  </Prism>
{/if}

<h3>With Icon</h3>

<button class="margin-m button">
  <span>Icon to the right</span>
  <Icon name="angle-right" width="20" />
</button>
<button class="margin-m button">
  <Icon name="angle-left" width="20" />
  <span>Icon to the left</span>
</button>

{#if $sourceType !== 'svelte'}
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
