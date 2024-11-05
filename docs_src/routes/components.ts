import ArticleCard from '../components/ArticleCard.svelte';
import Badge from '../components/Badge.svelte';
import Button from '../components/Button.svelte';
import ButtonGroup from '../components/ButtonGroup.svelte';
import Card from '../components/Card.svelte';
import HorizontalScroll from '../components/HorizontalScroll.svelte';
import Icon from '../components/Icon.svelte';
import Spinner from '../components/Spinner.svelte';

export const components = {
  href: '/components',
  routes: [
    {
      component: ArticleCard,
      href: '/components/articlecard',
      title: 'Article card',
    },
    {
      component: Badge,
      href: '/components/badge',
      title: 'Badge',
    },
    {
      component: Button,
      href: '/components/button',
      title: 'Button',
    },
    {
      component: ButtonGroup,
      href: '/components/buttongroup',
      title: 'Button group',
    },
    {
      component: Card,
      href: '/components/card',
      title: 'Card',
    },
    {
      component: Icon,
      href: '/components/icon',
      title: 'Icon',
    },
    {
      component: HorizontalScroll,
      href: '/components/horizontalscroll',
      title: 'Horizontal scroll',
    },
    {
      component: Spinner,
      href: '/components/spinner',
      title: 'Spinner',
    },
  ],
  title: 'Components',
};
