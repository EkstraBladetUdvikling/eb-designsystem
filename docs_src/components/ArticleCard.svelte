<script lang="ts">
  import Prism from 'svelte-prism';

  import { ArticleCard } from '../../src';

  let article = {
    src: '#',
    media: {
      src: 'https://via.placeholder.com/610x343&text=610x343',
    },
    section: 'Sport',
    colorClass: 'sport',
    published: 'Thu Mar 18 2021 20:46:32',
    title: 'List element',
  };

  let article1 = {
    src: '#',
    media: {
      src: 'https://via.placeholder.com/610x343&text=610x343',
    },
    section: 'Underholdning',
    colorClass: 'underholdning',
    published: 'Thu Mar 28 2021 20:46:32',
    title: 'List element',
  };

  let article2 = {
    src: '#',
    isPlus: true,
    media: {
      src: 'https://via.placeholder.com/610x343&text=610x343',
    },
    section: 'Udenlandsk fodbold',
    colorClass: 'sport',
    published: 'Thu Mar 31 2021 20:46:32',
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
    import { ArticleCard } from '@ekstra-bladet/designsystem';
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

    export let breaking: boolean = false;
    export let className: string = undefined;
    export let colorClass: string = undefined;
    export let loading: boolean = false;
    export let maxLines: number = undefined;
    export let media: Partial<IMediaOptions> = undefined;
    export let premium: boolean = false;
    export let published: string = undefined;
    export let section: string = undefined;
    export let src: string = undefined;
    export let style: string = undefined;
    export let theme: TThemes = undefined;
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
      src: '#',
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Sport',
      colorClass: 'sport',
      published: 'Thu Mar 18 2021 20:46:32',
      title: 'List element',
    };
    `}
  />
  <ArticleCard
    colorClass={article.colorClass}
    src={article.src}
    media={undefined}
    section={article.section}
    published={article.published}
    title={article.title}
  />
  <Prism
    language="html"
    source={`
    <ArticleCard src="{article.src}" media="{{src:'https://via.placeholder.com/610x343&text=610x343'}}" section="{article.section}" published="{article.published}" title="{article.title}" />
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

  <ArticleCard premium={true} {...article} style="width: 215px;" />
</div>
