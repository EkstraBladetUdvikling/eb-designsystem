<script lang="ts">
  import { colorNames } from '@ekstra-bladet/eb-colors';
  import { createEventDispatcher } from 'svelte';

  import { timePassedSince } from '../../functions/timepassedsince';

  import Icon from '../icon/Icon.svelte';
  import Toggler from '../toggler/Toggler.svelte';

  import type { IMediaOptions } from './ArticleCard';
  import type { TCardType } from '../../types/Card';

  export let loading: boolean = false;

  export let title: string = '';

  export let breaking: boolean = false;
  export let cardType: TCardType | undefined = undefined;
  export let className: string | undefined = undefined;
  export let colorName: string | undefined = undefined;
  export let premiumMarkerSize: 'small' | undefined = undefined;
  export let id: number | undefined = undefined;
  export let update: boolean = false;
  export let maxLines: number | undefined = undefined;
  export let media: Partial<IMediaOptions> | undefined = undefined;
  export let premium: boolean = false;
  export let published: string | undefined = undefined;
  export let saved: boolean | undefined = undefined;
  export let section: string | undefined = undefined;
  export let style: string = '';
  export let truncateTitle: boolean = false;
  export let url: string | undefined = undefined;
  export let videoIcon: boolean = false;
  export let width: string = '100%';

  const dispatch = createEventDispatcher();
  let baseClass = `card-mode card-mode--article`;

  let loadingStyle = 'padding-top: 56.25%; width: 100%;';
  if (loading) {
    baseClass = `${baseClass} animation-fogwave`;

    switch (cardType) {
      case 'small-media':
      case 'small-media--reverse':
        loadingStyle = 'width: 200px;height: 115px;';
        break;
    }
  }

  let innerClass = 'card-inner';

  switch (cardType) {
    case 'small-media':
      innerClass = `${innerClass} card--small-media`;
      break;
    case 'small-media--reverse':
      innerClass = `${innerClass} card--small-media card--small-media--reverse`;
      break;
  }

  const titleStyle = maxLines ? `--max-lines: ${maxLines};` : undefined;

  $: styleProp = `${style}; --color--list: var(--color--${
    breaking ? colorNames.breaking : colorName
  }); --fgcolor--list: var(--fgcolor--${breaking ? colorNames.breaking : colorName}); --card-width: ${width};`;

  $: cssClass = className ? `${className} ${baseClass}` : baseClass;

  $: mediaCssClass = media && media.className ? `${media.className} card-media` : 'card-media';

  function toggleSave(evt: CustomEvent<any>): void {
    dispatch('save', {
      id,
      save: evt.detail,
    });
  }
</script>

{#if loading || (!loading && title)}
  <a href={url} class={cssClass} style={styleProp} data-breaking={breaking} on:click>
    <div class={innerClass}>
      {#if premium}
        <div class="premium-dogear {premiumMarkerSize ? `premium-dogear--${premiumMarkerSize}` : ''}">
          <Icon className="color--white" name="ebplus-white" />
        </div>
      {/if}
      {#if loading}
        <div class="card-media">
          <div class="card-image bg--graa4" style={loadingStyle} />
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
                <Toggler
                  className="card-meta-item padding-m--r padding-s--b"
                  defaultState={saved}
                  on:toggle={toggleSave}
                >
                  <slot slot="on">
                    <Icon name="bookmark-solid" style="color: var(--fgcolor--list);" width={12} />
                    <span class="padding-s--l" style="color: var(--fgcolor--list);">Gemt</span>
                  </slot>
                  <slot slot="off">
                    <Icon name="bookmark" style="color: var(--fgcolor--list);" width={12} />
                    <span class="padding-s--l" style="color: var(--fgcolor--list);">Gem</span>
                  </slot>
                </Toggler>
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
