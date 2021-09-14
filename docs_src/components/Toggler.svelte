<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Icon, Toggler } from '../../src';
</script>

<h1 class="color--eb">Toggler</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { Toggler } from '@ekstra-bladet/designsystem';`}
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
        <td>defaultState</td>
        <td>boolean</td>
        <td>true</td>
        <td>Should the toggler be on or of on mount</td>
      </tr>
      <tr>
        <td>isSwitch</td>
        <td>boolean</td>
        <td>false</td>
        <td>Convents into a swicth, see example further down</td>
      </tr>
    </tbody>
  </table>
{/if}

<h3>Toggler with text</h3>

<Toggler>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>

{#if $sourceType === 'svelte'}
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
    <Icon name="angledown" style="width: 24px; height: 24px;" />
  </slot>
  <slot slot="off">
    <Icon name="angleup" style="width: 24px; height: 24px;" />
  </slot>
</Toggler>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Toggler>
  <slot slot="on">
    <Icon name="angledown" style="width: 24px; height: 24px;" />
  </slot>
  <slot slot="off">
    <Icon name="angleup" style="width: 24px; height: 24px;" />
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

{#if $sourceType === 'svelte'}
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

{#if $sourceType === 'svelte'}
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
