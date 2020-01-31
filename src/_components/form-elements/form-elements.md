---
layout: component
title: Form elements
---

## Text input

<div class="form-element">
  <input type="text" class="form-input form-input--text" id="formInput" placeholder="Input her" />
  <label for="formInput" class="form-label">Input her</label>
</div>

```html
<div class="form-element">
  <input type="text" class="form-input form-input--text" id="formInput" placeholder="Input her" />
  <label for="formInput" class="form-label">Input her</label>
</div>
```


## Text input med ikon

<label class="form-element form-element--icon">
  <i class="fas fa-search" aria-hidden="true"></i>
  <input type="text" class="form-input form-input--text form-input--icon" id="formInput" placeholder="Input her" />
  <label for="formInput" class="form-label">Input her</label>
</label>


```html
<label class="form-element form-element--icon">
  <i class="fas fa-search form-icon" aria-hidden="true"></i>
  <input type="text" class="form-input form-input--text form-input--icon" id="formInput" placeholder="Input her" />
  <label for="formInput" class="form-label">Input her</label>
</label>
```

## Icon checkbox

### Ikon til højre

<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox1" />
  <label for="formCheckbox1" class="form-label">
    Desktop
    <i class="far fa-check-square form-checkbox-toggle--on" aria-hidden="true"></i>
    <i class="far fa-square form-checkbox-toggle--off" aria-hidden="true"></i>
  </label>
</div>

<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox2" />
  <label for="formCheckbox2" class="form-label">
    Mobil
    <i class="fas fa-toggle-on form-checkbox-toggle--on" aria-hidden="true"></i>
    <i class="fas fa-toggle-off form-checkbox-toggle--off" aria-hidden="true"></i>
  </label>
</div>

```html
<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox" />
  <label for="formCheckbox" class="form-label">
    Desktop
    <i class="far fa-check-square form-checkbox-toggle--on" aria-hidden="true"></i>
    <i class="far fa-square form-checkbox-toggle--off" aria-hidden="true"></i>
  </label>
</div>

<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox" />
  <label for="formCheckbox" class="form-label">
    Mobil
    <i class="fas fa-toggle-on form-checkbox-toggle--on" aria-hidden="true"></i>
    <i class="fas fa-toggle-off form-checkbox-toggle--off" aria-hidden="true"></i>
  </label>
</div>
```

### Ikon til venstre

<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox3" />
  <label for="formCheckbox3" class="form-label">
    <i class="far fa-check-square form-checkbox-toggle--on" aria-hidden="true"></i>
    <i class="far fa-square form-checkbox-toggle--off" aria-hidden="true"></i>
    Desktop
  </label>
</div>

<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox4" />
  <label for="formCheckbox4" class="form-label">
    <i class="fas fa-toggle-on form-checkbox-toggle--on" aria-hidden="true"></i>
    <i class="fas fa-toggle-off form-checkbox-toggle--off" aria-hidden="true"></i>
    Mobil
  </label>
</div>

```html
<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox" />
  <label for="formCheckbox" class="form-label">
    <i class="far fa-check-square form-checkbox-toggle--on" aria-hidden="true"></i>
    <i class="far fa-square form-checkbox-toggle--off" aria-hidden="true"></i>
    Desktop
  </label>
</div>

<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbo4" />
  <label for="formCheckbox" class="form-label">
    <i class="fas fa-toggle-on form-checkbox-toggle--on" aria-hidden="true"></i>
    <i class="fas fa-toggle-off form-checkbox-toggle--off" aria-hidden="true"></i>
    Mobil
  </label>
</div>
```
