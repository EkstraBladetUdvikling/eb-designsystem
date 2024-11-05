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
  path: '/utilities',
  routes: [
    { component: Animation, path: '/utilities/animation', name: 'Animation' },
    { component: Border, path: '/utilities/border', name: 'Border' },
    { component: Color, path: '/utilities/color', name: 'Color' },
    { component: Flex, path: '/utilities/flex', name: 'Flex' },
    { component: Fonts, path: '/utilities/fonts', name: 'Fonts' },
    { component: Grid, path: '/utilities/grid', name: 'Grid' },
    { component: Helpers, path: '/utilities/helpers', name: 'Helpers' },
    { component: Separator, path: '/utilities/separator', name: 'Separator' },
    { component: Sizing, path: '/utilities/sizing', name: 'Sizing' },
    { component: Text, path: '/utilities/text', name: 'Text' },
  ],
  name: 'Utilities',
};
