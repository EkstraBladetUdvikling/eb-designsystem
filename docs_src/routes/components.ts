import Accordion from '../components/Accordion.svelte';
import ArticleCard from '../components/ArticleCard.svelte';
import ArticleList from '../components/ArticleList.svelte';
import Badge from '../components/Badge.svelte';
import Button from '../components/Button.svelte';
import ButtonGroup from '../components/ButtonGroup.svelte';
import Card from '../components/Card.svelte';
import FormElement from '../components/FormElement.svelte';
import Icon from '../components/Icon.svelte';
import HorizontalScroll from '../components/HorizontalScroll.svelte';
import Spinner from '../components/Spinner.svelte';
import Tabs from '../components/Tabs.svelte';
import Toggler from '../components/Toggler.svelte';
import Tooltip from '../components/Tooltip.svelte';

export const components = {
  href: '/components',
  routes: [
    { href: '/components/accordion', title: 'Accordion', component: Accordion },
    {
      href: '/components/articlecard',
      title: 'Article card',
      component: ArticleCard,
    },
    {
      href: '/components/articlelist',
      title: 'Article list',

      component: ArticleList,
    },
    { href: '/components/badge', title: 'Badge', component: Badge },
    { href: '/components/button', title: 'Button', component: Button },
    {
      href: '/components/buttongroup',
      title: 'Button group',

      component: ButtonGroup,
    },
    { href: '/components/card', title: 'Card', component: Card },
    {
      href: '/components/form-elements',
      title: 'Form elements',

      component: FormElement,
    },
    { href: '/components/icon', title: 'Icon', component: Icon },
    {
      href: '/components/horizontalscroll',
      title: 'Horizontal scroll',

      component: HorizontalScroll,
    },
    { href: '/components/tabs', title: 'Tabs', component: Tabs },
    { href: '/components/spinner', title: 'Spinner', component: Spinner },
    { href: '/components/toggler', title: 'Toggler', component: Toggler },
    { href: '/components/tooltip', title: 'Tooltip', component: Tooltip },
  ],
  title: 'Components',
};
