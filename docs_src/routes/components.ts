import Accordion from '../components/Accordion.svelte';
import ArticleCard from '../components/ArticleCard.svelte';
import ArticleList from '../components/ArticleList.svelte';
import Badge from '../components/Badge.svelte';
import Button from '../components/Button.svelte';
import ButtonGroup from '../components/ButtonGroup.svelte';
import Card from '../components/Card.svelte';
import FormElement from '../components/FormElement.svelte';
import HorizontalScroll from '../components/HorizontalScroll.svelte';
import Icon from '../components/Icon.svelte';
import Spinner from '../components/Spinner.svelte';
import Tabs from '../components/Tabs.svelte';
import Toggler from '../components/Toggler.svelte';

export const components = {
  href: '/components',
  routes: [
    {
      component: Accordion,
      href: '/components/accordion',
      title: 'Accordion',
    },
    {
      component: ArticleCard,
      href: '/components/articlecard',
      title: 'Article card',
    },
    {
      component: ArticleList,
      href: '/components/articlelist',
      title: 'Article list',
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
      component: FormElement,
      href: '/components/form-elements',
      title: 'Form elements',
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
      component: Tabs,
      href: '/components/tabs',
      title: 'Tabs',
    },
    {
      component: Spinner,
      href: '/components/spinner',
      title: 'Spinner',
    },
    {
      component: Toggler,
      href: '/components/toggler',
      title: 'Toggler',
    },
  ],
  title: 'Components',
};
