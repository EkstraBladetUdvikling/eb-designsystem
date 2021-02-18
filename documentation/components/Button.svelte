<script lang="ts">
  import Button from "../../src/_components/button";
  import Icon from "../../src/_components/icon";
</script>

<div class="grid-width--small">
  <h1 style="color:#12507b;font-weight: bolder">Buttons</h1>
  <Button>Base button</Button>
  <Button type="solid">Button solid</Button>
  <Button type="link">Button link</Button>

  <code>
    {`<Button>Base button</Button>`}<br />
    {'<Button type="solid">Solid button</Button>'}<br />
    {'<Button type="link">Button link</Button>'}
  </code>

  <h3>Styles</h3>

  <Button style="primary">Button primary</Button>
  <Button style="secondary">Button secondary</Button>
  <Button style="accept">Button accept</Button>
  <Button style="cancel">Button cancel</Button>

  <code>
    {'<Button style="primary">Button primary</Button>'}<br />
    {'<Button style="secondary">Button secondary</Button>'}<br />
    {'<Button style="accept">Button accept</Button>'}<br />
    {'<Button style="cancel">Button cancel</Button>'}
  </code>

  <h3>Buttons with Icon</h3>
  <Button style="primary">
    <Icon name="ekstrabladet" style="height:20px;" />
    <span>button with icon right</span>
  </Button>

  <Button style="primary">
    <span>button with icon left</span>
    <Icon name="ekstrabladet" style="height:20px;" />
  </Button>

  <Button style="primary" type="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
</div>
