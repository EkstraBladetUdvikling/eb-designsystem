<script lang="ts">
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  import { colorNames } from '@ekstra-bladet/eb-colors';
  import { createEventDispatcher } from 'svelte';

  import { timePassedSince } from '../../functions/timepassedsince';

  import Icon from '../icon/Icon.svelte';

  import type { IMediaOptions } from './ArticleCard';
  import type { TCardType } from '../../types/Card';



  interface Props {
    loading?: boolean;
    title?: string;
    breaking?: boolean;
    cardType?: TCardType | undefined;
    className?: string | undefined;
    colorName?: string | undefined;
    premiumMarkerSize?: 'small' | undefined;
    id?: number | undefined;
    update?: boolean;
    maxLines?: number | undefined;
    media?: Partial<IMediaOptions> | undefined;
    premium?: boolean;
    published?: string | undefined;
    saved?: boolean | undefined;
    section?: string | undefined;
    style?: string;
    truncateTitle?: boolean;
    url?: string | undefined;
    videoIcon?: boolean;
    width?: string;
    children?: import('svelte').Snippet;
  }

  let {
    loading = false,
    title = '',
    breaking = false,
    cardType = undefined,
    className = undefined,
    colorName = undefined,
    premiumMarkerSize = undefined,
    id = undefined,
    update = false,
    maxLines = undefined,
    media = undefined,
    premium = false,
    published = undefined,
    saved = undefined,
    section = undefined,
    style = '',
    truncateTitle = false,
    url = undefined,
    videoIcon = false,
    width = '100%',
    children
  }: Props = $props();

  const dispatch = createEventDispatcher();
  let baseClass = $state(`card-mode card-mode--article`);

  let loadingStyle = $state('padding-top: 56.25%; width: 100%;');
  if (loading) {
    baseClass = `${baseClass} animation-fogwave`;

    switch (cardType) {
      case 'small-media':
      case 'small-media--reverse':
        loadingStyle = 'width: 200px;height: 115px;';
        break;
    }
  }

  let innerClass = $state('card-inner');

  switch (cardType) {
    case 'small-media':
      innerClass = `${innerClass} card--small-media`;
      break;
    case 'small-media--reverse':
      innerClass = `${innerClass} card--small-media card--small-media--reverse`;
      break;
  }

  const titleStyle = maxLines ? `--max-lines: ${maxLines};` : undefined;

  let styleProp = $derived(`${style}; --color--list: var(--color--${
    breaking ? colorNames.breaking : colorName
  }); --fgcolor--list: var(--fgcolor--${breaking ? colorNames.breaking : colorName}); --card-width: ${width};`);

  let cssClass = $derived(className ? `${className} ${baseClass}` : baseClass);

  let mediaCssClass = $derived(media && media.className ? `${media.className} card-media` : 'card-media');

  function toggleSave(didSave: boolean): void {
    dispatch('save', {
      id,
      save: didSave,
    });
  }
</script>

{#if loading || (!loading && title)}
  <a href={url} class={cssClass} style={styleProp} data-breaking={breaking} onclick={bubble('click')}>
    <div class={innerClass}>
      {#if premium}
        <div class="premium-dogear {premiumMarkerSize ? `premium-dogear--${premiumMarkerSize}` : ''}">
          <Icon className="color--white" name="ebplus-white" />
        </div>
      {/if}
      {#if loading}
        <div class="card-media">
          <div class="card-image bg--graa4" style={loadingStyle}></div>
        </div>
      {/if}
      {#if media}
        <div class={mediaCssClass}>
          {#if update}
            <span
              class="badge margin-s position-absolute padding-none padding-s--r card--shadow bg--black fontsize-small"
              style="bottom: 5px; left: 5px;"
            >
              <Icon
                name="lightning"
                className="bg--white color--{colorName} border-radius-s padding-s margin-s--r"
                style="margin-left: -1px;"
                width="15"
              />
              UPDATE
            </span>
          {/if}
          {#if videoIcon}
            <div class="video-icon">
              <Icon className="color--white" name="video-graphic" width="25" />
            </div>
          {/if}
          <img
            alt={title}
            class="card-image"
            src={media.src}
            height={media.height}
            width={media.width}
            style="width: {media.width}px"
          />
        </div>
      {/if}
      <div class="card-content-wrapper">
        <div class="card-content">
          {#if section || published}
            <div class="card-meta flex flex-wrap--wrap fontsize-xxsmall">
              {#if section && section !== 'New Articles'}
                <div class="card-meta-item">
                  <span class="flex flex-justify--center">
                    <Icon name="tag" width="12" />
                    <span class="padding-s--l">{section}</span>
                  </span>
                </div>
              {/if}
              {#if published}
                <div class="card-meta-item">
                  <Icon name="clock" width="12" />
                  <span class="padding-s--l">{timePassedSince(published)}</span>
                </div>
              {/if}
              {#if saved !== undefined}
                <button
                  class="toggle-button card-meta-item padding-m--r padding-s--b"
                  onclick={(evt) => {
                    evt.preventDefault();
                    toggleSave(!saved);
                  }}
                >
                  {#if saved}
                    <Icon name="bookmark-solid" style="color: var(--fgcolor--list);" width={12} />
                    <span class="padding-s--l" style="color: var(--fgcolor--list);">Gemt</span>
                  {:else}
                    <Icon name="bookmark" style="color: var(--fgcolor--list);" width={12} />
                    <span class="padding-s--l" style="color: var(--fgcolor--list);">Gem</span>
                  {/if}
                  {@render children?.()}
                </button>
              {/if}
            </div>
          {/if}
          {#if videoIcon && !media}
            <div class="video-icon">
              <Icon className="color--white" name="video-graphic" width="20" />
            </div>
          {/if}
          <h2
            class="card-title"
            class:padding-l--r={videoIcon && !media}
            class:card-title--truncate={truncateTitle}
            style={titleStyle}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  </a>
{/if}
