import ArticleCard from '../components/ArticleCard.svelte';
import Badge from '../components/Badge.svelte';
import Button from '../components/Button.svelte';
import ButtonGroup from '../components/ButtonGroup.svelte';
import Card from '../components/Card.svelte';
import HorizontalScroll from '../components/HorizontalScroll.svelte';
import Icon from '../components/Icon.svelte';
import Spinner from '../components/Spinner.svelte';

export const components = {
  path: '/components',
  routes: [
    {
      component: ArticleCard,
      path: '/components/articlecard',
      name: 'Article card',
    },
    {
      component: Badge,
      path: '/components/badge',
      name: 'Badge',
    },
    {
      component: Button,
      path: '/components/button',
      name: 'Button',
    },
    {
      component: ButtonGroup,
      path: '/components/buttongroup',
      name: 'Button group',
    },
    {
      component: Card,
      path: '/components/card',
      name: 'Card',
    },
    {
      component: Icon,
      path: '/components/icon',
      name: 'Icon',
    },
    {
      component: HorizontalScroll,
      path: '/components/horizontalscroll',
      name: 'Horizontal scroll',
    },
    {
      component: Spinner,
      path: '/components/spinner',
      name: 'Spinner',
    },
  ],
  name: 'Components',
};
