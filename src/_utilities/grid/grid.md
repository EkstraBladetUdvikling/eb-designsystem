---
layout: component
title: Grid widths
---

## Grid widths

<div class="grid-width--xlarge text-align--center bg--graa1">
  <p>grid-width--xlarge: 930px</p>
  <div class="grid-width--large vertical-center bg--graa3">
    <p>grid-width--large: 910px</p>
    <div class="grid-width--medium vertical-center bg--graa4">
      <p>grid-width--medium: 730px</p>
      <div class="grid-width--small vertical-center bg--graa5">
        <p>grid-width--small: 610px</p>
      </div>
    </div>
  </div>
</div>

```css
:root {
  --grid-small: 610px;
  --grid-medium: 730px;
  --grid-large: 910px;
  --grid-xlarge: 930px;
}
```

```css
.grid-width--small {
  width: var(--grid-small);
}
```

```css
.grid-width--medium {
  width: var(--grid-medium);
}
```

```css
.grid-width--large {
  width: var(--grid-large);
}
```

```css
.grid-width--xlarge {
  width: var(--grid-xlarge);
}
```
