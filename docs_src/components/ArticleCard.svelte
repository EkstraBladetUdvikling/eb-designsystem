<script lang="ts">
  import Prism from 'svelte-prism';
  import { rdmArticleData } from '../util';
  import { sourceType } from '../stores';
  import { ArticleCard, Badge } from '../../src';
</script>

<h1 class="color--eb">Article Card</h1>

{#if $sourceType === 'svelte'}
  <Prism language="js">
    {`import { ArticleCard } from '@ekstra-bladet/designsystem';`}
  </Prism>

  <table class="table">
    <thead>
      <tr>
        <th>Prop name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>className</td>
        <td>string</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>colorClass</td>
        <td>string</td>
        <td />
        <td>EB color <em>(e.g. sport)</em></td>
      </tr>
      <tr>
        <td>href</td>
        <td>string</td>
        <td />
        <td>Coverts the ArticleCard into a clickable link</td>
      </tr>
      <tr>
        <td>isBreaking</td>
        <td>boolean</td>
        <td>false</td>
        <td />
      </tr>
      <tr>
        <td>isPlus</td>
        <td>boolean</td>
        <td>false</td>
        <td />
      </tr>
      <tr>
        <td>loading</td>
        <td>boolean</td>
        <td>false</td>
        <td>Converts the ArticleCard into a loading placeholder</td>
      </tr>
      <tr>
        <td>maxLines</td>
        <td>number</td>
        <td>4</td>
        <td>Sets the value of <code>--max-lines</code> if truncate is enabled</td>
      </tr>
      <tr>
        <td>media</td>
        <td>IMediaOptions</td>
        <td />
        <td>Adds a image, see <Badge type="secondary" extension="small">Media</Badge> props below for details</td>
      </tr>
      <tr>
        <td>section</td>
        <td>string</td>
        <td />
        <td>Displays the section meta with a tag icon</td>
      </tr>
      <tr>
        <td>style</td>
        <td>string</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>timestamp</td>
        <td>date string</td>
        <td />
        <td>Displays relative time meta with a icon</td>
      </tr>
      <tr>
        <td>truncateTitle</td>
        <td>boolean</td>
        <td>false</td>
        <td />
      </tr>
      <tr>
        <td>type</td>
        <td>'mode' | 'small-media' | 'small-media--reverse'</td>
        <td />
        <td>Display types. See examples below</td>
      </tr>
      <tr>
        <th colspan="4">Media</th>
      </tr>
      <tr>
        <td>className</td>
        <td>string</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>height</td>
        <td>string</td>
        <td />
        <td /></tr
      >
      <tr>
        <td>src <Badge type="primary" extension="small">required</Badge></td>
        <td>string</td>
        <td />
        <td /></tr
      >
      <tr>
        <td>width</td>
        <td>string</td>
        <td />
        <td /></tr
      >
      <tr>
        <th colspan="4">Intersection observer</th>
      </tr>
      <tr>
        <td>intersection</td>
        <td>boolean</td>
        <td>false</td>
        <td>Enables IntersectionObserver <em>(articleCardInview)</em></td>
      </tr>
      <tr>
        <td>intersectionRoot</td>
        <td>string | null</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>intersectionThreshold</td>
        <td>number</td>
        <td>0.5</td>
        <td />
      </tr>
      <tr>
        <td>intersectionData</td>
        <td>any</td>
        <td>&#123;&#125;</td>
        <td>The data send via the CustomEvent detail property</td>
      </tr>
    </tbody>
  </table>

  <ArticleCard {...rdmArticleData()} />

  <Prism language="html">
    {`<ArticleCard {...article} />`}
  </Prism>

  <h3>Small-media</h3>

  <ArticleCard className="margin-m--b" type="small-media" {...rdmArticleData(250, 120)} />
  <ArticleCard type="small-media--reverse" {...rdmArticleData(250, 120)} />

  <Prism language="html">
    {`<ArticleCard className="small-media" {...article} />
<ArticleCard className="small-media--reverse" {...article} />`}
  </Prism>

  <h3>Loading placeholder</h3>

  <ArticleCard loading={true} />
  <ArticleCard loading={true} type="small-media" />
  <ArticleCard loading={true} type="small-media--reverse" />

  <Prism language="html">
    {`<ArticleCard loading={true} />
<ArticleCard loading={true} type="small-media" />
<ArticleCard loading={true} type="small-media--reverse" />`}
  </Prism>

  <h3>Intersection</h3>

  <Prism language="html">
    {`<ArticleCard {...article} intersection={true} />`}
  </Prism>
{:else}
  <p>ArticleCard er en ren Svelte component.</p>
{/if}
