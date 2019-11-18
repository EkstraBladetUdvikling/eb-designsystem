---
layout: component
permalink: /components/nav-item
title: Navigation item
---

# Navigation item

Navigation items consists of an element and a text-node. It can be extended with optional child elements to achieve
specific designs.

```html
<a href="#" class="nav-item">
Standard nav-item
</a>
```

<a href="#" class="nav-item">
Standard nav-item
</a>

## Inherited hover

A navigation item with inherited hover has a standard color until hovered, where it will inherit the color of the
nearest set color.

```html
<a href="#" class="nav-item color--flash">
  <span class="nav-item-hover">
    Standard nav-item
  </span>
</a>
```

<a href="#" class="nav-item color--flash">
  <span class="nav-item-hover">
    Standard nav-item
  </span>
</a>

## With icon

```html
<a href="#" class="nav-item">
  <i class="fa fal fa-angle-left"></i>
  <span>
    Icon left
  </span>
</a>
```

<a href="#" class="nav-item">
  <i class="fa fal fa-angle-left"></i>
  <span>
    Icon left
  </span>
</a>

```html
<a href="#" class="nav-item">
  <span>
    Icon right
  </span>
  <i class="fa fal fa-angle-right"></i>
</a>
```

<a href="#" class="nav-item">
  <span>
    Icon right
  </span>
  <i class="fa fal fa-angle-right"></i>
</a>

### Icon and inherited

```html
<a href="#" class="nav-item color--bruger">
  <i class="fa fal fa-angle-left nav-item-hover color--graa3"></i>
  <span class="nav-item-hover color--graa3">
    Icon left
  </span>
</a>
```

<a href="#" class="nav-item color--bruger">
  <i class="fa fal fa-angle-left nav-item-hover color--graa3"></i>
  <span class="nav-item-hover color--graa3">
    Icon left
  </span>
</a>
