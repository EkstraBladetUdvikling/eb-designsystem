---
layout: component
title: Accordion
description: Accordions anvendes til at toggle (hide/show) content.
---

**OBS:** Husk at indsætte ***javascript-koden*** nede i bunden

<span style="color:#12507b;font-weight: bolder">Default accordion</span>

<div class="flex grid-width--small">
  <div class="accordion card-mode padding-l ff-secondary width-1of1">
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 1</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-m fontsize-small">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 2</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-m fontsize-small">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
      <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 3</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-m fontsize-small">
        <p>
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>
      </div>
    </div>
  </div>
</div>
```html
<div class="accordion card-mode padding-l ff-secondary width-1of1">
  <div class="accordion-tab padding-m padding-l--rl margin-s--b">
    <div class="accordion-header flex flex-justify--between">
      <span class="fontweight-normal fontsize-large">Tab 2</span>
      <i class="fas fa-chevron-down"></i>
    </div>
    <div class="accordion-body padding-m fontsize-small">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</div>
```

Det er muligt at tilføje: **lightmode** eller **darkmode**.

Light- eller darkmode tilknyttes via en data-attribute: **data-theme="lightmode" / "darkmode"**.

<span style="color:#12507b;font-weight: bolder">Lightmode</span>

<div class="flex grid-width--small">
  <div data-theme="lightmode" class="accordion card-mode padding-l ff-secondary width-1of1">
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 1</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-m fontsize-small">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 2</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-m fontsize-small">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
      <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 3</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-m fontsize-small">
        <p>
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>
      </div>
    </div>
  </div>
</div>

```html
<div data-theme="lightmode" class="accordion card-mode padding-l ff-secondary width-1of1">
  <div class="accordion-tab padding-m padding-l--rl margin-s--b">
    <div class="accordion-header flex flex-justify--between">
      <span class="fontweight-normal fontsize-large">Tab 2</span>
      <i class="fas fa-chevron-down"></i>
    </div>
    <div class="accordion-body padding-m fontsize-small">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</div>
```

<span style="color:#12507b;font-weight: bolder">Darkmode</span>

<div class="flex grid-width--small">
  <div data-theme="darkmode" class="accordion card-mode padding-l ff-secondary width-1of1">
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 1</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-m fontsize-small">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 2</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-m fontsize-small">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 3</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-m fontsize-small">
        <p>
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>
      </div>
    </div>
  </div>
</div>

```html
<div data-theme="darkmode" class="accordion card-mode padding-l ff-secondary width-1of1">
  <div class="accordion-tab padding-m padding-l--rl margin-s--b">
    <div class="accordion-header flex flex-justify--between">
      <span class="fontweight-normal fontsize-large">Tab 2</span>
      <i class="fas fa-chevron-down"></i>
    </div>
    <div class="accordion-body padding-m fontsize-small">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</div>
```

<span style="color:#12507b;font-weight: bolder">JavaScript (nødvendigt)</span>

<script>
const accordions = document.querySelectorAll(".accordion");
for (const accordion of accordions) {
  const tabs = accordion.querySelectorAll(".accordion-tab");
  for (const tab of tabs) {
    const head = tab.querySelector(".accordion-header");
    head.addEventListener('click', () => {
      for (const othertab of tabs) {
        if (othertab !== tab) {
          othertab.classList.remove('accordion-expanded');
        }
      }
      tab.classList.toggle('accordion-expanded');
    });
  }
}
</script>

```javascript
const accordions = document.querySelectorAll(".accordion");
for (const accordion of accordions) {
  const tabs = accordion.querySelectorAll(".accordion-tab");
  for (const tab of tabs) {
    const head = tab.querySelector(".accordion-header");
    head.addEventListener('click', () => {
      for (const othertab of tabs) {
        if (othertab !== tab) {
          othertab.classList.remove('accordion-expanded');
        }
      }
      tab.classList.toggle('accordion-expanded');
    });
  }
}
```
