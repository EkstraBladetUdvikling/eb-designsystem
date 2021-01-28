---
layout: component
title: Tooltip
---

## Default tooltip

<div>
  <label class="tooltip">
    <input type="checkbox" hidden class="tooltip-input" />
    <div class="tooltip-off">
      <i class="tooltip-toggle fas fa-question"></i>
    </div>
    <div class="tooltip-on">
      <i class="tooltip-toggle fas fa-times"></i>
      <div class="padding-s">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
        <p>Aenean a blandit lacus, sed faucibus ante.</p>
      </div>
    </div>
  </label>
</div>

```html
<label class="tooltip">
  <input type="checkbox" hidden class="tooltip-input" />
  <div class="tooltip-off">
    <i class="tooltip-toggle fas fa-question"></i>
  </div>
  <div class="tooltip-on">
    <i class="tooltip-toggle fas fa-times"></i>
    <div class="padding-s">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
      <p>Aenean a blandit lacus, sed faucibus ante.</p>
    </div>
  </div>
</label>
```

## Tooltip i højre side

<div class="flex flex-justify--between">
  <h3 class="flex-item">Flot overskrift</h3>
  <label class="tooltip tooltip--right flex-item flex-item--center">
    <input type="checkbox" hidden class="tooltip-input" />
    <div class="tooltip-off">
      <i class="tooltip-toggle fas fa-question"></i>
    </div>
    <div class="tooltip-on">
      <i class="tooltip-toggle fas fa-times"></i>
      <div class="padding-s">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
        <p>Aenean a blandit lacus, sed faucibus ante.</p>
      </div>
    </div>
  </label>
</div>

```html
<div class="flex flex-justify--between">
  <h3 class="flex-item">Flot overskrift</h3>
  <label class="tooltip tooltip--right flex-item flex-item--center">
    <input type="checkbox" hidden class="tooltip-input" />
    <div class="tooltip-off">
      <i class="tooltip-toggle fas fa-question"></i>
    </div>
    <div class="tooltip-on">
      <i class="tooltip-toggle fas fa-times"></i>
      <div class="padding-s">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
        <p>Aenean a blandit lacus, sed faucibus ante.</p>
      </div>
    </div>
  </label>
</div>
```
