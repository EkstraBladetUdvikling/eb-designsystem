<script lang="ts">
  import Prism from 'svelte-prism';

  import { sourceType } from '../stores';
</script>

<h1 class="color--eb">Card</h1>

{#if $sourceType === 'svelte'}
  <p>Only valid as a HTML-standard element</p>
{:else}
  <h3>Card slots</h3>
  <div class="card margin-l--b">
    <div class="card-header">Header</div>
    <div class="card-media">
      <img src="https://loremflickr.com/1280/400/cat" alt="" />
    </div>
    <div class="card-content">Content</div>
    <div class="card-footer">Footer</div>
  </div>

  <Prism language="html">
    {`<div class="card">
  <div class="card-header"></div>
  <div class="card-media">
    <img src="" alt="">
  </div>
   <div class="card-content"></div>
  <div class="card-footer"></div>
</div>`}
  </Prism>

  <h3>Small media card</h3>

  <div class="card card--small-media margin-l--b">
    <div class="card-media">
      <img src="https://loremflickr.com/250/120/dog" alt="" />
    </div>
    <div class="card-content">Content</div>
  </div>

  <Prism language="html">
    {`<div class="card card--small-media">
  <div class="card-media">
    <img src="" alt="" />
  </div>
  <div class="card-content"></div>
</div>`}
  </Prism>

  <h3>Force landscape image</h3>
  <p>To force the image in a card to landscape view, use class <em>card-media--landscape</em></p>
{/if}
