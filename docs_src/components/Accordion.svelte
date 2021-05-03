<script lang="ts">
  import Prism from 'svelte-prism';

  import { Accordion } from '../../src/_components';

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
  <h1 class="color--eb">Accordion</h1>

  <Prism
    language="js"
    source={`
    import { Accordion } from '@ekstra-bladet/designsystem/src/_components';

    // Example tabs
    let tabs = [
      { title: 'Tab 1', content: 'content 1' },
      { title: 'Tab 2', content: 'content 2' },
    ];
    `}
  />

  <h2>Default accordion</h2>

  <Accordion {tabs} />

  <Prism language="html" source={`<Accordion {tabs} />`} />

  <h2>Accordion with lightmode</h2>
  <Accordion dataTheme="lightmode" {tabs} />

  <Prism language="html" source={`<Accordion dataTheme="lightmode" {tabs} />`} />

  <h2>Accordion with darkmode</h2>
  <Accordion dataTheme="darkmode" {tabs} />

  <Prism language="html" source={`<Accordion dataTheme="darkmode" {tabs} />`} />
</div>
