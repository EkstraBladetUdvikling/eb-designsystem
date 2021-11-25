import Colors from '../cssvariables/Colors.svelte';
import Distance from '../cssvariables/Distance.svelte';
import Fonts from '../cssvariables/Fonts.svelte';
import Misc from '../cssvariables/Misc.svelte';

export const cssvariables = {
  href: '/cssvariables',
  routes: [
    { component: Colors, href: '/cssvariables/colors', title: 'Colors' },
    { component: Distance, href: '/cssvariables/distance', title: 'Distance' },
    { component: Fonts, href: '/cssvariables/fonts', title: 'Fonts' },
    { component: Misc, href: '/cssvariables/misc', title: 'Miscellaneous' },
  ],
  title: 'CSS Variables',
};
