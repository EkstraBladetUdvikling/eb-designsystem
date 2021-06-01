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
import PillNavigation from '../components/PillNavigation.svelte';
import Spinner from '../components/Spinner.svelte';
import Toggler from '../components/Toggler.svelte';
import Tooltip from '../components/Tooltip.svelte';
import Animation from '../utilities/Animation.svelte';
import DataTheme from '../utilities/DataTheme.svelte';
import Flex from '../utilities/Flex.svelte';
import Fonts from '../utilities/Fonts.svelte';
import Grid from '../utilities/Grid.svelte';
import Helpers from '../utilities/Helpers.svelte';
import Sizing from '../utilities/Sizing.svelte';
import Text from '../utilities/Text.svelte';

const routes = [
  { link: '/', title: 'Overblik', component: Home },
  { link: '/components/accordion', title: 'Accordion', type: 'component', component: Accordion },
  { link: '/components/articlecard', title: 'Article card', type: 'component', component: ArticleCard },
  { link: '/components/badge', title: 'Badge', type: 'component', component: Badge },
  { link: '/components/button', title: 'Button', type: 'component', component: Button },
  { link: '/components/buttongroup', title: 'Button group', type: 'component', component: ButtonGroup },
  { link: '/components/card', title: 'Card', type: 'component', component: Card },
  { link: '/components/form-elements', title: 'Form elements', type: 'component', component: FormElement },
  { link: '/components/icon', title: 'Icon', type: 'component', component: Icon },
  { link: '/components/horizontalscroll', title: 'Horizontal scroll', type: 'component', component: HorizontalScroll },
  { link: '/components/pillnavigation', title: 'Pill navigation', type: 'component', component: PillNavigation },
  { link: '/components/spinner', title: 'Spinner', type: 'component', component: Spinner },
  { link: '/components/toggler', title: 'Toggler', type: 'component', component: Toggler },
  { link: '/components/tooltip', title: 'Tooltip', type: 'component', component: Tooltip },
  { link: '/utilities/animation', title: 'Animation', type: 'utility', component: Animation },
  { link: '/utilities/datatheme', title: 'Data theme', type: 'utility', component: DataTheme },
  { link: '/utilities/flex', title: 'Flex', type: 'utility', component: Flex },
  { link: '/utilities/fonts', title: 'Fonts', type: 'utility', component: Fonts },
  { link: '/utilities/grid', title: 'Grid', type: 'utility', component: Grid },
  { link: '/utilities/helpers', title: 'Helpers', type: 'utility', component: Helpers },
  { link: '/utilities/sizing', title: 'Sizing', type: 'utility', component: Sizing },
  { link: '/utilities/text', title: 'Text', type: 'utility', component: Text },
];

export default routes;
