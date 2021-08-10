import Home from './Home.svelte';

import Accordion from '../components/Accordion.svelte';
import ArticleCard from '../components/ArticleCard.svelte';
import Badge from '../components/Badge.svelte';
import Button from '../components/Button.svelte';
import ButtonGroup from '../components/ButtonGroup.svelte';
import Card from '../components/Card.svelte';
import FormElement from '../components/FormElement.svelte';
import Icon from '../components/Icon.svelte';
import HorizontalScroll from '../components/HorizontalScroll.svelte';
import Spinner from '../components/Spinner.svelte';
import Tabs from '../components/Tabs.svelte';
import Toggler from '../components/Toggler.svelte';
import Tooltip from '../components/Tooltip.svelte';

import Animation from '../utilities/Animation.svelte';
import Border from '../utilities/Border.svelte';
import Color from '../utilities/Color.svelte';
import DataTheme from '../utilities/DataTheme.svelte';
import Flex from '../utilities/Flex.svelte';
import Fonts from '../utilities/Fonts.svelte';
import Grid from '../utilities/Grid.svelte';
import Helpers from '../utilities/Helpers.svelte';
import Sizing from '../utilities/Sizing.svelte';
import Text from '../utilities/Text.svelte';

import Svelte from '../guidelines/Svelte.svelte';

const routes = [
  { link: '/', title: 'Overblik', component: Home },
  { link: '/components/accordion', title: 'Accordion', group: 'components', component: Accordion },
  { link: '/components/articlecard', title: 'Article card', group: 'components', component: ArticleCard },
  { link: '/components/badge', title: 'Badge', group: 'components', component: Badge },
  { link: '/components/button', title: 'Button', group: 'components', component: Button },
  { link: '/components/buttongroup', title: 'Button group', group: 'components', component: ButtonGroup },
  { link: '/components/card', title: 'Card', group: 'components', component: Card },
  { link: '/components/form-elements', title: 'Form elements', group: 'components', component: FormElement },
  { link: '/components/icon', title: 'Icon', group: 'components', component: Icon },
  { link: '/components/horizontalscroll', title: 'Horizontal scroll', group: 'components', component: HorizontalScroll },
  { link: '/components/tabs', title: 'Tabs', group: 'components', component: Tabs },
  { link: '/components/spinner', title: 'Spinner', group: 'components', component: Spinner },
  { link: '/components/toggler', title: 'Toggler', group: 'components', component: Toggler },
  { link: '/components/tooltip', title: 'Tooltip', group: 'components', component: Tooltip },
  { link: '/utilities/animation', title: 'Animation', group: 'utilities', component: Animation },
  { link: '/utilities/border', title: 'Border', group: 'utilities', component: Border },
  { link: '/utilities/color', title: 'Color', group: 'utilities', component: Color },
  { link: '/utilities/datatheme', title: 'Data theme', group: 'utilities', component: DataTheme },
  { link: '/utilities/flex', title: 'Flex', group: 'utilities', component: Flex },
  { link: '/utilities/fonts', title: 'Fonts', group: 'utilities', component: Fonts },
  { link: '/utilities/grid', title: 'Grid', group: 'utilities', component: Grid },
  { link: '/utilities/helpers', title: 'Helpers', group: 'utilities', component: Helpers },
  { link: '/utilities/sizing', title: 'Sizing', group: 'utilities', component: Sizing },
  { link: '/utilities/text', title: 'Text', group: 'utilities', component: Text },
  { link: '/guidelines/svelte', title: 'Svelte', group: 'guidelines', component: Svelte },
];

export default routes;
