<script lang="ts">
  import Prism from 'svelte-prism';

  import { ArticleCard } from '../../src';
  import { rdmArticleData } from '../util';
  import { sourceType } from '../stores';

  const save = (save: boolean) => {
    return save;
  };
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
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>colorClass</td>
        <td>string</td>
        <td></td>
        <td>EB color <em>(e.g. sport)</em></td>
      </tr>
      <tr>
        <td>src</td>
        <td>string</td>
        <td></td>
        <td>Converts the ArticleCard into a clickable link</td>
      </tr>
      <tr>
        <td>breaking</td>
        <td>boolean</td>
        <td>false</td>
        <td>Force breaking color</td>
      </tr>
      <tr>
        <td>update</td>
        <td>boolean</td>
        <td>false</td>
        <td>Add update icon to media</td>
      </tr>
      <tr>
        <td>premium</td>
        <td>boolean</td>
        <td>false</td>
        <td></td>
      </tr>
      <tr>
        <td>videoIcon</td>
        <td>boolean</td>
        <td>false</td>
        <td>Shows a videoPlay icon on the articleCard inside the image container</td>
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
        <td></td>
        <td>
          Adds a image, see <span class="badge badge--small" data-type="secondary">Media</span> props below for details
        </td>
      </tr>
      <tr>
        <td>section</td>
        <td>string</td>
        <td></td>
        <td>Displays the section meta with a tag icon</td>
      </tr>
      <tr>
        <td>style</td>
        <td>string</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>published</td>
        <td>date string</td>
        <td></td>
        <td>Displays relative time meta with a icon</td>
      </tr>
      <tr>
        <td>truncateTitle</td>
        <td>boolean</td>
        <td>false</td>
        <td></td>
      </tr>
      <tr>
        <td>cardType</td>
        <td>'mode' | 'small-media' | 'small-media--reverse'</td>
        <td></td>
        <td>Display types. See examples below</td>
      </tr>
      <tr>
        <th colspan="4">Media</th>
      </tr>
      <tr>
        <td>className</td>
        <td>string</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>height</td>
        <td>string</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>src <span class="badge badge--small" data-type="primary">required</span></td>
        <td>string</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>width</td>
        <td>string</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <ArticleCard {save} {...rdmArticleData()} />

  <Prism language="html">
    {`<ArticleCard {...article} />`}
  </Prism>

  <h3>Small-media</h3>

  <ArticleCard {save} className="margin-m--b" cardType="small-media" {...rdmArticleData(250, 120)} />
  <ArticleCard {save} cardType="small-media--reverse" {...rdmArticleData(250, 120)} />

  <Prism language="html">
    {`<ArticleCard className="small-media" {...article} />
<ArticleCard className="small-media--reverse" {...article} />`}
  </Prism>

  <h3>Loading placeholder</h3>

  <ArticleCard {save} loading={true} colorName="graa7" className="margin-m--b" />
  <ArticleCard {save} loading={true} cardType="small-media" colorName="graa7" className="margin-m--b" />
  <ArticleCard {save} loading={true} cardType="small-media--reverse" colorName="graa7" className="margin-m--b" />

  <Prism language="html">
    {`<ArticleCard loading={true} colorName="graa7" />
<ArticleCard loading={true} cardType="small-media" colorName="graa7" />
<ArticleCard loading={true} cardType="small-media--reverse" colorName="graa7" />`}
  </Prism>
{:else}
  <p>ArticleCard er en ren Svelte component.</p>
{/if}
