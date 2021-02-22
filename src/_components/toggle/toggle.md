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
  <i class="toggle toggle-off fas fa-bars"></i>
  <i class="toggle toggle-on far fa-times-circle"></i>
</label>

```html
<label class="toggle toggle--icon">
  <input type="checkbox" hidden class="toggle-input" />
  <i class="toggle toggle-off fas fa-bars"></i>
  <i class="toggle toggle-on far fa-times-circle"></i>
</label>
```

## Toggle with custom colored icon

<label class="toggle toggle--icon">
  <input type="checkbox" hidden class="toggle-input" />
  <i class="toggle toggle-off fas fa-bars color--graa3"></i>
  <i class="toggle toggle-on far fa-times-circle color--reddark"></i>
</label>

```html
<label class="toggle toggle--icon">
  <input type="checkbox" hidden class="toggle-input" />
  <i class="toggle toggle-off fas fa-bars color--graa3"></i>
  <i class="toggle toggle-on far fa-times-circle color--reddark"></i>
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
  <input type="radio" hidden class="toggle-radio" name="toggle-example1" id="toggle1" checked="">
  <label class="button" for="toggle1">Toggle 1</label>

  <input type="radio" hidden class="toggle-radio" name="toggle-example1" id="toggle2">
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
  <input type="radio" hidden class="toggle-radio" name="toggle-example2" id="toggle3" checked="">
  <label class="button" for="toggle3">Toggle 3</label>

  <input type="radio" hidden class="toggle-radio" name="toggle-example2" id="toggle4">
  <label class="button" for="toggle4">Toggle 4</label>

  <input type="radio" hidden class="toggle-radio" name="toggle-example2" id="toggle5">
  <label class="button" for="toggle5">Toggle 5</label>
</div>
```
