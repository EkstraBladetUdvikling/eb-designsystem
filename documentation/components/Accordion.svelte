<script lang="ts">
  import Code from './Code.svelte';

  import Accordion from '../../src/_components/accordion';

  let tabs = [
    {
      title: 'Tab 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis porttitor augue sed commodo. Etiam ornare arcu quis turpis pulvinar, ullamcorper ullamcorper nunc ullamcorper. Maecenas porttitor, erat in feugiat faucibus, velit sem luctus leo, nec congue tellus erat sit amet purus.',
    },
    {
      title: 'Tab 2',
      content:
        'Nam condimentum, dui sit amet convallis finibus, tellus mi molestie lorem, sed ornare mauris ex nec lectus. Pellentesque gravida molestie felis sit amet interdum.',
    },
    {
      title: 'Tab 3',
      content:
        'uspendisse at tincidunt eros, vel convallis nisi. Nam pulvinar viverra augue. Vivamus vitae ligula sit amet tellus interdum dictum. Donec accumsan facilisis urna, condimentum mollis diam gravida ac. Donec sed malesuada odio. ',
    },
  ];
</script>

<div class="grid-width--small">
  <h1 style="color:#bd1118;font-weight: bolder">Accordion</h1>

  <Code language="typescript" className="grid-width--small">
    {`
    import Accordion from '../../src/_components/accordion';

    // Example tabs
    let tabs = [
      { title: 'Tab 1', content: 'content 1' },
      { title: 'Tab 2', content: 'content 2' },
    ];
    `}
  </Code>

  <h2>Default accordion</h2>

  <Accordion {tabs} />

  <Code className="grid-width--small">
    {`<Accordion {tabs} />`}
  </Code>

  <h2>Accordion with lightmode</h2>
  <Accordion dataTheme="lightmode" {tabs} />

  <Code className="grid-width--small">
    {`<Accordion dataTheme="lightmode" {tabs} />`}
  </Code>

  <h2>Accordion with darkmode</h2>
  <Accordion dataTheme="darkmode" {tabs} />

  <Code className="grid-width--small">
    {`<Accordion dataTheme="darkmode" {tabs} />`}
  </Code>
</div>
