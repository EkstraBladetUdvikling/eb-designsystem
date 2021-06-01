<script>
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Tooltip } from '../../src';
</script>

<h1 class="color--eb">Tooltip</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { Tooltip } from '@ekstra-bladet/designsystem';`}
  </Prism>
{/if}

<h3>Default tooltip</h3>

<div class="flex margin-l--tb">
  <Tooltip>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
    <p>Aenean a blandit lacus, sed faucibus ante.</p>
  </Tooltip>
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<Tooltip></Tooltip>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<label class="tooltip">
  <input type="checkbox" hidden class="tooltip-input"/>
  <div class="tooltip-off">
    <i class="tooltip-toggle fas fa-question"/>
  </div>
  <div class="tooltip-on">
    <i class="tooltip-toggle fas fa-times"/>
    <div class="padding-s">
      Content
    </div>
  </div>
</label>`}
  </Prism>
{/if}

<h3>Tooltip i højre side</h3>

<div class="flex flex-justify--between grid-width--small margin-l--tb">
  <h3>Header</h3>
  <Tooltip position="right" className="flex-item--center">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
    <p>Aenean a blandit lacus, sed faucibus ante.</p>
  </Tooltip>
</div>

{#if $sourceType === 'svelte'}
  <Prism language="html">
    {`<div class="flex flex-justify--between">
  <h3>Header</h3>
  <Tooltip position="right" className="flex-item--center"></Tooltip>
</div>`}
  </Prism>
{:else}
  <Prism language="html">
    {`<div class="flex flex-justify--between">
  <h3>Header</h3>
  <label class="tooltip tooltip--right flex-item--center">
    <input type="checkbox" hidden class="tooltip-input"/>
    <div class="tooltip-off">
      <i class="tooltip-toggle fas fa-question"/>
    </div>
    <div class="tooltip-on">
      <i class="tooltip-toggle fas fa-times"/>
      <div class="padding-s">
        Content
      </div>
    </div>
  </label>
</div>`}
  </Prism>
{/if}
