---
layout: component
title: Accordion
description: Accordions anvendes til at toggle (hide/show) content.
---

**OBS:** Husk at indsætte ***javascript-koden*** nede i bunden

<br>

<span style="color:#12507b;font-weight: bolder">Default accordion</span>

<div class="flex grid-width--small">
  <div class="accordion card-mode padding-l ff-secondary width-1of1">
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 1</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-l fontsize-small">
      <b>Lorem Ipsum?</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br><br>
      <b>Lorem Ipsum?</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 2</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-l fontsize-small">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
      <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 3</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-l fontsize-small">
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        <li>At vero eos et accusamus</li>
        <li>Et iusto odio dignissimos ducimus</li>
        <li>Qui blanditiis praesentium</li>
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
    <div class="accordion-body padding-l fontsize-small">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>
```

<br>
Det er muligt at tilføje extension: **lightmode** eller **darkmode**.

Accordion er wrappet i et code-mode component, dvs der kan nu tilføjes card--lightmode el. card--darkmode.
<br>

<span style="color:#12507b;font-weight: bolder">Lightmode</span>

<div class="flex grid-width--small">
  <div class="accordion card-mode card--lightmode padding-l ff-secondary width-1of1">
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 1</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-l fontsize-small">
      <b>Lorem Ipsum?</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br><br>
      <b>Lorem Ipsum?</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 2</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-l fontsize-small">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
      <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 3</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-l fontsize-small">
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        <li>At vero eos et accusamus</li>
        <li>Et iusto odio dignissimos ducimus</li>
        <li>Qui blanditiis praesentium</li>
      </div>
    </div>
  </div>
</div>

```html
<div class="accordion card-mode card--lightmode padding-l ff-secondary width-1of1">
  <div class="accordion-tab padding-m padding-l--rl margin-s--b">
    <div class="accordion-header flex flex-justify--between">
      <span class="fontweight-normal fontsize-large">Tab 2</span>
      <i class="fas fa-chevron-down"></i>
    </div>
    <div class="accordion-body padding-l fontsize-small">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>
```

<span style="color:#12507b;font-weight: bolder">Darkmode</span>

<div class="flex grid-width--small">
  <div class="accordion card-mode card--darkmode padding-l ff-secondary width-1of1">
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 1</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-l fontsize-small">
      <b>Lorem Ipsum?</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br><br>
      <b>Lorem Ipsum?</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
    <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 2</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-l fontsize-small">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
      <div class="accordion-tab padding-m padding-l--rl margin-s--b">
      <div class="accordion-header flex flex-justify--between">
        <span class="fontweight-normal fontsize-large">Tab 3</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-body padding-l fontsize-small">
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        <li>At vero eos et accusamus</li>
        <li>Et iusto odio dignissimos ducimus</li>
        <li>Qui blanditiis praesentium</li>
      </div>
    </div>
  </div>
</div>

```html
<div class="accordion card-mode card--darkmode padding-l ff-secondary width-1of1">
  <div class="accordion-tab padding-m padding-l--rl margin-s--b">
    <div class="accordion-header flex flex-justify--between">
      <span class="fontweight-normal fontsize-large">Tab 2</span>
      <i class="fas fa-chevron-down"></i>
    </div>
    <div class="accordion-body padding-l fontsize-small">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
