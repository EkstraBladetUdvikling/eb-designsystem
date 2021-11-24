import AsyncForEach from '../exportedfunctions/AsyncForEach.svelte';
import ParseDate from '../exportedfunctions/Parsedate.svelte';
import SplitNfitTitle from '../exportedfunctions/SplitNfitTitle.svelte';
import SplitTitle from '../exportedfunctions/SplitTitle.svelte';
import Throttle from '../exportedfunctions/Throttle.svelte';
import Tooltip from '../exportedfunctions/Tooltip.svelte';

export const exportedfunctions = {
  href: '/exportedfunctions',
  routes: [
    { component: AsyncForEach, href: '/exportedfunctions/asyncforeach', title: 'AsyncForEach' },
    { component: ParseDate, href: '/exportedfunctions/parsedate', title: 'ParseDate' },
    { component: SplitNfitTitle, href: '/exportedfunctions/splitnfittitle', title: 'SplitNfitTitle' },
    { component: SplitTitle, href: '/exportedfunctions/splittitle', title: 'SplitTitle' },
    { component: Throttle, href: '/exportedfunctions/throttle', title: 'Throttle' },
    { component: Tooltip, href: '/exportedfunctions/tooltip', title: 'Tooltip' },
  ],
  title: 'Functions',
};
