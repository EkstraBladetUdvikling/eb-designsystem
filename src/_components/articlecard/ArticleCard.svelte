<script lang="ts">
  import type { TCardType } from '../../types/Card';
  import type { TThemes } from '../../_utilities/data-theme/DataTheme';

  import { onMount } from 'svelte';
  import { Background } from '@ekstra-bladet/eb-colors/dist/eb-colors';
  import { parseDate } from '../../misc/parsedate';

  import Card from '../card';
  import Icon from '../icon';
  import Accordion from '../accordion';

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
  export let maxLines: number = undefined;
  export let section: string = undefined;
  export let style: string = '';
  export let timestamp: string = undefined;
  export let title: string;
  export let type: TCardType = undefined;
  export let intersection: boolean = false;
  export let intersectionRoot: string | null = undefined;
  export let intersectionThreshold: number = 0.5;
  export let intersectionData: any = {};

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
  let element: Element;
  let options = {
    root: intersectionRoot ? document.querySelector(intersectionRoot) : null,
    rootMargin: '0px',
    threshold: intersectionThreshold,
    trackVisibility: true,
    delay: 100,
  };
  let observer = new IntersectionObserver((entries) => {
    const isVisible = entries[0].isVisible ? entries[0].isVisible : entries[0].isIntersecting;
    console.log(entries[0]);

    if (isVisible) {
      const intersectedEvent = new CustomEvent('articleCardInview', {
        detail: intersectionData,
      });
      document.dispatchEvent(intersectedEvent);
      observer.unobserve(element);
    }
  }, options);

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined' && intersection) {
      observer.observe(element);
      return () => observer.unobserve(element);
    }
  });

  const titleStyle = maxLines ? `--max-lines: ${maxLines};` : undefined;

  style = `${style}; --color--list-hover: var(--color--${colorClass}); --fgcolor--list-hover: var(--fgcolor--${colorClass});`;
</script>

<div bind:this={element}>
  <Card {href} className={baseClass} {style} data-breaking={isBreaking}>
    <div class={innerClass}>
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
      <div class="card-content-wrapper">
        <div class="card-icon flex flex-justify--end">
          {#if isPlus}
            <Icon name="ebplus_icon" width="20" />
          {/if}
        </div>
        <div class="card-content">
          {#if section || timestamp}
            <div class="card-meta flex fontsize-xxsmall padding-s--b">
              {#if section}
                <div class="card-meta-item">
                  <span class="flex flex-justify--center">
                    <Icon flipped={true} name="tag-regular" width="12" />
                    <span class="padding-s--l">{section}</span>
                  </span>
                </div>
              {/if}
              {#if timestamp}
                <div class="card-meta-item">
                  <Icon name="clock" width="12" />
                  <span class="padding-s--l">{parseDate(timestamp)}</span>
                </div>
              {/if}
            </div>
          {/if}
          <h2 class="card-title card-title--truncated" style={titleStyle}>{title}</h2>
        </div>
      </div>
    </div>
  </Card>
</div>
