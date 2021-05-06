<script lang="ts">
  import { ArticleCard, HorizontalScroll } from '../../src';

  let articles = [
    {
      href: '#',
      isPlus: true,
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Udenlandsk fodbold',
      colorClass: 'sport',
      timestamp: 'Thu Mar 18 2021 20:46:32',
      title: `Sag om rockervold: 'Når han er på stoffer, siger han ting, der ikke passer'`,
    },
    {
      href: '#',
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Landsholds foldbold',
      colorClass: 'sport',
      timestamp: 'Thu Mar 18 2021 17:46:32',
      title: `Sag om rockervold: 'Når han er på stoffer, siger han ting, der ikke passer' - to til tre gange `,
    },
    {
      href: '#',
      isPlus: true,
      section: 'Nyheder',
      colorClass: 'nyheder',
      timestamp: 'Thu Mar 18 2021 18:46:32',
      title: `Sag om rockervold: 'Når han er på stoffer, siger han ting, der ikke passer' - to til tre gange`,
    },
    {
      href: '#',
      isBreaking: true,
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Sport',
      colorClass: 'sport',
      timestamp: 'Thu Mar 17 2021 21:46:32',
      title: 'List element 4',
    },
    {
      href: '#',
      isPlus: true,
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Sport',
      colorClass: 'sport',
      timestamp: 'Thu Mar 18 2021 20:46:32',
      title: 'List element 1',
    },
    {
      href: '#',
      isPlus: true,
      section: 'Nyheder',
      colorClass: 'nyheder',
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
      colorClass: 'sport',
      timestamp: 'Thu Mar 18 2021 17:46:32',
      title: 'List element 3',
    },
    {
      href: '#',
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Sport',
      colorClass: 'sport',
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
