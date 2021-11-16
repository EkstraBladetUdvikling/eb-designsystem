import Animation from '../utilities/Animation.svelte';
import Border from '../utilities/Border.svelte';
import Color from '../utilities/Color.svelte';
import Flex from '../utilities/Flex.svelte';
import Fonts from '../utilities/Fonts.svelte';
import Grid from '../utilities/Grid.svelte';
import Helpers from '../utilities/Helpers.svelte';
import Separator from '../utilities/Separator.svelte';
import Sizing from '../utilities/Sizing.svelte';
import Text from '../utilities/Text.svelte';

export const utilities = {
  href: '/utilities',
  routes: [
    { href: '/utilities/animation', title: 'Animation', component: Animation },
    { href: '/utilities/border', title: 'Border', component: Border },
    { href: '/utilities/color', title: 'Color', component: Color },
    { href: '/utilities/flex', title: 'Flex', component: Flex },
    { href: '/utilities/fonts', title: 'Fonts', component: Fonts },
    { href: '/utilities/grid', title: 'Grid', component: Grid },
    { href: '/utilities/helpers', title: 'Helpers', component: Helpers },
    { href: '/utilities/separator', title: 'Separator', component: Separator },
    { href: '/utilities/sizing', title: 'Sizing', component: Sizing },
    { href: '/utilities/text', title: 'Text', component: Text },
  ],
  title: 'Utilities',
};
