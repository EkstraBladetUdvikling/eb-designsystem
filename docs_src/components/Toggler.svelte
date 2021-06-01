<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Icon, Toggler } from '../../src';

  let source = '';

  sourceType.subscribe((value) => {
    source = value;
  });
</script>

<h1 class="color--eb">Toggler</h1>

{#if source === 'svelte'}
  <Prism language="js">
    {`import { Toggler } from '@ekstra-bladet/designsystem';`}
  </Prism>
{/if}

<h3>Toggler with text</h3>

<Toggler>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>

{#if source === 'svelte'}
  <Prism language="html">
    {`<Toggler>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<label class="toggle">
  <input type="checkbox" hidden class="toggle-input" />
  <span class="toggle toggle-on">on</span>
  <span class="toggle toggle-off">off</span>
</label>`}
  </Prism>
{/if}

<h3>Toggler with icon</h3>

<Toggler>
  <slot slot="on">
    <Icon name="angle-down" style="width: 24px; height: 24px;" />
  </slot>
  <slot slot="off">
    <Icon name="angle-up" style="width: 24px; height: 24px;" />
  </slot>
</Toggler>

{#if source === 'svelte'}
  <Prism language="html">
    {`<Toggler>
  <slot slot="on">
    <Icon name="angle-down" style="width: 24px; height: 24px;" />
  </slot>
  <slot slot="off">
    <Icon name="angle-up" style="width: 24px; height: 24px;" />
  </slot>
</Toggler>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<label class="toggle">
  <input type="checkbox" hidden class="toggle-input" />
  <i class="toggle toggle-on fas fa-angle-down"></i>
  <i class="toggle toggle-off fas fa-angle-up"></i>
</label>`}
  </Prism>
{/if}

<h3>Toggle as switch</h3>

<Toggler isSwitch={true}>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>

{#if source === 'svelte'}
  <Prism language="html">
    {`<Toggler isSwitch={true}>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>`}
  </Prism>
{:else}
  <Prism language="html">
    {`Sadly, Svelte only`}
  </Prism>
{/if}

<h3>Set default state to off</h3>

<Toggler defaultState={false}>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>

{#if source === 'svelte'}
  <Prism language="html">
    {`<Toggler defaultState={false}>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>`}
  </Prism>
{:else}
  <Prism language="html">
    {`Sadly, Svelte only`}
  </Prism>
{/if}
