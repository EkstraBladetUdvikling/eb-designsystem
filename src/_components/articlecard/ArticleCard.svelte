<script lang="ts">
  import type { TCardType } from '../../types/Card';

  import Card from '../card';

  interface IMediaOptions {
    className: string;
    height: string;
    src: string;
    width: string;
  }

  export let className: string = undefined;
  export let href: string = undefined;
  export let loading: boolean = false;
  export let media: Partial<IMediaOptions> = undefined;
  export let section: string = undefined;
  export let style: string = undefined;
  export let timestamp: string = undefined;
  export let title: string;
  export let type: TCardType = undefined;

  let baseClass = `margin-m`;

  if (className) baseClass = `${className} ${baseClass}`;

  let loadingStyle = 'padding-top: 56.25%; width: 100%;';
  if (loading) {
    baseClass = `${baseClass} animation-fogwave`;

    title = 'Loading';

    switch (type) {
      case 'small-media':
      case 'small-media--reverse':
        loadingStyle = 'width: 200px;height: 115px;';
        break;
    }
  }
</script>

<Card {href} className={baseClass} {style} {type}>
  {#if loading}
    <div class="card-media">
      <div class="card-image bg--graa4" style={loadingStyle} />
    </div>
  {/if}
  {#if media}
    <div class="card-media">
      <img alt={title} class="card-image" src={media.src} height={media.height} width={media.width} />
    </div>
  {/if}
  <slot slot="content">
    {#if section || timestamp}
      <p class="card-meta color--graa3">
        <small>
          {#if section}
            <span class="color--sport">{section}</span>
          {/if}
          {#if section && timestamp}
            -
          {/if}
          {#if timestamp}
            {timestamp}
          {/if}
        </small>
      </p>
    {/if}
    <h2 class="card-title">{title}</h2>
  </slot>
</Card>
