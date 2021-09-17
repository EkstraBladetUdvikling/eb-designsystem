import Animation from '../utilities/Animation.svelte';
import Border from '../utilities/Border.svelte';
import Color from '../utilities/Color.svelte';
import Flex from '../utilities/Flex.svelte';
import Fonts from '../utilities/Fonts.svelte';
import Grid from '../utilities/Grid.svelte';
import Helpers from '../utilities/Helpers.svelte';
import Sizing from '../utilities/Sizing.svelte';
import Text from '../utilities/Text.svelte';

export const utilities = {
  href: '/utilities',
  routes: [
    { disabled: false, href: '/utilities/animation', title: 'Animation', group: 'utilities', component: Animation },
    { disabled: false, href: '/utilities/border', title: 'Border', group: 'utilities', component: Border },
    { disabled: false, href: '/utilities/color', title: 'Color', group: 'utilities', component: Color },
    { disabled: false, href: '/utilities/flex', title: 'Flex', group: 'utilities', component: Flex },
    { disabled: false, href: '/utilities/fonts', title: 'Fonts', group: 'utilities', component: Fonts },
    { disabled: false, href: '/utilities/grid', title: 'Grid', group: 'utilities', component: Grid },
    { disabled: false, href: '/utilities/helpers', title: 'Helpers', group: 'utilities', component: Helpers },
    { disabled: false, href: '/utilities/sizing', title: 'Sizing', group: 'utilities', component: Sizing },
    { disabled: false, href: '/utilities/text', title: 'Text', group: 'utilities', component: Text },
  ],
  title: 'Utilities',
};
