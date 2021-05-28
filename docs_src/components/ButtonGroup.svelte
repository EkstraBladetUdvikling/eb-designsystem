<script lang="ts">
  import Prism from 'svelte-prism';
  // import { Bordeaux, PastelDarkgreen } from '@ekstra-bladet/eb-colors/dist/eb-colors';

  import { Button, ButtonGroup } from '../../src';
</script>

<h1 class="color--eb">Button groups</h1>

<Prism
  language="js"
  source={`import { Button, ButtonGroup } from '@ekstra-bladet/designsystem';
`}
/>

<p>Default</p>
<div class="margin-l flex">
  <div class="flex-item margin-l--r">
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
  <div class="flex-item margin-l--l">
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
</div>

<p>Default</p>
<div class="margin-l flex">
  <div class="flex-item margin-l--r">
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
  <div class="flex-item margin-l--l">
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
</div>

<div class="margin-l">
  <Prism
    language="svelte"
    source={`
<ButtonGroup>
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
</div>

<div class="margin-l">
  <p>Default Big</p>
  <ButtonGroup>
    <Button
      size="big"
      initial={true}
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

<Prism
  language="svelte"
  source={`
  <ButtonGroup>
    <Button
      size="big"
      initial={true}
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
  `}
/>

<p>type muligheder</p>

<ul>
  <li>accept</li>
  <li>cancel</li>
  <li>primary</li>
  <li>secondary</li>
</ul>
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

<div class="margin-l">
  <ButtonGroup type="primary">
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
  <ButtonGroup type="secondary">
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

<p>Farve muligheder fra eb-colors</p>
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

<Prism
  language="svelte"
  source={`
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
  `}
/>

<p>Solid button group</p>

<ButtonGroup solid={true} color="Black" colorHover="Red">
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
  <Button
    on:click={() => {
      console.log('Click 3');
    }}>Toggle 3</Button
  >
</ButtonGroup>

<Prism
  language="svelte"
  source={`
    <ButtonGroup solid={true} color="Black" colorHover="Red">
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
      <Button
        on:click={() => {
          console.log('Click 3');
        }}>Toggle 3</Button
      >
    </ButtonGroup>
  `}
/>

<div class="bg--yellowlight padding-l">
  <ButtonGroup solid={true} color="Black" colorHover="Red">
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
    <Button
      on:click={() => {
        console.log('Click 3');
      }}>Toggle 3</Button
    >
  </ButtonGroup>
</div>
