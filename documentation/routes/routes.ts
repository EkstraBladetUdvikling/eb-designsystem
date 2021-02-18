import Home from './Home.svelte';
import Accordion from '../components/Accordion.svelte';
import Button from '../components/Button.svelte';
import Card from '../components/Card.svelte';
import Icon from '../components/Icon.svelte';
import HorizontalScroll from '../components/HorizontalScroll.svelte';
import Menu from '../components/Menu.svelte';
import DataTheme from '../utilities/DataTheme/DataTheme.svelte';

const routes = {
  '/': Home,
  '/components/accordion': Accordion,
  '/components/button': Button,
  '/components/card': Card,
  '/components/icon': Icon,
  '/components/horizontalscroll': HorizontalScroll,
  '/components/menu': Menu,
  '/utilities/datatheme': DataTheme,
};

export default routes;
