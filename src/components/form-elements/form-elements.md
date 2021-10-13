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
  <svg viewBox="0 0 50 50" aria-hidden="true">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
  </svg>
  <input type="text" class="form-input form-input--text form-input--icon" id="formInput" placeholder="Input her" />
  <label for="formInput" class="form-label">Input her</label>
</label>

```html
<label class="form-element form-element--icon">
  <svg class="form-icon" viewBox="0 0 50 50" aria-hidden="true">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
  </svg>
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
    <svg class="form-checkbox-toggle--on" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#check-square"></use>
    </svg>
    <svg class="form-checkbox-toggle--off" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#square"></use>
    </svg>
  </label>
</div>

<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox2" />
  <label for="formCheckbox2" class="form-label">
    Mobil
    <svg class="form-checkbox-toggle--on" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#toggle-on"></use>
    </svg>
    <svg class="form-checkbox-toggle--off" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#toggle-off"></use>
    </svg>
  </label>
</div>

```html
<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox" />
  <label for="formCheckbox" class="form-label">
    Desktop
    <svg class="form-checkbox-toggle--on" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#check-square"></use>
    </svg>
    <svg class="form-checkbox-toggle--off" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#square"></use>
    </svg>
  </label>
</div>

<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox" />
  <label for="formCheckbox" class="form-label">
    Mobil
    <svg class="form-checkbox-toggle--on" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#toggle-on"></use>
    </svg>
    <svg class="form-checkbox-toggle--off" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#toggle-off"></use>
    </svg>
  </label>
</div>
```

### Ikon til venstre

<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox3" />
  <label for="formCheckbox3" class="form-label">
    <svg class="form-checkbox-toggle--on" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#check-square"></use>
    </svg>
    <svg class="form-checkbox-toggle--off" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#square"></use>
    </svg>
    Desktop
  </label>
</div>

<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox4" />
  <label for="formCheckbox4" class="form-label">
    <svg class="form-checkbox-toggle--on" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#toggle-on"></use>
    </svg>
    <svg class="form-checkbox-toggle--off" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#toggle-off"></use>
    </svg>
    Mobil
  </label>
</div>

```html
<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbox" />
  <label for="formCheckbox" class="form-label">
    <svg class="form-checkbox-toggle--on" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#check-square"></use>
    </svg>
    <svg class="form-checkbox-toggle--off" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#square"></use>
    </svg>
    Desktop
  </label>
</div>

<div class="form-element">
  <input type="checkbox" class="form-checkbox form-checkbox--icon" id="formCheckbo4" />
  <label for="formCheckbox" class="form-label">
    <svg class="form-checkbox-toggle--on" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#toggle-on"></use>
    </svg>
    <svg class="form-checkbox-toggle--off" viewBox="0 0 50 50" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#toggle-off"></use>
    </svg>
    Mobil
  </label>
</div>
```
