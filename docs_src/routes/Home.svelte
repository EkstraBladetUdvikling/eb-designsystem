<script lang="ts">
  import Card from '../../src/_components/card';
  import Routes from './routes';

  let componentsLink = "#/";
  let utilityLink = "#/";
  let colorLink = "#/";
  // Adds dynamic links to home-section cards. It finds the first element for each type.
  Routes.forEach(route => {
    if(componentsLink === "#/" && route.type === "component") {
      componentsLink = `#${route.link}`;
    }
    if(utilityLink === "#/" && route.type === "utility") {
      utilityLink = `#${route.link}`;
    }
    if(colorLink === "#/" && route.type === "color") {
      colorLink = `#${route.link}`;
    }
  })
</script>

<div class="flex flex-justify--around width-1of1">
  <div class="grid-width--medium">
    <div class="flex flex-justify--center">
      <img alt="" src="ekstrabladet.svg" style="height:70px;" />
    </div>
    <div class="flex flex-justify--center  margin-l--b">
      <h1>Design system</h1>
    </div>
    <div class="text-align--center margin-m--tb padding-m bg--graa7">
      yarn add @ekstra-bladet/designsystem
    </div>
    <div class="flex">
      <div class="home-section width-1of1 margin-m">
        <Card className="padding-m" href={componentsLink}>
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">Components</h2>
            <i class="home-section-icon fas fa-cubes" />
          </div>
        </Card>
      </div>
      <div class="home-section width-1of1 margin-m">
        <Card className="padding-m" href={utilityLink}>
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">Utilites</h2>
            <i class="home-section-icon fab fa-connectdevelop" />
          </div>
        </Card>
      </div>
    </div>
    <div class="flex">
      <div class="home-section width-1of1 margin-m">
        <Card className="padding-m" href={colorLink}>
          <div class="flex-item flex-item--center text-align--center">
            <h2 class="color--graa1">Colors</h2>
            <i class="home-section-icon fas fa-palette" />
          </div>
        </Card>
      </div>
    </div>
  </div>
</div>

<style>
  .home-section-icon {
    width: 100px;
    height: 100px;
    transition: 0.5s;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .home-section:hover .home-section-icon {
    color: var(--color--red);
    transition: 0.5s;
  }
</style>
