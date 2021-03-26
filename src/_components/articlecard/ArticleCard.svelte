<script lang="ts">
  import type { TCardType } from '../../types/Card';
  import type { TThemes } from '../../_utilities/data-theme/DataTheme';

  import { Background } from '@ekstra-bladet/eb-colors/dist/eb-colors';
  import { parseDate } from '../../misc/parsedate';

  import Card from '../card';
  import Icon from '../icon';

  interface IMediaOptions {
    className: string;
    height: string;
    src: string;
    width: string;
  }

  export let className: string = undefined;
  export let colorClass: string = undefined;
  export let href: string = undefined;
  export let loading: boolean = false;
  export let isBreaking: boolean = false;
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

  let sectionColor;

  if (colorClass) {
    try {
      sectionColor = Background[colorClass.charAt(0).toUpperCase() + colorClass.slice(1)].backgroundColor;
    } catch (error) {
      console.error('ArticleCard.svelte . colorClass error', error);
    }
  }
</script>

<Card {href} className={baseClass} {style} {theme} data-breaking={isBreaking}>
  <div class={innerClass} data-theme={theme}>
    {#if loading}
      <div class="card-media">
        <div class="card-image bg--graa4" style={loadingStyle} />
      </div>
    {/if}
    {#if media}
      <div class="card-media" style="border-color: {sectionColor};">
        <img alt={title} class="card-image" src={media.src} height={media.height} width={media.width} />
      </div>
    {/if}
    <div class="card-content-wrapper" style="border-color: {sectionColor};">
      {#if isPlus}
        <div class="card-icon flex flex-justify--end">
          <Icon name="ebplus_icon" width="20" />
        </div>
      {/if}

      <div class="card-content">
        {#if section || timestamp}
          <div class="card-meta flex fontsize-xxsmall">
            {#if section}
              <div class="card-meta-item">
                <Icon flipped={true} name="tag-regular" width="8" />
                <span>{section}</span>
              </div>
            {/if}
            {#if timestamp}
              <div class="card-meta-item">
                <Icon name="clock" width="8" />
                {parseDate(timestamp)}
              </div>
            {/if}
          </div>
        {/if}
        <h2 class="card-title">{title}</h2>
      </div>
    </div>
  </div>
</Card>
