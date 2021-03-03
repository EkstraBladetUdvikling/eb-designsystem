<script lang="ts" context="module">
  import AngleDown from './svgs/angle-down-regular.svelte';
  import AngleLeft from './svgs/angle-left-regular.svelte';
  import AngleRight from './svgs/angle-right-regular.svelte';
  import AngleUp from './svgs/angle-up-regular.svelte';
  import Article from './svgs/article.svelte';
  import Check from './svgs/check_pro.svelte';
  import CreditCard from './svgs/credit_card.svelte';
  import EbplusIcon from './svgs/ebplus_icon.svelte';
  import EbplusSort from './svgs/ebplus_sort.svelte';
  import Envelope from './svgs/envelope.svelte';
  import Gallery from './svgs/gallery.svelte';
  import Headphones from './svgs/headphones.svelte';
  import Headset from './svgs/headset.svelte';
  import Lock from './svgs/lock.svelte';
  import Medielogin from './svgs/medielogin.svelte';
  import MenuBars from './svgs/menu-bars.svelte';
  import MitebRegular from './svgs/miteb-regular.svelte';
  import MitebSolid from './svgs/miteb-solid.svelte';
  import Mobilphone from './svgs/mobil_fone.svelte';
  import Newspaper from './svgs/newspaper.svelte';
  import PlayCircle from './svgs/play-circle-light.svelte';
  import TagRegular from './svgs/tag-regular.svelte';
  import TagSolid from './svgs/tag-solid.svelte';
  import TagsRegular from './svgs/tags-regular.svelte';
  import TagsSolid from './svgs/tags-solid.svelte';
  import Video from './svgs/video.svelte';

  export type IconTypes =
    | 'angledown'
    | 'angleleft'
    | 'angleright'
    | 'angleup'
    | 'article'
    | 'check'
    | 'creditcard'
    | 'ebplusicon'
    | 'ebplussort'
    | 'envelope'
    | 'gallery'
    | 'headphones'
    | 'headset'
    | 'lock'
    | 'medielogin'
    | 'menubars'
    | 'mitebregular'
    | 'mitebsolid'
    | 'mobilphone'
    | 'newspaper'
    | 'playcircle'
    | 'tagregular'
    | 'tagsolid'
    | 'tagsregular'
    | 'tagssolid'
    | 'video';

  export const icons = {
    angledown: AngleDown,
    angleleft: AngleLeft,
    angleright: AngleRight,
    angleup: AngleUp,
    article: Article,
    check: Check,
    creditcard: CreditCard,
    ebplusicon: EbplusIcon,
    ebplussort: EbplusSort,
    envelope: Envelope,
    gallery: Gallery,
    headphones: Headphones,
    headset: Headset,
    lock: Lock,
    medielogin: Medielogin,
    menubars: MenuBars,
    mitebregular: MitebRegular,
    mitebsolid: MitebSolid,
    mobilphone: Mobilphone,
    newspaper: Newspaper,
    playcircle: PlayCircle,
    tagregular: TagRegular,
    tagsolid: TagSolid,
    tagsregular: TagsRegular,
    tagssolid: TagsSolid,
    video: Video,
  };
</script>

<script lang="ts">
  export let className: string = undefined;
  export let name: IconTypes;
  export let style: string = 'width: 36px; height: 36px;';
  export let viewBox: string;
  export let type: 'svg' | 'fa' = 'svg';

  if (!viewBox) {
    viewBox = '0 0 50 50';
  }
</script>

{#if type === 'svg'}
  <svg {viewBox} {style} class="icon-svg {className}">
    <svelte:component this={icons[name]} />
  </svg>
{:else}
  <i class={className} aria-hidden="true" />
{/if}
