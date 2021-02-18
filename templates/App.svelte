<script lang="ts">
  import Button from "./components/button";
  import HorizontalScroll from "./components/horizontalscroll";
  import Svg from "./Svg.svelte";
  import { Accordion } from "./components/accordion";
  let tabs = [{title: "tab 1", content: "content 1"}, {title: "tab 2", content: "content 2"}]


  import ArticleCard from './components/articlecard/ArticleCard.svelte';

  const articleOptions = {
    href: "#",
    media: "https://via.placeholder.com/300x168&text=300x168",
    section: "sport",
    timestamp: "13 timer siden",
    title: "Her er der noget indhold som vi vil være glade for",
  };
  const { href, media, section, timestamp, title } = articleOptions;


  const articles = [
    {
      href: 'a',
      section: 'Underholdning',
      timestamp: '2 timer siden',
      title: 'Aliquam ultricies felis eget orci commodo fringilla',
    },
    {
      href: 'a',
      section: 'Sport',
      timestamp: '3 timer siden',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      href: 'a',
      section: 'Nyheder',
      timestamp: '4 timer siden',
      title: 'Ekspert om ny testplan: Vil koste 100 milliarder kroner',
    },
    {
      href: 'a',
      section: 'Sport',
      timestamp: '4 timer siden',
      title: 'Aliquam ultricies felis eget orci commodo fringilla',
    }
  ]
</script>

<ArticleCard href="#" section="sport" timestamp="13 timer siden" media="https://via.placeholder.com/300x168&text=300x168" title="Her er der noget indhold som vi vil være glade for" />
<ArticleCard {...articleOptions} />
<ArticleCard {href} {media} {section} {timestamp} {title} />

<h3>Buttons</h3>

<Button>Base button</Button>
<Button type="solid">Button solid</Button>
<Button type="link">Button link</Button>

<code>
  {`<Button>Base button</Button>`}<br />
  {'<Button type="solid">Solid button</Button>'}<br />
  {'<Button type="link">Button link</Button>'}
</code>

<h3>Styles</h3>

<Button style="primary">Button primary</Button>
<Button style="secondary">Button secondary</Button>
<Button style="accept">Button accept</Button>
<Button style="cancel">Button cancel</Button>

<code>
  {'<Button style="primary">Button primary</Button>'}<br />
  {'<Button style="secondary">Button secondary</Button>'}<br />
  {'<Button style="accept">Button accept</Button>'}<br />
  {'<Button style="cancel">Button cancel</Button>'}
</code>

<h3>Icons</h3>

<Button style="primary">
  <Svg name="ekstrabladet" style="height:20px;" />
  <span>button with icon right</span>
</Button>

<Button style="primary">
  <span>button with icon left</span>
  <Svg name="ekstrabladet" style="height:20px;" />
</Button>

<Button style="primary" type="icon">
  <span style="font-size: 30px">&times;</span>
</Button>


<HorizontalScroll>
  {#each articles as {href, section, timestamp, title}}
    <ArticleCard {href} {section} {timestamp} {title} style="min-width: 250px" />
  {/each}
</HorizontalScroll>

<div class="grid-width--small">
  <h1 style="color:#12507b;font-weight: bolder">Accordion</h1>
  <Accordion tabs={tabs}/>
</div>
