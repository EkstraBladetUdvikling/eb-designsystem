<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { parseDate } from '../../functions/parsedate';

  import Badge from '../badge/Badge.svelte';
  import Card from '../card/Card.svelte';
  import Icon from '../icon/Icon.svelte';
  import Toggler from '../toggler/Toggler.svelte';
  import { colorNames } from '@ekstra-bladet/eb-colors';

  import type { TCardType } from '../../types/Card';
  import type { IMediaOptions } from './ArticleCard';

  export let loading: boolean = false;

  export let title: string = '';

  export let breaking: boolean = false;
  export let cardType: TCardType = undefined;
  export let className: string = undefined;
  export let colorName: string = undefined;
  export let id: number = undefined;
  export let update: boolean = false;
  export let maxLines: number = undefined;
  export let media: Partial<IMediaOptions> = undefined;
  export let premium: boolean = false;
  export let published: string = undefined;
  export let saved: boolean = undefined;
  export let section: string = undefined;
  export let style: string = '';
  export let truncateTitle: boolean = false;
  export let url: string = undefined;
  export let width: string = '100%';

  const dispatch = createEventDispatcher();
  let baseClass = `card-mode card-mode--article`;

  let loadingStyle = 'padding-top: 56.25%; width: 100%;';
  if (loading) {
    baseClass = `${baseClass} animation-fogwave`;

    title = 'Loading';

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

  $: styleProp = `${style}; --color--list-hover: var(--color--${
    breaking ? colorNames.breaking : colorName
  }); --fgcolor--list-hover: var(--fgcolor--${breaking ? colorNames.breaking : colorName}); --card-width: ${width};`;

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
  <Card {url} className={cssClass} style={styleProp} data-breaking={breaking} on:click>
    <div class={innerClass}>
      {#if premium}
        <div class="premium-dogear">
          <Icon className="color--white" name="ebplus" width="20" />
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
            <Badge
              className="margin-s position-absolute padding-none padding-s--r card--shadow bg--black fontsize-small"
              style="bottom: 5px; left: 5px;"
            >
              <Icon
                name="lightning"
                className="bg--white color--{colorName} border-radius-s padding-s margin-s--r"
                style="margin-left: -1px;"
                width="15"
              />
              UPDATE
            </Badge>
          {/if}
          <img alt={title} class="card-image" src={media.src} height={media.height} width={media.width} />
        </div>
      {/if}
      <div class="card-content-wrapper">
        <div class="card-content">
          {#if section || published}
            <div class="card-meta flex fontsize-xxsmall padding-s--b">
              {#if section}
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
                  <span class="padding-s--l">{parseDate(published)}</span>
                </div>
              {/if}
              {#if saved !== undefined}
                <Toggler className="card-meta-item" defaultState={saved} on:toggle={toggleSave}>
                  <slot slot="on">
                    <Icon name="bookmarksolid" style="color: var(--fgcolor--list-hover);" width={12} />
                    <span class="padding-s--l" style="color: var(--fgcolor--list-hover);">Gemt</span>
                  </slot>
                  <slot slot="off">
                    <Icon name="bookmark" style="color: var(--fgcolor--list-hover);" width={12} />
                    <span class="padding-s--l" style="color: var(--fgcolor--list-hover);">Gem</span>
                  </slot>
                </Toggler>
              {/if}
            </div>
          {/if}
          <h2 class="card-title {truncateTitle ? 'card-title--truncated' : ''}" style={titleStyle}>{title}</h2>
        </div>
      </div>
    </div>
  </Card>
{/if}
