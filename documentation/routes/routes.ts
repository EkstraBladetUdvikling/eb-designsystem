import Home from './Home.svelte';
import Accordion from '../components/Accordion.svelte';
import ArticleCard from '../components/ArticleCard.svelte';
import Button from '../components/Button.svelte';
import Card from '../components/Card.svelte';
import Icon from '../components/Icon.svelte';
import HorizontalScroll from '../components/HorizontalScroll.svelte';
import DataTheme from '../utilities/DataTheme/DataTheme.svelte';

const routes = [
  { link: '/', title: 'Forside', component: Home },
  { link: '/components/accordion', title: 'Accordion', type: 'component', component: Accordion },
  { link: '/components/articlecard', title: 'Article Card', component: ArticleCard },
  { link: '/components/button', title: 'Button', type: 'component', component: Button },
  { link: '/components/card', title: 'Card', type: 'component', component: Card },
  { link: '/components/icon', title: 'Icon', type: 'component', component: Icon },
  { link: '/components/horizontalscroll', title: 'Horizontal Scroll', type: 'component', component: HorizontalScroll },
  { link: '/utilities/datatheme', title: 'Data-theme', type: 'utility', component: DataTheme },
];

export default routes;
