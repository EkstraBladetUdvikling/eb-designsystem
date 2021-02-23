<script lang="ts">
  import Code from './Code.svelte';

  import Button from '../../src/_components/button';
  import Icon from '../../src/_components/icon';
</script>

<h1 style="color:#12507b;font-weight: bolder">Buttons</h1>

<Code language="typescript">
  {`import Badge from './src/_components/badge/Badge.svelte';`}
</Code>

<Button>Base button</Button>
<Code>
  {`<Button>Base button</Button>`}
</Code>

<h3>extension attribute</h3>
<p>options</p>
<ul>
  <li>solid</li>
  <li>link</li>
  <li>icon</li>
  <li>big</li>
  <li>small</li>
</ul>
<div class="flex">
  <Button className="margin-m" extension="solid">Button solid</Button>
  <Button className="margin-m" extension="link">Button link</Button>
  <Button className="margin-m" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension="big">Button big</Button>
  <Button className="margin-m" extension="small">Button small</Button>
</div>
<Code>
  {`
  <Button className="margin-m" extension="solid">Button solid</Button>
  <Button className="margin-m" extension="link">Button link</Button>
  <Button className="margin-m" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension="big">Button big</Button>
  `}
</Code>

<h3>extension attribute combinations</h3>
<p><b>big</b> and <b>small</b> can be combined with the other three extensions</p>
<div class="flex">
  <Button className="margin-m" extension={['big', 'solid']}>Button big solid</Button>
  <Button className="margin-m" extension={['big', 'link']}>Button big link</Button>
  <Button className="margin-m" extension={['big', 'icon']}>
    <span style="font-size: 30px">&times;</span>
  </Button>
</div>
<div class="flex">
  <Button className="margin-m" extension={['small', 'solid']}>Button small solid</Button>
  <Button className="margin-m" extension={['small', 'link']}>Button small link</Button>
  <Button className="margin-m" extension={['small', 'icon']}>
    <span style="font-size: 30px">&times;</span>
  </Button>
</div>

<Code>
  {`
  <Button className="margin-m" extension="big">Button big</Button>
  <Button className="margin-m" extension="{['big', 'solid']}">Button big solid</Button>
  <Button className="margin-m" extension="{['big', 'link']}">Button big link</Button>
  <Button className="margin-m" extension={['small', 'solid']}>Button small solid</Button>
  <Button className="margin-m" extension={['small', 'link']}>Button small link</Button>
  <Button className="margin-m" extension={['small', 'icon']}>
    <span style="font-size: 30px">&times;</span>
  </Button>
  `}
</Code>

<h3>Styles</h3>
<div class="flex">
  <Button className="margin-m" type="primary">Button primary</Button>
  <Button className="margin-m" type="secondary">Button secondary</Button>
  <Button className="margin-m" type="accept">Button accept</Button>
  <Button className="margin-m" type="cancel">Button cancel</Button>
</div>

<Code>
  {`
  <Button className="margin-m" type="primary">Button primary</Button>
  <Button className="margin-m" type="secondary">Button secondary</Button>
  <Button className="margin-m" type="accept">Button accept</Button>
  <Button className="margin-m" type="cancel">Button cancel</Button>
  `}
</Code>

<h3>Buttons with Icon</h3>
<Button className="margin-m">
  <span>button with icon right</span>
  <Icon className="icon" name="medielogin" style="height:20px;" />
</Button>
<Code>
  {`
  <Button className="margin-m">
    <span>button with icon right</span>
    <Icon className="icon" name="medielogin" style="height:20px;" />
  </Button>
  `}
</Code>

<Button className="margin-m">
  <Icon className="icon" name="angle_left_pro" style="height:20px;" />
  <span>button with icon left</span>
</Button>
<Code>
  {`
  <Button className="margin-m">
    <Icon className="icon" name="angle_left_pro" style="height:20px;" />
    <span>button with icon right</span>
  </Button>
  `}
</Code>

<Button className="margin-m" extension="icon">
  <span style="font-size: 30px">&times;</span>
</Button>
<Button className="margin-m" extension={['icon', 'solid', 'small']}>
  <span style="font-size: 30px">&times;</span>
</Button>
<Button className="margin-m" extension={['icon', 'solid']}>
  <span style="font-size: 30px">&times;</span>
</Button>
<Button className="margin-m" extension={['icon', 'solid', 'big']}>
  <span style="font-size: 40px">&times;</span>
</Button>
<Code>
  {`
  <Button className="margin-m" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension="{['icon', 'solid', 'small']}">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension="{['icon', 'solid']}">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension="{['icon', 'solid', 'big']}">
    <span style="font-size: 40px">&times;</span>
  </Button>
  `}
</Code>
