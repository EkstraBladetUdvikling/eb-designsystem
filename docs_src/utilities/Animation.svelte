<script lang="ts">
  import Prism from 'svelte-prism';

  import { ArticleCard, Badge, Tabs, Tab, TabContent, TabList } from '../../src/';

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

<div class="grid-width--large">
  <h1 class="color--eb">Animation</h1>
  <h3>Anvendelse af animationer</h3>
  <p>Animationer anvendes ved tilføjelse af class: <code>className="animation-navnPåAnimation"</code></p>
  <p>Denne class kan anvendes på tværs af vores komponenter</p>
  <p>
    <b>OBS:</b> anvendes en animation direkte på et html-element skal det anvendes på følgende måde:
    <code>class="animation-navnPåAnimation"</code>
  </p>
  <h3>Eksempler på animationer</h3>
  <Tabs>
    <div class="flex flex-justify--end width-1of1">
      <TabList>
        <Tab><i class="fas fa-cubes" /></Tab>
        <Tab><i class="fas fa-code" /></Tab>
      </TabList>
    </div>
    <TabContent>
      <div class="flex grid-width--small">
        <ArticleCard
          className="animation-fogwave"
          media={{ src: 'https://via.placeholder.com/610x343&text=610x343' }}
          published={article.timestamp}
          section={article.section}
          title={article.title}
          url={article.href}
        />
      </div>
      <div class="flex grid-width--small">
        <Badge href="#" className="margin-s bg--bluedark animation-fogwave">Bandekriminialitet</Badge>
        <Badge href="#" className="margin-s bg--green animation-fogwave">Sport</Badge>
        <Badge href="#" className="margin-s bg--greendark animation-fogwave">Nicklas Bendtner</Badge>
      </div>
    </TabContent>
    <TabContent>
      <Prism
        language="html"
        source={`<ArticleCard
          className="animation-fogwave"
          href="{article.href}"
          media="{{src:'https://via.placeholder.com/610x343&text=610x343'}}"
          section="{article.section}"
          timestamp="{article.timestamp}"
          title="{article.title}"
          />`}
      />
      <Prism
        language="html"
        source={`<Badge href="#" className="margin-s bg--greendark animation-fogwave">Nicklas Bendtner</Badge>`}
      />
      <Prism
        language="html"
        source={`<a href="#" class="badge badge--primary animation-fogwave margin-s--r">Bandekriminialitet</a>`}
      />
    </TabContent>
  </Tabs>

  <h3>Overblik over animationer</h3>
  <div class="grid-width--large">
    <div class="flex flex-item--center bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);">
      <div class="width-1of3 padding-m fontweight-bold">Class</div>
      <div class="width-1of3 padding-m fontweight-bold">Use case</div>
    </div>
    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);">
      <div class="flex-item--center width-1of3 padding-m">animation-fogwave</div>
      <div class="flex-item--center width-2of3 padding-m">
        <Prism language="html" source={`<component className="animation-fogwave"/></component>`} />
      </div>
    </div>
  </div>
</div>
