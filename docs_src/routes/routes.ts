import { components } from './components';
import { cssvariables } from './cssvariables';
import { exportedfunctions } from './exportedfunctions';
import { guidelines } from './guidelines';
import { utilities } from './utilities';

import ComponentsHome from '../components/Home.svelte';
import CssVariablesHome from '../cssvariables/Home.svelte';
import FunctionsHome from '../exportedfunctions/Home.svelte';
import GuidelinesHome from '../guidelines/Home.svelte';
import Home from '../main/Home.svelte';
import UtilitiesHome from '../utilities/Home.svelte';

export const menuItems = [guidelines, components, utilities, exportedfunctions, cssvariables];

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: guidelines.name,
    path: guidelines.path,
    component: GuidelinesHome,
  },
  {
    name: components.name,
    path: components.path,
    component: ComponentsHome,
  },
  {
    name: utilities.name,
    path: utilities.path,
    component: UtilitiesHome,
  },
  {
    name: exportedfunctions.name,
    path: exportedfunctions.path,
    component: FunctionsHome,
  },
  {
    name: cssvariables.name,
    path: cssvariables.path,
    component: CssVariablesHome,
  },
  ...guidelines.routes,
  ...components.routes,
  ...utilities.routes,
  ...exportedfunctions.routes,
  ...cssvariables.routes,
];

export const options = {
  hash: true,
  routes,
} as const;
