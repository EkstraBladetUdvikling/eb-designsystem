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
    { component: Animation, href: '/utilities/animation', title: 'Animation' },
    { component: Border, href: '/utilities/border', title: 'Border' },
    { component: Color, href: '/utilities/color', title: 'Color' },
    { component: Flex, href: '/utilities/flex', title: 'Flex' },
    { component: Fonts, href: '/utilities/fonts', title: 'Fonts' },
    { component: Grid, href: '/utilities/grid', title: 'Grid' },
    { component: Helpers, href: '/utilities/helpers', title: 'Helpers' },
    { component: Separator, href: '/utilities/separator', title: 'Separator' },
    { component: Sizing, href: '/utilities/sizing', title: 'Sizing' },
    { component: Text, href: '/utilities/text', title: 'Text' },
  ],
  title: 'Utilities',
};
