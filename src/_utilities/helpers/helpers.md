---
layout: component
title: Helpers
---

## Hidden

Skjul element.

```html
<div class="hidden"></div>
```

## Position

Findes som absolute, fixed og relative

```html
<div class="position-absolute"></div>
<div class="position-fixed"></div>
<div class="position-relative"></div>
```

## Floats

Findes som left og right

```html
<div class="float-left"></div>
<div class="float-right"></div>
```

## Clear

```html
<div class="clear"></div>
```


## Centrér vertikalt

Centrér element vertikal i sin container. Kræver at containeren har text-align--center

<div class="text-align--center bg--graa1">
  <div class="width-1of3 text-align--left bg--graa3">Jeg er ikke centreret</div>
  <div class="width-1of3 vertical-center text-align--left bg--graa3">Jeg er centreret</div>
</div>

```html
<div class="text-align--center bg--graa1">
  <div class="width-1of3 text-align--left bg--graa3">Jeg er ikke centreret</div>
  <div class="width-1of3 vertical-center text-align--left bg--graa3">Jeg er centreret</div>
</div>
```

## Margin + padding - boxmodel illustration
