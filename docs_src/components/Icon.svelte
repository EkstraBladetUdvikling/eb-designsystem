<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Card, Icon } from '../../src';
  import { iconnames } from '../../src/components/icon/svgs/iconnames';

  let source = '';

  sourceType.subscribe((value) => {
    source = value;
  });
</script>

<h1 class="color--eb">Icon library</h1>

{#if source === 'svelte'}
  <Prism language="js">
    {`import { Icon } from '@ekstra-bladet/designsystem';`}
  </Prism>
{/if}

<h3>Der findes følgende svg ikoner</h3>

<div class="flex flex-wrap--wrap">
  {#each iconnames as name}
    <Card className="flex-align--center flex-justify--center margin-s padding-m">
      <Icon {name} className="margin-s" style="width: 36px; height: 36px;" />
      <small>{name}</small>
    </Card>
  {/each}
</div>

{#if source === 'svelte'}
  <Prism language="html">
    {`<Icon name="icon_name" />`}
  </Prism>
{:else}
  <Prism language="html">
    {`<svg viewBox="0 0 50 50">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_name"></use>
</svg>`}
  </Prism>
{/if}

<h3>Det er også muligt at bruge ikoner fra <a href="https://fontawesome.com/" target="_blank">Font Awesome</a></h3>

<Icon type="fa" className="fas fa-snowplow" />

{#if source === 'svelte'}
  <Prism language="html">
    {`<Icon type="fa" className="fas fa-snowplow" />`}
  </Prism>
{:else}
  <Prism language="html">
    {`<i class="fas fa-snowplow"></i>`}
  </Prism>
{/if}
