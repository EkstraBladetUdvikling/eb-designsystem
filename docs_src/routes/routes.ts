import { components } from './components';
import { exportedfunctions } from './exportedfunctions';
import { guidelines } from './guidelines';
import { utilities } from './utilities';

import Home from '../main/Home.svelte';
import ComponentsHome from '../components/Home.svelte';
import FunctionsHome from '../exportedfunctions/Home.svelte';
import UtilitiesHome from '../utilities/Home.svelte';
import GuidelinesHome from '../guidelines/Home.svelte';

import type { SvelteComponent } from 'svelte';

interface IRoute {
  component: typeof SvelteComponent;
  href: string;
  title: string;
}

export type TRoutes = IRoute[];

export interface IMenuGroups {
  href: string;
  routes: TRoutes;
  title: string;
}

// Fills the object to create a SPA routing
let spaRoutes = {
  '/': Home,
  [guidelines.href]: GuidelinesHome,
  [components.href]: ComponentsHome,
  [utilities.href]: UtilitiesHome,
  [exportedfunctions.href]: FunctionsHome,
};

[...guidelines.routes, ...components.routes, ...utilities.routes, ...exportedfunctions.routes].forEach((route) => {
  spaRoutes[route.href] = route.component;
});

export const routes = spaRoutes;

export const menuItems: IMenuGroups[] = [guidelines, components, utilities, exportedfunctions];
