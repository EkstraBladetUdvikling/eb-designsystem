<script lang="ts">
  import Prism from 'svelte-prism';

  import Button from '../../src/components/button/Button.svelte';
  import Icon from '../../src/components/icon/Icon.svelte';
  import Spinner from '../../src/components/spinner/Spinner.svelte';

  import { sourceType } from '../stores';

  import tooltip from '../../src/functions/tooltipAction';
  import { tooltipStore } from '../../src/functions/tooltipStore';
</script>

<h1 class="color--eb">Tooltip</h1>

<p>
  Tooltips is a wrapper used to create tooltips with third party library
  <a href="https://atomiks.github.io/tippyjs/">tippy.js</a>
</p>

{#if $sourceType === 'svelte'}
  <h2 class="color--eb">Tooltip as an action (svelte)</h2>

  <p>
    More about actions
    <a href="https://svelte.dev/docs#template-syntax-element-directives-use-action" target="_blank">svelte action</a>
  </p>

  <Prism language="js">
    {`import { tooltipAction } from '@ekstra-bladet/designsystem/svelte/functions/tooltipAction';`}
  </Prism>

  <table class="table">
    <thead>
      <tr>
        <th>Option</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>content</td>
        <td>string / SvelteComponent</td>
        <td />
        <td>Input text, HTML or SvelteComponent</td>
      </tr>
      <tr>
        <td>allowHTML</td>
        <td>boolean</td>
        <td>false</td>
        <td
          >Optional: Parse content as HTML <a href="https://svelte.dev/tutorial/html-tags" target="_blank"
            >(see Svelte-docs)</a
          ></td
        >
      </tr>
      <tr>
        <td>props</td>
        <td>Object</td>
        <td>empty</td>
        <td>Optional: Object of props to pass if using SvelteComponent</td>
      </tr>
      <tr>
        <td>tippyOptions</td>
        <td>Object</td>
        <td>empty</td>
        <td
          >Optional: Tippy options <a href="https://atomiks.github.io/tippyjs/v6/all-props/" target="_blank"
            >(see reference)</a
          ><br />Props marked with
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIGZpbGw9IiNEQUU2RkYiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEiIHN0cm9rZT0iIzc3NjFEMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik03LjgwMTkxIDcuMkgxMy42ODE5QzE0LjY2MTkgNy4yIDE1LjM3MTIgNy40MjQgMTUuODA5OSA3Ljg3MkMxNi4yNTc5IDguMzEwNjcgMTYuNDgxOSA5LjAyIDE2LjQ4MTkgMTBWMTEuMjZDMTYuNDgxOSAxMi4wMzQ3IDE2LjM1MTIgMTIuNjM2NyAxNi4wODk5IDEzLjA2NkMxNS44Mzc5IDEzLjQ5NTMgMTUuNDMxOSAxMy43OCAxNC44NzE5IDEzLjkyTDE2LjYyMTkgMTdIMTMuODkxOUwxMi4yODE5IDE0LjA2SDEwLjMyMTlWMTdINy44MDE5MVY3LjJaTTEzLjk2MTkgMTBDMTMuOTYxOSA5LjQ0IDEzLjY4MTkgOS4xNiAxMy4xMjE5IDkuMTZIMTAuMzIxOVYxMi4xSDEzLjEyMTlDMTMuNjgxOSAxMi4xIDEzLjk2MTkgMTEuODIgMTMuOTYxOSAxMS4yNlYxMFoiIGZpbGw9IiM3NzYxRDEiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjEyIiB5MT0iMCIgeDI9IjEyIiB5Mj0iMjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0VGREVGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
            alt="(R)"
          /> not supported</td
        >
      </tr>
    </tbody>
  </table>

  <h3>Simple tooltip</h3>

  <p style="display: inline-block;" use:tooltip={{ content: 'Text, HTML or SvelteComponent' }} class="margin-none">
    Hover me
  </p>

  <Prism language="html">
    {`<p use:tooltipAction={{ content: 'Text, HTML or SvelteComponent' }}>Hover me</p>`}
  </Prism>

  <h3>Advanced tooltip</h3>
  <div>
    <p
      style="display: inline-block; cursor: pointer;"
      class="margin-none"
      use:tooltip={{
        content: Spinner,
        props: { isLoading: true },
        tippyOptions: { interactive: true, placement: 'bottom', trigger: 'click' },
      }}
    >
      Click me
    </p>
  </div>

  <Prism language="html">
    {`<p use:tooltip={{
      content: Spinner,
      props: { isLoading: true },
      tippyOptions: { interactive: true, placement: 'bottom', trigger: 'click' },
    }}>
    Click me
</p>`}
  </Prism>

  <h3>Programmatic access</h3>

  <div class="flex flex-justify--between">
    <div
      id="test-anchor"
      style="display: inline-block;"
      use:tooltip={{
        content: 'String or SvelteTemplate',
      }}
    >
      <Icon className="tooltip-toggle" name="question-circle" width="18" />
    </div>
    <br />
    <Button
      on:click={() => {
        $tooltipStore['test-anchor'].show();
      }}>Show tooltip</Button
    >
  </div>

  <Prism language="js">
    {`import { tooltipAction, tooltipStore } from '@ekstra-bladet/designsystem/svelte/functions/tooltipAction';`}
  </Prism>

  <Prism language="html">
    {`<div id="uniqueid" use:tooltipAction={{ content: 'Test String' }}>
    <Icon className="tooltip-toggle" name="question-circle" width="18" />
</div>

<Button on:click={(e) => {$tooltipStore['uniqueid'].show();}}>Show tooltip</Button>`}
  </Prism>
{:else}
  <h2 class="color--eb">Tooltip as a function</h2>

  <code>
    <div class="padding-xl--l padding-m--tb">
      <div>@param anchorNode HTMLElement - required</div>
      <div>@param tooltipNode HTMLElement - required</div>
      <div>@param tippyOptions TTippyCustomOptions - optional</div>
      <div>@returns A tooltip instance</div>
    </div>
  </code>
  <Prism language="js">
    {`import { tooltipRender } from '@ekstra-bladet/designsystem/svelte/functions/tooltipAction';`}
  </Prism>

  <p>To make easier use of tooltips on ekstrabladet.dk it is globally avaible through the data-tooltip attributes</p>

  <div>
    <div><b>data-tooltip</b> <em>required</em> String or id selector(#selector) for element to show in tooltip</div>
    <div><b>data-tooltip-callback</b> global function to call as callback</div>
    <div><b>data-tooltip-interactive</b> boolean deciding if the user can interact with the tooltip</div>
    <div>
      <b>data-tooltip-placement</b> auto | top | right | bottom | left - where should the tooltip pop from, defaults to auto
    </div>
    <div><b>data-tooltip-trigger</b> which user action should trigger the popup, defaults to mouseenter</div>
  </div>
  <h3>Simple tooltip</h3>
  <Prism language="html">
    {`<div data-tooltip="Simple text tooltip">Hover</div>`}
  </Prism>

  <h3>HTML tooltip</h3>
  <p>Content should be HTML Entity encoded if possible</p>
  <Prism language="html">
    {`<div data-tooltip="Simple text<br>tooltip" data-tooltip-allowhtml="true">Hover</div>`}
  </Prism>

  <h3>Custom tooltip</h3>
  <Prism language="html">
    {`<div
  data-tooltip="#testid"
  data-tooltip-interactive="true"
  data-tooltip-placement="bottom"
  data-tooltip-trigger="click">
    Click
</div>

<div id="testid" class="hidden">
  <p>Custom input</p>
  <button>Test</button>
</div>
    `}
  </Prism>
{/if}
