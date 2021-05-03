<script lang="ts">
  import Prism from 'svelte-prism';
  // import { Bordeaux, PastelDarkgreen } from '@ekstra-bladet/eb-colors/dist/eb-colors';

  import { Button, ButtonGroup } from '../../src/_components';
</script>

<h1 class="color--eb">Button groups</h1>

<Prism
  language="js"
  source={`import { Button, ButtonGroup } from '@ekstra-bladet/designsystem/src/_components';
`}
/>

<div class="margin-l">
  <ButtonGroup color="Bordeaux">
    <Button
      size="big"
      on:click={() => {
        console.log('Click 1');
      }}>Toggle 1</Button
    >
    <Button
      size="big"
      extension="solid"
      initial={true}
      on:click={() => {
        console.log('Click 2');
      }}>Toggle 2</Button
    >
  </ButtonGroup>
</div>

<div class="margin-l">
  <ButtonGroup type="primary" color="PastelDarkgreen">
    <Button
      size="big"
      on:click={() => {
        console.log('Click 1');
      }}>Toggle 1</Button
    >
    <Button
      size="big"
      extension="solid"
      on:click={() => {
        console.log('Click 2');
      }}>Toggle 2</Button
    >
  </ButtonGroup>
</div>

<div class="margin-l">
  <ButtonGroup>
    <Button
      size="big"
      on:click={() => {
        console.log('Click 1');
      }}>Toggle 1</Button
    >
    <Button
      size="big"
      extension="solid"
      on:click={() => {
        console.log('Click 2');
      }}>Toggle 2</Button
    >
  </ButtonGroup>
</div>
<div class="margin-l">
  <ButtonGroup type="accept">
    <Button
      size="big"
      on:click={() => {
        console.log('Click 1');
      }}>Toggle 1</Button
    >
    <Button
      size="big"
      extension="solid"
      on:click={() => {
        console.log('Click 2');
      }}>Toggle 2</Button
    >
  </ButtonGroup>
</div>
<div class="margin-l">
  <ButtonGroup type="cancel">
    <Button
      size="big"
      on:click={() => {
        console.log('Click 1');
      }}>Toggle 1</Button
    >
    <Button
      size="big"
      extension="solid"
      type="accept"
      on:click={() => {
        console.log('Click 2');
      }}>Toggle 2</Button
    >
  </ButtonGroup>
</div>

<Prism
  language="html"
  source={`<ButtonGroup>
  <Button
    on:click="{() => {
      console.log('Click 1');
    }}">Toggle 1</Button
  >
  <Button
    on:click="{() => {
      console.log('Click 2');
    }}">Toggle 2</Button
  >
</ButtonGroup>
`}
/>

<div class="margin-xl">
  <ButtonGroup>
    <Button
      on:click={() => {
        console.log('Button 1');
      }}>Button 1</Button
    >
    <Button
      on:click={() => {
        console.log('Button 2');
      }}>Button 2</Button
    >
    <Button
      on:click={() => {
        console.log('Button 3');
      }}>Button 3</Button
    >
  </ButtonGroup>
</div>

<Prism
  language="html"
  source={`<ButtonGroup>
  <Button
    on:click="{() => {
      console.log('Button 1');
    }}">Toggle 1</Button
  >
  <Button
    on:click="{() => {
      console.log('Button 2');
    }}">Toggle 2</Button
  >
  <Button
    on:click="{() => {
      console.log('Button 3');
    }}">Toggle 3</Button
  >
</ButtonGroup>
`}
/>

<!-- <h2>Button group with associated content panels</h2>


<div class="margin-xl">
  <ButtonGroup>
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
  </ButtonGroup>
</div> -->
