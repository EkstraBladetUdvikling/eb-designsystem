<script lang="ts">
  import Prism from 'svelte-prism';

  import { ArticleCard } from '../../src/_components';

  let article = {
    href: '#',
    media: {
      src: 'https://via.placeholder.com/610x343&text=610x343',
    },
    section: 'Sport',
    colorClass: 'sport',
    timestamp: 'Thu Mar 18 2021 20:46:32',
    title: 'List element',
  };

  let article1 = {
    href: '#',
    media: {
      src: 'https://via.placeholder.com/610x343&text=610x343',
    },
    section: 'Underholdning',
    colorClass: 'underholdning',
    timestamp: 'Thu Mar 28 2021 20:46:32',
    title: 'List element',
  };

  let article2 = {
    href: '#',
    isPlus: true,
    media: {
      src: 'https://via.placeholder.com/610x343&text=610x343',
    },
    section: 'Udenlandsk fodbold',
    colorClass: 'sport',
    timestamp: 'Thu Mar 31 2021 20:46:32',
    title: `Sag om rockervold: 'Når han er på stoffer, siger han ting, der ikke passer'`,
  };
  document.addEventListener(
    'articleCardInview',
    function (e) {
      console.log('articleCardInview', e);
    },
    false
  );
</script>

<div class="grid-width--small">
  <h1 class="color--eb">ArticleCard</h1>
  <Prism
    language="js"
    source={`
    import { ArticleCard } from '@ekstra-bladet/designsystem/src/_components';
    `}
  />
  <p>ArticleCard attributer</p>
  <Prism
    language="js"
    source={`
    interface IMediaOptions {
      className: string;
      height: string;
      src: string;
      width: string;
    }

    export let className: string = undefined;
    export let colorClass: string = undefined;
    export let href: string = undefined;
    export let loading: boolean = false;
    export let isBreaking: boolean = false;
    export let isPlus: boolean = false;
    export let media: Partial<IMediaOptions> = undefined;
    export let maxLines: number = undefined;
    export let section: string = undefined;
    export let style: string = undefined;
    export let theme: TThemes = undefined;
    export let timestamp: string = undefined;
    export let title: string;
    export let type: TCardType = undefined;
  `}
  />

  <ArticleCard {...article} intersection={true} />

  <ArticleCard {...article1} />

  <ArticleCard {...article2} />

  <Prism
    language="js"
    source={`
    let article = {
      href: '#',
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Sport',
      colorClass: 'sport',
      timestamp: 'Thu Mar 18 2021 20:46:32',
      title: 'List element',
    };
    `}
  />
  <ArticleCard
    colorClass={article.colorClass}
    href={article.href}
    media={undefined}
    section={article.section}
    timestamp={article.timestamp}
    title={article.title}
  />
  <Prism
    language="html"
    source={`
    <ArticleCard href="{article.href}" media="{{src:'https://via.placeholder.com/610x343&text=610x343'}}" section="{article.section}" timestamp="{article.timestamp}" title="{article.title}" />
    <ArticleCard {...article} />
  `}
  />

  <ArticleCard {...article} title="Small media card list element" type="small-media" />
  <Prism
    language="html"
    source={`
    <ArticleCard {...article} title="Small media card list element" type="small-media" />
  `}
  />

  <ArticleCard
    {...article}
    maxLines={2}
    media={{
      height: '115',
      src: 'https://via.placeholder.com/200x112&text=200x112',
      width: '200',
    }}
    title="Small media reverse card list element"
    type="small-media--reverse"
  />
  <Prism
    language="html"
    source={`
    <ArticleCard
      {...article}
      maxLines={2}
      media="{{
        height: '115',
        src: 'https://via.placeholder.com/200x112&text=200x112',
        width: '200',
      }}"
      title="Small media reverse card list element"
      type="small-media--reverse" />
  `}
  />

  <h2>Loading placeholder</h2>

  <ArticleCard loading={true} />
  <ArticleCard loading={true} type="small-media" />
  <ArticleCard loading={true} type="small-media--reverse" />

  <Prism
    language="html"
    source={`
      <ArticleCard loading={true} />
      <ArticleCard loading={true} type="small-media" />
      <ArticleCard loading={true} type="small-media--reverse" />
    `}
  />

  <ArticleCard isPlus={true} {...article} style="width: 215px;" />
</div>
