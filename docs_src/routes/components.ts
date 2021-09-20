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
    { href: '/components/accordion', title: 'Accordion', group: 'components', component: Accordion },
    {
      href: '/components/articlecard',
      title: 'Article card',
      group: 'components',
      component: ArticleCard,
    },
    {
      href: '/components/articlelist',
      title: 'Article list',
      group: 'components',
      component: ArticleList,
    },
    { href: '/components/badge', title: 'Badge', group: 'components', component: Badge },
    { href: '/components/button', title: 'Button', group: 'components', component: Button },
    {
      href: '/components/buttongroup',
      title: 'Button group',
      group: 'components',
      component: ButtonGroup,
    },
    { href: '/components/card', title: 'Card', group: 'components', component: Card },
    {
      href: '/components/form-elements',
      title: 'Form elements',
      group: 'components',
      component: FormElement,
    },
    { href: '/components/icon', title: 'Icon', group: 'components', component: Icon },
    {
      href: '/components/horizontalscroll',
      title: 'Horizontal scroll',
      group: 'components',
      component: HorizontalScroll,
    },
    { href: '/components/tabs', title: 'Tabs', group: 'components', component: Tabs },
    { href: '/components/spinner', title: 'Spinner', group: 'components', component: Spinner },
    { href: '/components/toggler', title: 'Toggler', group: 'components', component: Toggler },
    { href: '/components/tooltip', title: 'Tooltip', group: 'components', component: Tooltip },
  ],
  title: 'Components',
};
