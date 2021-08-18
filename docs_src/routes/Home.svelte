<script lang="ts">
  import { Card } from '../../dist';
  import Routes from './routes';

  let componentsLink = '#/';
  let utilityLink = '#/';
  let guidelineLink = '#/';
  // Adds dynamic links to home-section cards. It finds the first element for each type.
  Routes.forEach((route) => {
    if (componentsLink === '#/' && route.group === 'components') {
      componentsLink = `#${route.link}`;
    }
    if (utilityLink === '#/' && route.group === 'utilities') {
      utilityLink = `#${route.link}`;
    }
    if (guidelineLink === '#/' && route.group === 'guidelines') {
      guidelineLink = `#${route.link}`;
    }
  });
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
            <i class="home-section-icon fas fa-cubes" />
          </div>
        </Card>
      </div>
      <div class="home-section width-1of1 margin-m">
        <Card className="padding-m" url={utilityLink}>
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">Utilities</h2>
            <i class="home-section-icon fab fa-connectdevelop" />
          </div>
        </Card>
      </div>
      <div class="home-section width-1of1 margin-m">
        <Card className="padding-m" url={guidelineLink}>
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">Guidelines</h2>
            <i class="home-section-icon fas fa-quran" />
          </div>
        </Card>
      </div>
    </div>
  </div>
</div>

<style>
  .home-section-icon {
    font-size: 60px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .home-section:hover .home-section-icon {
    color: var(--color--red);
    transition: 0.5s;
  }
</style>
