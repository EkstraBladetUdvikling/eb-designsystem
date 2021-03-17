<script lang="ts">
  import Accordion from '../../src/_components/accordion';
  import ArticleCard from '../../src/_components/articlecard';
  import HorizontalScroll from '../../src/_components/horizontalScroll';

  let articles = [
    {
      href: '#',
      isPlus: true,
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Sport',
      timestamp: '2 timer siden',
      title: 'List element 1',
    },
    {
      href: '#',
      isPlus: true,
      section: 'Nyheder',
      timestamp: '3 timer siden',
      title: 'Det skal jo altså ikke være for nemt',
    },
    {
      href: '#',
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Sport',
      timestamp: '4 timer siden',
      title: 'List element 3',
    },
    {
      href: '#',
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Sport',
      timestamp: '5 timer siden',
      title: 'List element 4',
    },
  ];
</script>

<h1 class="color--eb">Horizontal Scroll</h1>
<div class="grid-width--small">
  <HorizontalScroll title="Liste med artikler">
    {#each articles as article}
      <ArticleCard {...article} style="width: 215px;" />
    {/each}
  </HorizontalScroll>
</div>

<div class="grid-width--small">
  <HorizontalScroll title="Liste med artikler DARKMODE">
    {#each articles as article}
      <ArticleCard theme="darkmode" {...article} style="width: 215px;" />
    {/each}
  </HorizontalScroll>
</div>
