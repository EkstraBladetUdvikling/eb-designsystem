import Colors from '../cssvariables/Colors.svelte';
import Fonts from '../cssvariables/Fonts.svelte';
import Misc from '../cssvariables/Misc.svelte';

const href = '/cssvariables';

export const cssvariables = {
  href,
  routes: [
    { component: Colors, href: `${href}/colors`, title: 'Colors' },
    { component: Fonts, href: `${href}/fonts`, title: 'Fonts' },
    { component: Misc, href: `${href}/misc`, title: 'Misc' },
  ],
  title: 'CSS variables',
};
