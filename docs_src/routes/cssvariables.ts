import Colors from '../cssvariables/Colors.svelte';
import Distance from '../cssvariables/Distance.svelte';
import Fonts from '../cssvariables/Fonts.svelte';
import Misc from '../cssvariables/Misc.svelte';

const path = '/cssvariables';

export const cssvariables = {
  path,
  routes: [
    { component: Colors, path: `${path}/colors`, name: 'Colors' },
    { component: Distance, path: `${path}/distance`, name: 'Distance' },
    { component: Fonts, path: `${path}/fonts`, name: 'Font variables' },
    { component: Misc, path: `${path}/misc`, name: 'Misc' },
  ],
  name: 'CSS variables',
};
