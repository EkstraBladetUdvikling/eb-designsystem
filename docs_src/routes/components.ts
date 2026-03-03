import Card from '../components/Card.svelte';
import HorizontalScroll from '../components/HorizontalScroll.svelte';
import Icon from '../components/Icon.svelte';

export const components = {
  href: '/components',
  routes: [
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
  ],
  title: 'Components',
};
