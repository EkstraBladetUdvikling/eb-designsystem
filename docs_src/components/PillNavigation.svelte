<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import { Card, PillNavigation, Pill, PillContent, PillList } from '../../src';

  let source = '';

  sourceType.subscribe((value) => {
    source = value;
  });
</script>

<h1 class="color--eb">Pill navigation</h1>

{#if source === 'svelte'}
  <Prism language="js">
    {`import { PillNavigation, Pill, PillContent, PillList } from '@ekstra-bladet/designsystem';`}
  </Prism>

  <PillNavigation className="margin-xl--t">
    <PillList>
      <Pill>Pill 1</Pill>
      <Pill>Pill 2</Pill>
      <Pill>Pill 3</Pill>
    </PillList>
    <PillContent>
      <Card className="margin-m--t">
        <h2 slot="header">Content 1</h2>
        <div slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor sagittis metus in efficitur.
          </p>
          <p>
            Phasellus molestie scelerisque commodo. Fusce accumsan efficitur urna eu tristique. Proin semper fermentum
            ante sed molestie. Sed nec quam orci.
          </p>
          <p>Nunc diam neque, blandit a dictum id, posuere in lacus. Nulla rutrum pretium nulla.</p>
          <p>Curabitur nisi libero, pellentesque ut mi eget, efficitur efficitur sem.</p>
        </div>
      </Card>
    </PillContent>
    <PillContent>
      <Card className="margin-m--t">
        <h2 slot="header">Content 2</h2>
        <div slot="content">
          <p>Suspendisse volutpat quis sem vitae auctor. Etiam non sollicitudin nunc. Cras sit amet massa augue.</p>
          <p>
            Pellentesque mauris diam, porttitor vel ante in, efficitur vehicula tellus. Nam a auctor augue. Quisque
            sagittis ultricies imperdiet.
          </p>
        </div>
      </Card>
    </PillContent>
    <PillContent>
      <Card className="margin-m--t">
        <h2 slot="header">Content 3</h2>
        <div slot="content">
          <p>Integer a suscipit dolor. Pellentesque ac ligula sem. Aliquam sit amet diam ut ipsum congue posuere.</p>
          <p>
            Praesent eget nibh sit amet nibh accumsan facilisis. Cras purus libero, vehicula eget facilisis a, rhoncus
            placerat ante.
          </p>
          <p>Mauris tristique eget nisl eu lacinia.</p>
        </div>
      </Card>
    </PillContent>
  </PillNavigation>

  <Prism language="html">
    {`<PillNavigation>
  <PillList>
    <Pill>Pill 1</Pill>
    <Pill>Pill 2</Pill>
    <Pill>Pill 3</Pill>
  </PillList>
  <PillContent>
    Content 1
  </PillContent>
  <PillContent>
    Content 2
  </PillContent>
  <PillContent>
    Content 3
  </PillContent>
</PillNavigation>`}
  </Prism>
{:else}
  <p>PillNavigation er en ren Svelte component.</p>
{/if}
