<script lang="ts">
  import { link } from 'svelte-spa-router';

  import { Card } from '../../src';

  import ComponentsIcon from '../assets/icons/components.svg';
  import CssVarsIcon from '../assets/icons/css-vars.svg';
  import GuidelineIcon from '../assets/icons/guideline.svg';
  import JSFunctionsIcon from '../assets/icons/js-functions.svg';
  import UtilityIcon from '../assets/icons/utility.svg';

  import { components } from '../routes/components';
  import { cssvariables } from '../routes/cssvariables';
  import { exportedfunctions } from '../routes/exportedfunctions';
  import { guidelines } from '../routes/guidelines';
  import { utilities } from '../routes/utilities';
</script>

<div class="flex flex-justify--around width-1of1">
  <div class="grid-width--medium">
    <div class="flex flex-justify--center">
      <img alt="" src="ekstrabladet.svg" style="height:70px;" />
    </div>
    <div class="flex flex-justify--center  margin-l--b">
      <h1>Design system</h1>
    </div>
    <div class="text-align--center margin-m--tb padding-m bg--graa7">yarn add @ekstra-bladet/designsystem</div>
    <div class="grid home-section">
      <a href="#a11y" use:link={{ disabled: false, href: components.href }} class="home-section-item components">
        <Card className="padding-m">
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">Components</h2>
            <ComponentsIcon width="60" height="60" />
          </div>
        </Card>
      </a>
      <a href="#a11y" use:link={{ disabled: false, href: utilities.href }} class="home-section-item utilities">
        <Card className="padding-m">
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">Utilities</h2>
            <UtilityIcon width="60" height="60" />
          </div>
        </Card>
      </a>
      <a href="#a11y" use:link={{ disabled: false, href: guidelines.href }} class="home-section-item guidelines">
        <Card className="padding-m">
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">Guidelines</h2>
            <GuidelineIcon width="45" height="60" />
          </div>
        </Card>
      </a>
      <a
        href="#a11y"
        use:link={{ disabled: false, href: exportedfunctions.href }}
        class="home-section-item exportedfunctions"
      >
        <Card className="padding-m">
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">JS Functions</h2>
            <JSFunctionsIcon width="60" height="60" />
          </div>
        </Card>
      </a>
      <a href="#a11y" use:link={{ disabled: false, href: cssvariables.href }} class="home-section-item cssvariables">
        <Card className="padding-m">
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">CSS Variables</h2>
            <CssVarsIcon width="45" height="60" />
          </div>
        </Card>
      </a>
    </div>
  </div>
</div>

<style>
  .home-section-item :global(svg) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .home-section-item:hover :global(svg) {
    color: var(--color--red);
    transition: 0.5s;
  }

  .cssvariables:hover :global(svg) {
    color: #2965f1;
  }

  .exportedfunctions:hover :global(svg) {
    color: #f0db4f;
  }

  .home-section {
    gap: 10px;
  }
  .components {
    grid-column: 1 / span 2;
  }
  .utilities {
    grid-column: 3 / span 2;
  }
  .guidelines {
    grid-column: 5 / span 2;
  }
  .exportedfunctions {
    grid-column: 2 / span 2;
  }
  .cssvariables {
    grid-column: 4 / span 2;
  }
</style>
