import { components } from './components';
import { guidelines } from './guidelines';
import { utilities } from './utilities';

import Home from '../main/Home.svelte';
import ComponentsHome from '../components/Home.svelte';
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
  [components.href]: ComponentsHome,
  [utilities.href]: UtilitiesHome,
  [guidelines.href]: GuidelinesHome,
};

[...components.routes, ...utilities.routes, ...guidelines.routes].forEach((route) => {
  spaRoutes[route.href] = route.component;
});

export const routes = spaRoutes;

export const menuItems: IMenuGroups[] = [components, utilities, guidelines];
