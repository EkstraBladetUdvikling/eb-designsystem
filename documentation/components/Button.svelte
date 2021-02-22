<script lang="ts">
  import Button from '../../src/_components/button';
  import Icon from '../../src/_components/icon';
</script>

<div class="grid-width--small">
  <h1 style="color:#12507b;font-weight: bolder">Buttons</h1>
  <Button>Base button</Button>
  <Button extension="solid">Button solid</Button>
  <Button extension="link">Button link</Button>
  <Button extension={['big', 'solid']}>Button big</Button>

  <code>
    {`<Button>Base button</Button>`}<br />
    {'<Button extension="solid">Solid button</Button>'}<br />
    {'<Button extension="link">Button link</Button>'}
  </code>

  <h3>Styles</h3>

  <Button type="primary">Button primary</Button>
  <Button type="secondary">Button secondary</Button>
  <Button type="accept">Button accept</Button>
  <Button type="cancel">Button cancel</Button>

  <code>
    {'<Button type="primary">Button primary</Button>'}<br />
    {'<Button type="secondary">Button secondary</Button>'}<br />
    {'<Button type="accept">Button accept</Button>'}<br />
    {'<Button type="cancel">Button cancel</Button>'}
  </code>

  <h3>Buttons with Icon</h3>
  <Button type="primary">
    <Icon name="ekstrabladet" style="height:20px;" />
    <span>button with icon right</span>
  </Button>

  <Button type="primary">
    <span>button with icon left</span>
    <Icon name="ekstrabladet" style="height:20px;" />
  </Button>

  <Button type="primary" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
</div>
