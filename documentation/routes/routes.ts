import Home from './Home.svelte';
import Accordion from '../components/Accordion.svelte';
import ArticleCard from '../components/ArticleCard.svelte';
import Button from '../components/Button.svelte';
import Card from '../components/Card.svelte';
import Icon from '../components/Icon.svelte';
import HorizontalScroll from '../components/HorizontalScroll.svelte';
import Menu from '../components/Menu.svelte';
import DataTheme from '../utilities/DataTheme/DataTheme.svelte';

const routes = [
  { link: '/', title: 'Forside', component: Home },
  { link: '/components/accordion', title: 'Accordion', component: Accordion },
  { link: '/components/articlecard', title: 'Article Card', component: ArticleCard },
  { link: '/components/button', title: 'Button', component: Button },
  { link: '/components/card', title: 'Card', component: Card },
  { link: '/components/icon', title: 'Icon', component: Icon },
  { link: '/components/horizontalscroll', title: 'Horizontal Scroll', component: HorizontalScroll },
  { link: '/components/menu', title: 'Menu', component: Menu },
  { link: '/utilities/datatheme', title: 'Data-theme', component: DataTheme },
];

export default routes;
