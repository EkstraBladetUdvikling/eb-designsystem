<script lang="ts">
  import Button from './Button.svelte';
  import Svg from './Svg.svelte';
</script>

<h3>Buttons</h3>

<Button>Base button</Button>
<Button type="solid">Button solid</Button>
<Button type="link">Button link</Button>

<code>
  {`<Button>Base button</Button>`}<br>
  {'<Button type="solid">Solid button</Button>'}<br>
  {'<Button type="link">Button link</Button>'}
</code>

<h3>Styles</h3>

<Button style="primary">Button primary</Button>
<Button style="secondary">Button secondary</Button>
<Button style="accept">Button accept</Button>
<Button style="cancel">Button cancel</Button>

<code>
  {'<Button style="primary">Button primary</Button>'}<br>
  {'<Button style="secondary">Button secondary</Button>'}<br>
  {'<Button style="accept">Button accept</Button>'}<br>
  {'<Button style="cancel">Button cancel</Button>'}
</code>

<h3>Icons</h3>

<Button style="primary">
  <Svg name="ekstrabladet" style="height:20px;" />
  <span>button with icon right</span>
</Button>

<Button style="primary">
  <span>button with icon left</span>
  <Svg name="ekstrabladet" style="height:20px;" />
</Button>

<Button style="primary" type="icon">
  <span style="font-size: 30px">&times;</span>
</Button>
