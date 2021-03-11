<script lang="ts">
  import Prism from 'svelte-prism';

  import ArticleCard from '../../src/_components/articlecard';

  let article = {
    href: '#',
    media: {
      src: 'https://via.placeholder.com/610x343&text=610x343',
    },
    section: 'Sport',
    timestamp: '2 timer siden',
    title: 'List element',
  };
</script>

<div class="grid-width--small">
  <h1 class="color--eb">ArticleCard</h1>
  <Prism
    language="js"
    source={`
    import ArticleCard from '@ekstra-bladet/designsystem/src/_components/articlecard';
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
    export let href: string = undefined;
    export let media: Partial<IMediaOptions> = undefined;
    export let section: string = undefined;
    export let style: string = undefined;
    export let timestamp: string = undefined;
    export let title: string;
    export let type: string = undefined;
  `}
  />

  <ArticleCard {...article} />

  <Prism
    language="js"
    source={`
    let article = {
      href: '#',
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Sport',
      timestamp: '2 timer siden',
      title: 'List element',
    };
    `}
  />
  <ArticleCard
    href={article.href}
    media={{ src: 'https://via.placeholder.com/610x343&text=610x343' }}
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
    <ArticleCard {...article} media="{{
      height: '115',
      src: 'https://via.placeholder.com/200x112&text=200x112',
      width: '200',
    }}" title="Small media reverse card list element" type="small-media--reverse" />
  `}
  />

  <div class="flex">
    <ArticleCard {...article} />
    <ArticleCard {...article} />
  </div>
  <div class="flex">
    <ArticleCard {...article} />
    <ArticleCard {...article} />
    <ArticleCard {...article} />
  </div>
</div>
