<script lang="ts">
  import Prism from 'svelte-prism';
  import { sourceType } from '../stores';
  import Icon from '../../src/components/icon/Icon.svelte';
  import Button from '../../src/components/button/Button.svelte';
  import Spinner from '../../src/components/spinner/Spinner.svelte';

  import tooltip from '../../src/functions/tooltipAction';
  import { tooltipStore } from '../../src/functions/tooltipStore';
</script>

{#if $sourceType === 'svelte'}
  <h1 class="color--eb">Tooltip (Action)</h1>

  <Prism language="js">
    {`import { tooltipAction } from '@ekstra-bladet/designsystem';`}
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
      <Icon className="tooltip-toggle" name="questioncircle" width="18" />
    </div>
    <br />
    <Button
      on:click={(e) => {
        $tooltipStore['test-anchor'].show();
      }}>Show tooltip</Button
    >
  </div>

  <Prism language="js">
    {`import { tooltipAction, tooltipStore } from '@ekstra-bladet/designsystem';`}
  </Prism>

  <Prism language="html">
    {`<div id="uniqueid" use:tooltipAction={{ content: 'Test String' }}>
    <Icon className="tooltip-toggle" name="questioncircle" width="18" />
</div>

<Button on:click={(e) => {$tooltipStore['uniqueid'].show();}}>Show tooltip</Button>`}
  </Prism>
{:else}
  <h1 class="color--eb">Tooltip (Ekstrabladet)</h1>

  <p>Tooltips are available global on ekstrabladet.dk by using data-tooltip attribute</p>

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
