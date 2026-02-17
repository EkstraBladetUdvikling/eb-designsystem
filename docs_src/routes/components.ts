import Badge from '../components/Badge.svelte';
import Card from '../components/Card.svelte';
import HorizontalScroll from '../components/HorizontalScroll.svelte';
import Icon from '../components/Icon.svelte';
import Spinner from '../components/Spinner.svelte';

export const components = {
  href: '/components',
  routes: [
    {
      component: Badge,
      href: '/components/badge',
      title: 'Badge',
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
