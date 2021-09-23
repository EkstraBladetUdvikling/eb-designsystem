---
layout: component
title: Toggle element
---

## Toggle with text

<label class="toggle">
  <input type="checkbox" hidden class="toggle-input" />
  <span class="toggle toggle-on">on</span>
  <span class="toggle toggle-off">off</span>
</label>

```html
<label class="toggle">
  <input type="checkbox" hidden class="toggle-input" />
  <span class="toggle toggle-on">on</span>
  <span class="toggle toggle-off">off</span>
</label>
```

## Toggle with icon

<label class="toggle toggle--icon">
  <input type="checkbox" hidden class="toggle-input" />
  <svg class="toggle toggle-off" viewBox="0 0 50 50">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menubars"></use>
  </svg>
  <svg class="toggle toggle-on" viewBox="0 0 50 50">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#times-circle"></use>
  </svg>
</label>

```html
<label class="toggle toggle--icon">
  <input type="checkbox" hidden class="toggle-input" />
  <svg class="toggle toggle-off" viewBox="0 0 50 50">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menubars"></use>
  </svg>
  <svg class="toggle toggle-on" viewBox="0 0 50 50">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#times-circle"></use>
  </svg>
</label>
```

## Toggle with custom colored icon

<label class="toggle toggle--icon">
  <input type="checkbox" hidden class="toggle-input" />
  <svg class="toggle toggle-off color--graa3" viewBox="0 0 50 50">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menubars"></use>
  </svg>
  <svg class="toggle toggle-on color--reddark" viewBox="0 0 50 50">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#times-circle"></use>
  </svg>
</label>

```html
<label class="toggle toggle--icon">
  <input type="checkbox" hidden class="toggle-input" />
  <svg class="toggle toggle-off color--graa3" viewBox="0 0 50 50">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menubars"></use>
  </svg>
  <svg class="toggle toggle-on color--reddark" viewBox="0 0 50 50">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#times-circle"></use>
  </svg>
</label>
```

## Toggle Buttons

<div class="toggle toggle--buttons" role="group">
  <input type="radio" hidden class="toggle-radio" name="toggle-example1" id="toggle1" checked="">
  <label class="button" for="toggle1">Toggle 1</label>

  <input type="radio" hidden class="toggle-radio" name="toggle-example1" id="toggle2">
  <label class="button" for="toggle2">Toggle 2</label>
</div>

```html
<div class="toggle toggle--buttons" role="group">
  <input type="radio" hidden class="toggle-radio" name="toggle-example1" id="toggle1" checked="" />
  <label class="button" for="toggle1">Toggle 1</label>

  <input type="radio" hidden class="toggle-radio" name="toggle-example1" id="toggle2" />
  <label class="button" for="toggle2">Toggle 2</label>
</div>
```

<div class="toggle toggle--buttons" role="group">
  <input type="radio" hidden class="toggle-radio" name="toggle-example2" id="toggle3" checked="">
  <label class="button" for="toggle3">Toggle 3</label>

  <input type="radio" hidden class="toggle-radio" name="toggle-example2" id="toggle4">
  <label class="button" for="toggle4">Toggle 4</label>

  <input type="radio" hidden class="toggle-radio" name="toggle-example2" id="toggle5">
  <label class="button" for="toggle5">Toggle 5</label>
</div>

```html
<div class="toggle toggle--buttons" role="group">
  <input type="radio" hidden class="toggle-radio" name="toggle-example2" id="toggle3" checked="" />
  <label class="button" for="toggle3">Toggle 3</label>

  <input type="radio" hidden class="toggle-radio" name="toggle-example2" id="toggle4" />
  <label class="button" for="toggle4">Toggle 4</label>

  <input type="radio" hidden class="toggle-radio" name="toggle-example2" id="toggle5" />
  <label class="button" for="toggle5">Toggle 5</label>
</div>
```
