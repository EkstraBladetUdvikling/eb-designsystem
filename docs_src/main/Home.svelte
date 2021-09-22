<script lang="ts">
  import { Card } from '../../src';
  import Components from '../assets/icons/components.svg';
  import Utility from '../assets/icons/utility.svg';
  import Guideline from '../assets/icons/guideline.svg';

  let componentsLink = '#/components';
  let utilityLink = '#/utilities';
  let guidelineLink = '#/guidelines';
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
    <div class="flex">
      <div class="home-section width-1of1 margin-m">
        <Card className="padding-m" url={componentsLink}>
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">Components</h2>
            <Components width="60" height="60" />
          </div>
        </Card>
      </div>
      <div class="home-section width-1of1 margin-m">
        <Card className="padding-m" url={utilityLink}>
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">Utilities</h2>
            <Utility width="60" height="60" />
          </div>
        </Card>
      </div>
      <div class="home-section width-1of1 margin-m">
        <Card className="padding-m" url={guidelineLink}>
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">Guidelines</h2>
            <Guideline width="45" height="60" />
          </div>
        </Card>
      </div>
    </div>
  </div>
</div>

<style>
  .home-section :global(svg) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .home-section:hover :global(svg) {
    color: var(--color--red);
    transition: 0.5s;
  }
</style>
