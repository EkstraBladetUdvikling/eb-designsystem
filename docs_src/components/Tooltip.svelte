<script>
  import Prism from 'svelte-prism';

  import { Tooltip } from '../../src';
</script>

<h1 class="color--eb">Tooltip</h1>
<div class="grid-width--small">
  <Prism language="js" source={`import { Tooltip } from '@ekstra-bladet/designsystem';`} />

  <h2>Default tooltip</h2>
  <div class="flex margin-l--tb">
    <Tooltip>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
      <p>Aenean a blandit lacus, sed faucibus ante.</p>
    </Tooltip>
  </div>

  <Prism
    language="html"
    source={`
      <Tooltip>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
        <p>Aenean a blandit lacus, sed faucibus ante.</p>
      </Tooltip>
    `}
  />

  <h2>Tooltip i højre side</h2>

  <div class="flex flex-justify--between grid-width--small margin-l--tb">
    <h3 class="flex-item">Flot overskrift</h3>
    <Tooltip className="flex-item flex-item--center" position="right">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
      <p>Aenean a blandit lacus, sed faucibus ante.</p>
    </Tooltip>
  </div>

  <Prism
    language="html"
    source={`
      <div class="flex flex-justify--between grid-width--small">
        <h3 class="flex-item">Flot overskrift</h3>
        <Tooltip className="flex-item flex-item--center" position="right">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
          <p>Aenean a blandit lacus, sed faucibus ante.</p>
        </Tooltip>
      </div>
    `}
  />
</div>
