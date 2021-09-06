<script>
  import Prism from 'svelte-prism';

  import { Accordion, Tabs, Tab, TabContent, TabList } from '../../dist/';

  let tabs = [
    {
      title: 'Tab 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis porttitor augue sed commodo. Etiam ornare arcu quis turpis pulvinar, ullamcorper ullamcorper nunc ullamcorper. Maecenas porttitor, erat in feugiat faucibus, velit sem luctus leo, nec congue tellus erat sit amet purus.',
    },
  ];
</script>

<div class="grid-width--large">
  <h1 class="color--eb">Data Theme</h1>
  <h3>Anvendelse af data theme</h3>
  <p>
    Farve tema anvendes ved tilføjelse af data-attribute ved navn dataTheme: <code
      >dataTheme="lightmode | darkmode"</code
    >
  </p>
  <p><code>dataTheme</code> kan anvendes på udvalgte komponenter, som kan ses nederst under <b>overblik</b></p>
  <p>
    <b>OBS:</b> anvendes dataTheme direkte på et html-element skal det anvendes på følgende måde:
    <code>data-theme="lightmode"</code>
  </p>

  <h3>Eksempler på data theme</h3>
  <Tabs>
    <div class="flex flex-justify--end width-1of1 margin-m--b">
      <TabList>
        <Tab><i class="fas fa-cubes" /></Tab>
        <Tab><i class="fas fa-code" /></Tab>
      </TabList>
    </div>
    <TabContent>
      <Accordion dataTheme="lightmode" {tabs} />
      <Accordion dataTheme="darkmode" {tabs} />
      <div data-theme="lightmode">
        <p>I'm now in lightmode</p>
      </div>
      <div data-theme="darkmode">
        <p>I'm now in darkmode</p>
      </div>
    </TabContent>
    <TabContent>
      <Prism language="html" source={`<Accordion dataTheme="lightmode" {tabs} />`} />
      <Prism language="html" source={`<Accordion dataTheme="darkmode" {tabs} />`} />
      <Prism language="html" source={`<div data-theme="lightmode"><p>I'm now in lightmode</p></div>`} />
      <Prism language="html" source={`<div data-theme="darkmode"><p>I'm now in darkmode</p></div>`} />
    </TabContent>
  </Tabs>

  <h3>Overblik over komponenter der kan anvende data theme</h3>
  <div class="grid-width--large">
    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);">
      <div class="width-1of3 padding-m fontweight-bold">Component</div>
      <div class="width-1of3 padding-m fontweight-bold">Dokumentation</div>
      <div class="width-1of3 padding-m fontweight-bold">dataTheme</div>
    </div>
    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);">
      <div class="width-1of3 padding-m">Accordion</div>
      <div class="width-1of3 padding-m">
        <a href="#/components/accordion">Accordion</a>
      </div>
      <div class="width-1of3 padding-m">
        <p class="margin-none"><i class="fas fa-circle color--white" /> lightmode</p>
        <p class="margin-none"><i class="fas fa-circle color--black" /> darkmode</p>
      </div>
    </div>
    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);">
      <div class="width-1of3 padding-m">Card (Card-mode)</div>
      <div class="width-1of3 padding-m">
        <a href="#/components/card">Card</a>
      </div>
      <div class="width-1of3 padding-m">
        <p class="margin-none"><i class="fas fa-circle color--white" /> lightmode</p>
        <p class="margin-none"><i class="fas fa-circle color--black" /> darkmode</p>
      </div>
    </div>
  </div>
</div>
