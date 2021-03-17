<script lang="ts">
  import type { TCardType } from '../../types/Card';
  import type { TThemes } from '../../_utilities/data-theme/DataTheme';

  import Card from '../card';
  import Icon from '../icon';

  interface IMediaOptions {
    className: string;
    height: string;
    src: string;
    width: string;
  }

  export let className: string = undefined;
  export let href: string = undefined;
  export let loading: boolean = false;
  export let isPlus: boolean = false;
  export let media: Partial<IMediaOptions> = undefined;
  export let section: string = undefined;
  export let style: string = undefined;
  export let theme: TThemes = undefined;
  export let timestamp: string = undefined;
  export let title: string;
  export let type: TCardType = undefined;

  let baseClass = `card-mode card-mode--article margin-s`;

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

  let innerClass = 'card-inner';

  switch (type) {
    case 'mode':
      baseClass = `card-mode card-mode--article`;
      break;
    case 'small-media':
      innerClass = `${innerClass} card--small-media`;
      break;
    case 'small-media--reverse':
      innerClass = `${innerClass} card--small-media card--small-media--reverse`;
      break;
  }
</script>

<Card {href} className={baseClass} {style} {theme}>
  <div class={innerClass} data-theme={theme}>
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
    {#if section}
      <div class="card-section-border bg--{section.toLowerCase()}" />
    {/if}
    <div class="flex-column flex-column--reverse flex-item--grow flex-justify--between">
      {#if isPlus}
        <div class="card-icon flex flex-justify--end">
          <Icon name="ebplus_icon" width="20" />
        </div>
      {/if}

      <div class="card-content">
        {#if section || timestamp}
          <div class="card-meta flex fontsize-xxsmall">
            {#if section}
              <div class="width-1of2">
                <Icon flipped={true} name="tag-regular" width="8" />
                <span>{section}</span>
              </div>
            {/if}
            {#if timestamp}
              <div class="width-1of2">
                <Icon name="clock" width="8" />
                {timestamp}
              </div>
            {/if}
          </div>
        {/if}
        <h2 class="card-title">{title}</h2>
      </div>
    </div>
  </div>
</Card>
