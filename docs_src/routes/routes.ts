import Home from './Home.svelte';

import Accordion from '../components/Accordion.svelte';
import ArticleCard from '../components/ArticleCard.svelte';
import Badge from '../components/Badge.svelte';
import Button from '../components/Button.svelte';
import ButtonGroup from '../components/ButtonGroup.svelte';
import Card from '../components/Card.svelte';
import FormElement from '../components/FormElement.svelte';
import Icon from '../components/Icon.svelte';
import ComponentsHome from '../components/Home.svelte';
import HorizontalScroll from '../components/HorizontalScroll.svelte';
import Spinner from '../components/Spinner.svelte';
import Tabs from '../components/Tabs.svelte';
import Toggler from '../components/Toggler.svelte';
import Tooltip from '../components/Tooltip.svelte';

import Animation from '../utilities/Animation.svelte';
import Border from '../utilities/Border.svelte';
import Color from '../utilities/Color.svelte';
import Flex from '../utilities/Flex.svelte';
import Fonts from '../utilities/Fonts.svelte';
import Grid from '../utilities/Grid.svelte';
import Helpers from '../utilities/Helpers.svelte';
import UtilitiesHome from '../utilities/Home.svelte';
import Sizing from '../utilities/Sizing.svelte';
import Text from '../utilities/Text.svelte';

import GuidelinesHome from '../guidelines/Home.svelte';
import Svelte from '../guidelines/Svelte.svelte';
import type { SvelteComponent } from 'svelte';

interface IRoute {
  component: typeof SvelteComponent;
  disabled: boolean;
  group?: string;
  href: string;
  title: string;
}

export type TRoutes = IRoute[];

export interface IMenuGroups {
  routes: TRoutes;
  title: string;
}

const overview = { disabled: false, href: '/', title: 'Overblik', component: Home };

export const components = {
  routes: [
    { disabled: false, href: '/components/accordion', title: 'Accordion', group: 'components', component: Accordion },
    {
      disabled: false,
      href: '/components/articlecard',
      title: 'Article card',
      group: 'components',
      component: ArticleCard,
    },
    { disabled: false, href: '/components/badge', title: 'Badge', group: 'components', component: Badge },
    { disabled: false, href: '/components/button', title: 'Button', group: 'components', component: Button },
    {
      disabled: false,
      href: '/components/buttongroup',
      title: 'Button group',
      group: 'components',
      component: ButtonGroup,
    },
    { disabled: false, href: '/components/card', title: 'Card', group: 'components', component: Card },
    {
      disabled: false,
      href: '/components/form-elements',
      title: 'Form elements',
      group: 'components',
      component: FormElement,
    },
    { disabled: false, href: '/components/icon', title: 'Icon', group: 'components', component: Icon },
    {
      disabled: false,
      href: '/components/horizontalscroll',
      title: 'Horizontal scroll',
      group: 'components',
      component: HorizontalScroll,
    },
    { disabled: false, href: '/components/tabs', title: 'Tabs', group: 'components', component: Tabs },
    { disabled: false, href: '/components/spinner', title: 'Spinner', group: 'components', component: Spinner },
    { disabled: false, href: '/components/toggler', title: 'Toggler', group: 'components', component: Toggler },
    { disabled: false, href: '/components/tooltip', title: 'Tooltip', group: 'components', component: Tooltip },
  ],
  title: 'Components',
};

export const utilities = {
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

export const guidelines = {
  routes: [{ disabled: false, href: '/guidelines/svelte', title: 'Svelte', group: 'guidelines', component: Svelte }],
  title: 'Guidelines',
};

export const routes: TRoutes = [overview, ...components.routes, ...utilities.routes, ...guidelines.routes];

export const menuItems: IMenuGroups[] = [components, utilities, guidelines];
