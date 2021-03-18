<script lang="ts">
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
      timestamp: 'Thu Mar 18 2021 20:46:32',
      title: 'List element 1',
    },
    {
      href: '#',
      isPlus: true,
      section: 'Nyheder',
      timestamp: 'Thu Mar 18 2021 18:46:32',
      title: 'Det skal jo altså ikke være for nemt',
    },
    {
      href: '#',
      isBreaking: true,
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Sport',
      timestamp: 'Thu Mar 18 2021 17:46:32',
      title: 'List element 3',
    },
    {
      href: '#',
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Sport',
      timestamp: 'Thu Mar 17 2021 21:46:32',
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
