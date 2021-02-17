<script lang="ts">
  import Button from "./Button.svelte";
  import HorizontalScroll from "./components/horizontalscroll";
  import Svg from "./Svg.svelte";
  import {Accordion} from "./components/accordion";

  let tabs = [{title: "tab 1", content: "content 1"}, {title: "tab 2", content: "content 2"}]
</script>

<h3>Buttons</h3>

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

<HorizontalScroll>
  <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
    <a href="#d" class="card height-1of1">
      <div class="card-content">
        <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 2 timer siden</small></p>
        <h3 class="card-title">Aliquam ultricies felis eget orci commodo fringilla</h3>
      </div>
    </a>
  </div>
  <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
    <a href="#c" class="card height-1of1">
      <div class="card-content">
        <p class="card-meta color--graa3"><small><span class="color--tv">TV</span> - 3 timer siden</small></p>
        <h3 class="card-title">felis eget orci commodo ulimito</h3>
      </div>
    </a>
  </div>
  <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
    <a href="#b" class="card height-1of1">
      <div class="card-content">
        <p class="card-meta color--graa3"><small><span class="color--sport">sport</span> - 5 timer siden</small></p>
        <h3 class="card-title">Ultricies commodo lecos mania</h3>
      </div>
    </a>
  </div>
  <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
    <a href="#a" class="card height-1of1">
      <div class="card-content">
        <p class="card-meta color--graa3"><small><span class="color--flash">nyheder</span> - 8 timer siden</small></p>
        <h3 class="card-title">Fringilla levos tumio arcadia</h3>
      </div>
    </a>
  </div>
</HorizontalScroll>

<div class="grid-width--small">
  <h1 style="color:#12507b;font-weight: bolder">Accordion</h1>
  <Accordion tabs={tabs}/>
</div>
