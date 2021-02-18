<script lang="typescript">
  import Card from "../card";

  export let title: string;
  export let href: string = undefined;
  export let media: string = undefined;
  export let section: string = undefined;
  export let timestamp: string = undefined;

</script>


<Card {href} className="margin-m">
  {#if media}
  <div class="card-media">
    <img alt={title} class="card-image" src={media} height="343" width="610">
  </div>
  {/if}
  <div class="card-content">
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
  </div>
</Card>
