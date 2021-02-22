<script>
  import Code from './Code.svelte';

  import Tooltip from '../../src/_components/tooltip';
</script>

<h1>Tooltip</h1>
<Code>
  {`import Tooltip from './src/_components/tooltip';`}
</Code>

<h2>Default tooltip</h2>
<div class="flex margin-l--tb">
  <Tooltip>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
    <p>Aenean a blandit lacus, sed faucibus ante.</p>
  </Tooltip>
</div>

<Code>
  {`
  <Tooltip>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
    <p>Aenean a blandit lacus, sed faucibus ante.</p>
  </Tooltip>
  `}
</Code>

<h2>Tooltip i højre side</h2>

<div class="flex flex-justify--between grid-width--small margin-l--tb">
  <h3 class="flex-item">Flot overskrift</h3>
  <Tooltip className="flex-item flex-item--center" position="right">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
    <p>Aenean a blandit lacus, sed faucibus ante.</p>
  </Tooltip>
</div>

<Code>
  {`
  <div class="flex flex-justify--between grid-width--small">
    <h3 class="flex-item">Flot overskrift</h3>
    <Tooltip className="flex-item flex-item--center" position="right">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
      <p>Aenean a blandit lacus, sed faucibus ante.</p>
    </Tooltip>
  </div>
  `}
</Code>
