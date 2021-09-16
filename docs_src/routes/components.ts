import Accordion from '../components/Accordion.svelte';
import ArticleCard from '../components/ArticleCard.svelte';
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
    { disabled: false, href: '/components/accordion', title: 'Accordion', group: 'components', component: Accordion },
    {
      disabled: false,
      href: '/components/articlecard',
      title: 'Article card',
      group: 'components',
      component: ArticleCard,
    },
    { disabled: false, href: '/components/badge', title: 'Badge', group: 'components', component: Badge },
    { disabled: false, href: '/components/button', title: 'Button', group: 'components', component: Button },
    {
      disabled: false,
      href: '/components/buttongroup',
      title: 'Button group',
      group: 'components',
      component: ButtonGroup,
    },
    { disabled: false, href: '/components/card', title: 'Card', group: 'components', component: Card },
    {
      disabled: false,
      href: '/components/form-elements',
      title: 'Form elements',
      group: 'components',
      component: FormElement,
    },
    { disabled: false, href: '/components/icon', title: 'Icon', group: 'components', component: Icon },
    {
      disabled: false,
      href: '/components/horizontalscroll',
      title: 'Horizontal scroll',
      group: 'components',
      component: HorizontalScroll,
    },
    { disabled: false, href: '/components/tabs', title: 'Tabs', group: 'components', component: Tabs },
    { disabled: false, href: '/components/spinner', title: 'Spinner', group: 'components', component: Spinner },
    { disabled: false, href: '/components/toggler', title: 'Toggler', group: 'components', component: Toggler },
    { disabled: false, href: '/components/tooltip', title: 'Tooltip', group: 'components', component: Tooltip },
  ],
  title: 'Components',
};
