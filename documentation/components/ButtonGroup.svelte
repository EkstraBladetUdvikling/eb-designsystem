<script lang="ts">
  import Prism from 'svelte-prism';

  import Button from '../../src/_components/button';
  import ButtonGroup, { GroupContent } from '../../src/_components/buttongroup';
</script>

<h1 class="color--eb">Pill navigation / Toggle buttons</h1>

<Prism
  language="js"
  source={`import Button from '../../src/_components/button';
import ButtonGroup  from '../../src/_components/buttongroup';
`}
/>

<div class="margin-xl">
  <ButtonGroup>
    <Button
      on:click={() => {
        console.log('Click 1');
      }}>Toggle 1</Button
    >
    <Button
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
