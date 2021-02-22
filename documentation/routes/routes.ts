import Home from './Home.svelte';
import Accordion from '../components/Accordion.svelte';
import ArticleCard from '../components/ArticleCard.svelte';
import Badge from '../components/Badge.svelte';
import Button from '../components/Button.svelte';
import Card from '../components/Card.svelte';
import Icon from '../components/Icon.svelte';
import HorizontalScroll from '../components/HorizontalScroll.svelte';
import Tooltip from '../components/Tooltip.svelte';
import DataTheme from '../utilities/DataTheme/DataTheme.svelte';

const routes = [
  { link: '/', title: 'Overblik', component: Home },
  { link: '/components/accordion', title: 'Accordion', type: 'component', component: Accordion },
  { link: '/components/articlecard', title: 'Article Card', type: 'component', component: ArticleCard },
  { link: '/components/badge', title: 'Badge', type: 'component', component: Badge },
  { link: '/components/button', title: 'Button', type: 'component', component: Button },
  { link: '/components/card', title: 'Card', type: 'component', component: Card },
  { link: '/components/icon', title: 'Icon', type: 'component', component: Icon },
  { link: '/components/horizontalscroll', title: 'Horizontal Scroll', type: 'component', component: HorizontalScroll },
  { link: '/components/tooltip', title: 'Tooltip', type: 'component', component: Tooltip },
  { link: '/utilities/datatheme', title: 'Data-theme', type: 'utility', component: DataTheme },
];

export default routes;
