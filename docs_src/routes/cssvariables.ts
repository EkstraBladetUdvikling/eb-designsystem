import Colors from '../cssvariables/Colors.svelte';
import Distance from '../cssvariables/Distance.svelte';
import Fonts from '../cssvariables/Fonts.svelte';
import Misc from '../cssvariables/Misc.svelte';

const href = '/cssvariables';

export const cssvariables = {
  href,
  routes: [
    { component: Colors, href: `${href}/colors`, title: 'Colors' },
    { component: Distance, href: `${href}/distance`, title: 'Distance' },
    { component: Fonts, href: `${href}/fonts`, title: 'Fonts' },
    { component: Misc, href: `${href}/misc`, title: 'Misc' },
  ],
  title: 'CSS variables',
};
