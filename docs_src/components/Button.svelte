<script lang="ts">
  import Prism from 'svelte-prism';

  import Button from '../../src/_components/button';
  import Icon from '../../src/_components/icon';

  const language = 'html';

  function buttonClick() {
    console.log('funck!');
  }
</script>

<h1 class="color--eb">Buttons</h1>

<Prism language="js" source={`import Button from '@ekstra-bladet/designsystem/src/_components/button';`} />

<Button
  on:click={() => {
    console.log('click the button');
  }}>Base button</Button
>
<Prism
  {language}
  source={`
  <Button on:click="{() => {
    console.log('click the button');
  }}">Base button</Button>
  `}
/>

<Button href="#" on:click={buttonClick}>Base button as anchor element</Button>
<Prism
  {language}
  source={`
  <Button href="#" on:click="{buttonClick}">Base button</Button>
  `}
/>

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
  <Button className="margin-m" size="big">Button big</Button>
  <Button className="margin-m" size="small">Button small</Button>
</div>
<Prism
  {language}
  source={`
  <Button className="margin-m" extension="solid">Button solid</Button>
  <Button className="margin-m" extension="link">Button link</Button>
  <Button className="margin-m" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" size="big">Button big</Button>
  <Button className="margin-m" size="small">Button small</Button>
  `}
/>

<h3>Size attribute</h3>
<p><b>big</b> and <b>small</b> can be combined with the other three extensions</p>
<div class="flex">
  <Button className="margin-m" size="big" extension="solid">Button big solid</Button>
  <Button className="margin-m" size="big" extension="link">Button big link</Button>
  <Button className="margin-m" size="big" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
</div>
<div class="flex">
  <Button className="margin-m" size="small" extension="solid">Button small solid</Button>
  <Button className="margin-m" size="small" extension="link">Button small link</Button>
  <Button className="margin-m" size="small" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
</div>

<Prism
  {language}
  source={`
  <Button className="margin-m" size="big">Button big</Button>
  <Button className="margin-m" size="big" extension="solid">Button big solid</Button>
  <Button className="margin-m" size="big" extension="link">Button big link</Button>
  <Button className="margin-m" size="small" extension="solid">Button small solid</Button>
  <Button className="margin-m" size="small" extension="link">Button small link</Button>
  <Button className="margin-m" size="small" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  `}
/>

<h3>Styles</h3>
<div class="flex">
  <Button className="margin-m" type="primary">Button primary</Button>
  <Button className="margin-m" type="secondary">Button secondary</Button>
  <Button className="margin-m" type="accept">Button accept</Button>
  <Button className="margin-m" type="cancel">Button cancel</Button>
</div>

<Prism
  {language}
  source={`
  <Button className="margin-m" type="primary">Button primary</Button>
  <Button className="margin-m" type="secondary">Button secondary</Button>
  <Button className="margin-m" type="accept">Button accept</Button>
  <Button className="margin-m" type="cancel">Button cancel</Button>
  `}
/>

<h3>Buttons with Icon</h3>
<Button className="margin-m">
  <span>button with icon right</span>
  <Icon className="icon" name="medielogin" width="20" />
</Button>
<Prism
  {language}
  source={`
  <Button className="margin-m">
    <span>button with icon right</span>
    <Icon className="icon" name="medielogin" width="20"/>
  </Button>
  `}
/>

<Button className="margin-m">
  <Icon className="icon" name="angle-left" width="20" />
  <span>button with icon left</span>
</Button>
<Prism
  {language}
  source={`
  <Button className="margin-m">
    <Icon className="icon" name="angle-left" width="20"/>
    <span>button with icon right</span>
  </Button>
  `}
/>

<div class="flex">
  <Button className="margin-m" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" size="small" extension="icon solid">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension="icon solid">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" size="big" extension="icon solid">
    <span style="font-size: 40px">&times;</span>
  </Button>
</div>

<Prism
  {language}
  source={`
  <Button className="margin-m" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" size="small" extension="icon solid">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension="icon solid">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" size="big" extension="icon solid">
    <span style="font-size: 40px">&times;</span>
  </Button>
  `}
/>
