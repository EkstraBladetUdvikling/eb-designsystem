<script lang="ts">
  import Button from '../../src/_components/button';
  import Icon from '../../src/_components/icon';
</script>

<div class="grid-width--small">
  <h1 style="color:#12507b;font-weight: bolder">Buttons</h1>

  <Button>Base button</Button>
  <code>
    {`<Button>Base button</Button>`}<br />
  </code>

  <h3>extension attribute</h3>
  <p>options</p>
  <ul>
    <li>solid</li>
    <li>link</li>
    <li>icon</li>
    <li>big</li>
  </ul>
  <div class="flex">
    <Button className="margin-m" extension="solid">Button solid</Button>
    <Button className="margin-m" extension="link">Button link</Button>
    <Button className="margin-m" extension="icon">
      <span style="font-size: 30px">&times;</span>
    </Button>
    <Button className="margin-m" extension={'big'}>Button big</Button>
  </div>
  <code>
    {'<Button className="margin-m"extension="solid">Solid button</Button>'}<br />
    {'<Button className="margin-m"extension="link">Button link</Button>'}<br />
  </code>

  <h3>extension attribute combinations</h3>
  <p><b>big</b> can be combined with the other three extensions</p>
  <div class="flex">
    <Button className="margin-m" extension={['big', 'solid']}>Button big solid</Button>
    <Button className="margin-m" extension={['big', 'link']}>Button big link</Button>
    <Button className="margin-m" extension={['big', 'icon']}>
      <span style="font-size: 30px">&times;</span>
    </Button>
  </div>

  <code>
    {'<Button className="margin-m" extension={`big`}>Button big</Button>'}<br />
    {'<Button className="margin-m" extension={[`big`, `solid`]}>Button big solid</Button>'}<br />
    {'<Button className="margin-m" extension={[`big`, `link`]}>Button big link</Button>'}
  </code>

  <h3>Styles</h3>
  <div class="flex">
    <Button className="margin-m" type="primary">Button primary</Button>
    <Button className="margin-m" type="secondary">Button secondary</Button>
    <Button className="margin-m" type="accept">Button accept</Button>
    <Button className="margin-m" type="cancel">Button cancel</Button>
  </div>

  <code>
    {'<Button className="margin-m"type="primary">Button primary</Button>'}<br />
    {'<Button className="margin-m"type="secondary">Button secondary</Button>'}<br />
    {'<Button className="margin-m"type="accept">Button accept</Button>'}<br />
    {'<Button className="margin-m"type="cancel">Button cancel</Button>'}
  </code>

  <h3>Buttons with Icon</h3>
  <Button className="margin-m">
    <Icon name="ekstrabladet" style="height:20px;" />
    <span>button with icon right</span>
  </Button>
  <code>
    {'<Button className="margin-m">'}<br />
    {'<Icon name="ekstrabladet" style="height:20px;" />'}<br />
    {'<span>button with icon right</span>'}<br />
    {'</Button>'}<br />
  </code>

  <Button className="margin-m">
    <span>button with icon left</span>
    <Icon name="ekstrabladet" style="height:20px;" />
  </Button>
  <code>
    {'<Button className="margin-m">'}<br />
    {'<span>button with icon right</span>'}<br />
    {'<Icon name="ekstrabladet" style="height:20px;" />'}<br />
    {'</Button>'}<br />
  </code>

  <Button className="margin-m" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension={['icon', 'solid']}>
    <span style="font-size: 30px">&times;</span>
  </Button>
  <code>
    {'<Button className="margin-m" extension="icon">'}<br />
    {'<span style="font-size: 30px">&times;</span>'}<br />
    {'</Button>'}<br />
  </code>
</div>
