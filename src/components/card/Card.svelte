<script lang="ts">
  import { onMount } from 'svelte';

  import type { TThemes } from '../../utilities/data-theme/DataTheme';

  export let className: string = undefined;
  export let href: string = undefined;
  export let style: string = undefined;
  export let theme: TThemes = undefined;

  let baseClass = 'card';

  const dataProps = {};

  for (const prop in $$props) {
    if (prop.indexOf('data-') === 0) {
      dataProps[prop] = $$props[prop];
    }
  }

  export let intersection: boolean = false;
  export let intersectionRoot: string | null = undefined;
  export let intersectionThreshold: number = 0.5;
  export let intersectionData: any = {};
  let element: Element;
  let options = {
    root: intersectionRoot ? document.querySelector(intersectionRoot) : null,
    rootMargin: '0px',
    threshold: intersectionThreshold,
    trackVisibility: true,
    delay: 100,
  };
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
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

  $: cssClass = `${className} ${baseClass}`;
</script>

{#if href}
  <a {href} class={cssClass} {style} data-theme={theme} {...dataProps} bind:this={element} on:click>
    {#if $$slots.header}
      <slot name="header" class="card-header" />
    {/if}
    {#if $$slots.media}
      <slot name="media" class="card-media" />
    {/if}
    <slot />
    {#if $$slots.content}
      <div class="card-content">
        <slot name="content" />
      </div>
    {/if}
    {#if $$slots.footer}
      <div class="card-footer">
        <slot name="footer" />
      </div>
    {/if}
  </a>
{:else}
  <div class={cssClass} {style} data-theme={theme} bind:this={element} on:click>
    {#if $$slots.header}
      <div class="card-header">
        <slot name="header" />
      </div>
    {/if}
    {#if $$slots.media}
      <div class="card-media">
        <slot name="media" />
      </div>
    {/if}
    <slot />
    {#if $$slots.content}
      <div class="card-content">
        <slot name="content" />
      </div>
    {/if}
    {#if $$slots.footer}
      <div class="card-footer">
        <slot name="footer" />
      </div>
    {/if}
  </div>
{/if}
