---
layout: component
title: Helpers
---

# Helpers

### Hidden

Hidden er bare display: none

```css
display: none
```

### Position

Findes som absolute, fixed og relative

```css
position-absolute
position-fixed
position-relative
```

### Floats

Findes som left og right

```css
float-left
float-right
```

Clear

```css
.clear {
  clear: both;
}
```

### Centrér vertikalt

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
