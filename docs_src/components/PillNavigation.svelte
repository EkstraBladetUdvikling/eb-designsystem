<script lang="ts">
  import Prism from 'svelte-prism';

  import { PillNavigation, Pill, PillContent, PillList } from '../../src/_components';
</script>

<h1 class="color--eb">Pill navigation / Toggle buttons</h1>

<Prism
  language="js"
  source={`import { PillNavigation, Pill, PillContent, PillList } from '@ekstra-bladet/designsystem/src/_components';`}
/>

<div class="margin-xl">
  <PillNavigation>
    <PillList>
      <Pill>Toggle 1</Pill>
      <Pill>Toggle 2</Pill>
    </PillList>
    <PillContent>Content 1</PillContent>
    <PillContent>Content 2</PillContent>
  </PillNavigation>
</div>

<Prism
  language="html"
  source={`
<PillNavigation>
  <PillList>
    <Pill>Toggle 1</Pill>
    <Pill>Toggle 2</Pill>
  </PillList>
  <PillContent>Content 1</PillContent>
  <PillContent>Content 2</PillContent>
</PillNavigation>
`}
/>

<div class="margin-xl">
  <PillNavigation>
    <PillList>
      <Pill>Toggle 1</Pill>
      <Pill>Toggle 2</Pill>
      <Pill>Toggle 3</Pill>
    </PillList>
    <PillContent>
      <div>
        <h1>Content 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor sagittis metus in efficitur.
          Phasellus molestie scelerisque commodo. Fusce accumsan efficitur urna eu tristique. Proin semper fermentum
          ante sed molestie. Sed nec quam orci. Nunc diam neque, blandit a dictum id, posuere in lacus. Nulla rutrum
          pretium nulla. Aenean sollicitudin, magna et eleifend mollis, tortor turpis varius nibh, non interdum lectus
          orci ac libero. Curabitur nisi libero, pellentesque ut mi eget, efficitur efficitur sem.
        </p>
      </div>
    </PillContent>
    <PillContent>
      <div>
        <h1>Content 2</h1>
        <p>
          Aenean in ipsum varius, facilisis leo nec, aliquam mauris. Nunc sagittis nunc interdum consectetur posuere.
          Vivamus tempus volutpat orci. Maecenas luctus posuere massa sollicitudin ultrices. Nam venenatis feugiat
          imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent efficitur ex vel lacus
          vehicula convallis. Vivamus a metus facilisis, consequat felis vitae, fringilla nisi. Aliquam maximus nibh eu
          justo lobortis auctor. In facilisis iaculis sodales. Aliquam vehicula, massa nec eleifend maximus, elit ante
          convallis eros, ac ultricies justo risus non turpis. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Maecenas ornare ex vitae tellus aliquet, a iaculis turpis vehicula.
          Vestibulum scelerisque metus lectus, id egestas eros dignissim ut. Aenean et nisi vel purus vehicula lacinia
          ut sit amet ligula. Sed ultrices nisi orci, non pellentesque erat dignissim ac.
        </p>
      </div>
    </PillContent>
    <PillContent>
      <div>
        <h1>Content 3</h1>
        <p>
          Donec mattis arcu metus, et accumsan erat consectetur eget. Pellentesque porta sollicitudin lectus, a commodo
          sem sollicitudin sit amet. Sed pharetra vel nulla id bibendum. In consectetur pulvinar purus non cursus. In
          hac habitasse platea dictumst. Nullam placerat nunc sem, at auctor massa venenatis nec. Ut at dignissim dolor.
          Pellentesque vestibulum porta lorem, a iaculis felis accumsan vel. Sed vel orci vehicula dolor congue eleifend
          et non nibh. Duis a pharetra diam, a dapibus dui. Aenean maximus fringilla nunc, ut sollicitudin erat
          vulputate tincidunt. Proin nisl ipsum, tristique et varius sit amet, elementum eget magna. Phasellus eu est
          pretium erat blandit suscipit sed eu nisl.
        </p>
      </div>
    </PillContent>
  </PillNavigation>
</div>

<Prism
  language="html"
  source={`
<PillNavigation>
    <PillList>
      <Pill>Toggle 1</Pill>
      <Pill>Toggle 2</Pill>
      <Pill>Toggle 3</Pill>
    </PillList>
    <PillContent>
      <div>
        <h1>Content 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing...
        </p>
      </div>
    </PillContent>
    <PillContent>
      <div>
        <h1>Content 2</h1>
        <p>
          Aenean in ipsum varius, facilisis leo nec...
        </p>
      </div>
    </PillContent>
    <PillContent>
      <div>
        <h1>Content 3</h1>
        <p>
          Donec mattis arcu metus, et accumsan erat...
        </p>
      </div>
    </PillContent>
  </PillNavigation>
`}
/>
