import HorizontalScrollHandler from '../exportedfunctions/HorizontalScrollHandler.svelte';
import SplitNfitname from '../exportedfunctions/SplitNfitTitle.svelte';
import Splitname from '../exportedfunctions/SplitTitle.svelte';
import Throttle from '../exportedfunctions/Throttle.svelte';
import TimePassedSince from '../exportedfunctions/TimePassedSince.svelte';
import Tooltip from '../exportedfunctions/Tooltip.svelte';

export const exportedfunctions = {
  path: '/exportedfunctions',
  routes: [
    {
      component: HorizontalScrollHandler,
      path: '/exportedfunctions/horizontalscrollhandler',
      name: 'HorizontalScrollHandler',
    },
    { component: SplitNfitname, path: '/exportedfunctions/splitnfitname', name: 'SplitNfitname' },
    { component: Splitname, path: '/exportedfunctions/splitname', name: 'Splitname' },
    { component: Throttle, path: '/exportedfunctions/throttle', name: 'Throttle' },
    { component: TimePassedSince, path: '/exportedfunctions/timepassedsince', name: 'TimePassedSince' },
    { component: Tooltip, path: '/exportedfunctions/tooltip', name: 'Tooltip' },
  ],
  name: 'Functions',
};
