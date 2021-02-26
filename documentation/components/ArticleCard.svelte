<script lang="ts">
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

  let article_small = {
    ...article,
    // media: {
    //   height: '115',
    //   src:'https://via.placeholder.com/200x112&text=200x112',
    //   width:'200'
    // },
    title: 'List element small card',
    type: 'small-media',
  };

  let article_small_rev = {
    ...article,
    media: {
      height: '115',
      src: 'https://via.placeholder.com/200x112&text=200x112',
      width: '200',
    },
    title: 'Small media reverse card list element',
    type: 'small-media--reverse',
  };
</script>

<div class="grid-width--small">
  <h1 class="color--eb">ArticleCard</h1>

  <ArticleCard {...article} />
  <ArticleCard {...article_small} />
  <ArticleCard {...article_small_rev} />
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
