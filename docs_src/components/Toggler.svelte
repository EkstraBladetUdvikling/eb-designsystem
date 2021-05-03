<script lang="ts">
  import Prism from 'svelte-prism';

  import { Icon, Toggler } from '../../src/_components';
</script>

<h1 class="color--eb">Toggler</h1>

<Prism language="js" source={`import { Toggler } from '@ekstra-bladet/designsystem/src/_components';`} />

<h2 class="margin-l--tb">Toggler with text</h2>
<Toggler
  on:toggle={(event) => {
    console.log('hello its on?', event.detail);
  }}
>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>

<Prism
  language="html"
  source={`
<Toggler on:toggle="{(event) => {
    console.log('hello its on?', event.detail);
  }}">
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>
`}
/>

<h2 class="margin-l--tb">Toggler with icon</h2>

<Toggler
  on:toggle={(event) => {
    console.log('hello its on?', event.detail);
  }}
>
  <slot slot="on">
    <Icon name="angle-down" style="width: 24px; height: 24px;" />
  </slot>
  <slot slot="off">
    <Icon name="angle-up" style="width: 24px; height: 24px;" />
  </slot>
</Toggler>

<Prism
  language="html"
  source={`
<Toggler on:toggle="{(event) => {
    console.log('hello its on?', event.detail);
  }}">
  <slot slot="on">
    <Icon name="angle_down_pro" style="width: 24px; height: 24px;" />
  </slot>
  <slot slot="off">
    <Icon name="angle_up_pro" style="width: 24px; height: 24px;" />
  </slot>
</Toggler>
`}
/>

<Toggler
  isSwitch={true}
  on:toggle={(event) => {
    console.log('hello its on?', event.detail);
  }}
>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>

<Prism
  language="html"
  source={`
<Toggler
  isSwitch="{true}"
  on:toggle="{(event) => {
    console.log('hello its on?', event.detail);
  }}"
>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>
`}
/>

<Toggler
  isSwitch={true}
  defaultState={false}
  on:toggle={(event) => {
    console.log('hello its on?', event.detail);
  }}
>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>

<Prism
  language="html"
  source={`
<Toggler
  isSwitch="{true}"
  defaultState="{false}"
  on:toggle="{(event) => {
    console.log('hello its on?', event.detail);
  }}"
>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>
`}
/>
