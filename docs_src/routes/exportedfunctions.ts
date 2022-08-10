import HorizontalScrollHandler from '../exportedfunctions/HorizontalScrollHandler.svelte';
import SplitNfitTitle from '../exportedfunctions/SplitNfitTitle.svelte';
import SplitTitle from '../exportedfunctions/SplitTitle.svelte';
import Throttle from '../exportedfunctions/Throttle.svelte';
import TimePassedSince from '../exportedfunctions/TimePassedSince.svelte';
import Tooltip from '../exportedfunctions/Tooltip.svelte';

export const exportedfunctions = {
  href: '/exportedfunctions',
  routes: [
    {
      component: HorizontalScrollHandler,
      href: '/exportedfunctions/horizontalscrollhandler',
      title: 'HorizontalScrollHandler',
    },
    { component: TimePassedSince, href: '/exportedfunctions/timepassedsince', title: 'TimePassedSince' },
    { component: SplitNfitTitle, href: '/exportedfunctions/splitnfittitle', title: 'SplitNfitTitle' },
    { component: SplitTitle, href: '/exportedfunctions/splittitle', title: 'SplitTitle' },
    { component: Throttle, href: '/exportedfunctions/throttle', title: 'Throttle' },
    { component: Tooltip, href: '/exportedfunctions/tooltip', title: 'Tooltip' },
  ],
  title: 'Functions',
};
