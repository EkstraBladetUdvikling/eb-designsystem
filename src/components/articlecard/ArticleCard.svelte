<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { TCardType } from '../../types/Card';

  import { parseDate } from '../../misc/parsedate';

  import Badge from '../badge/Badge.svelte';
  import Card from '../card/Card.svelte';
  import Icon from '../icon/Icon.svelte';
  import Toggler from '../toggler/Toggler.svelte';

  interface IMediaOptions {
    className: string;
    height: string;
    src: string;
    width: string;
  }

  export let title: string;

  export let breaking: boolean = false;
  export let cardType: TCardType = undefined;
  export let className: string = undefined;
  export let colorClass: string = undefined;
  export let id: number = undefined;
  export let loading: boolean = false;
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

  $: styleProp = `${style}; --color--list-hover: var(--color--${colorClass}); --fgcolor--list-hover: var(--fgcolor--${colorClass});`;
  $: cssClass = className ? `${className} ${baseClass}` : baseClass;

  function toggleSave(evt: CustomEvent<any>): void {
    dispatch('save', {
      id,
      save: evt.detail,
    });
  }
</script>

<Card {url} className={cssClass} style={styleProp} data-breaking={breaking} on:click>
  <div class={innerClass}>
    {#if loading}
      <div class="card-media">
        <div class="card-image bg--graa4" style={loadingStyle} />
      </div>
    {/if}
    {#if media}
      <div class="card-media {media.className}">
        {#if update}
          <Badge
            className="margin-s position-absolute padding-none padding-s--r card--shadow bg--black fontsize-small"
            style="bottom: 5px;  left: 5px;"
          >
            <Icon
              name="lightning"
              className="bg--white color--{colorClass} border-radius-s padding-s margin-s--r"
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
      <div class="card-icon flex flex-justify--end">
        {#if premium}
          <Icon name="ebplus_icon" width="20" />
        {/if}
      </div>
      <div class="card-content">
        {#if saved !== undefined}
          <Toggler className="card-save-toggle" defaultState={saved} on:toggle={toggleSave}>
            <slot slot="on">
              <Icon
                type="fa"
                className="fas fa-star"
                style="color: var(--fgcolor--{breaking ? 'breaking' : colorClass});"
              />
            </slot>
            <slot slot="off">
              <Icon
                type="fa"
                className="far fa-star"
                style="color: var(--fgcolor--{breaking ? 'breaking' : colorClass});"
              />
            </slot>
          </Toggler>
        {/if}
        {#if section || published}
          <div class="card-meta flex fontsize-xxsmall padding-s--b">
            {#if section}
              <div class="card-meta-item">
                <span class="flex flex-justify--center">
                  <Icon flipped={true} name="tagregular" width="12" />
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
          </div>
        {/if}
        <h2 class="card-title {truncateTitle ? 'card-title--truncated' : ''}" style={titleStyle}>{title}</h2>
      </div>
    </div>
  </div>
</Card>
