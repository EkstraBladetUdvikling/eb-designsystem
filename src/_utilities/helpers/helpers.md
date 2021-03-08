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

For både **margin** og **padding** klassen har vi fem størrelser *(s, m, l, xl og xxl)* og så *none* som sættes på med bindesteg.

```html
<div class="margin-none padding-none"></div>
<div class="margin-s padding-s"></div>
<div class="margin-m padding-m"></div>
<div class="margin-l padding-l"></div>
<div class="margin-xl padding-xl"></div>
<div class="margin-none padding-xxl"></div>
```

Overstående vil give henholdsvis **margin** og **padding** hele vejen rundt. Ønskes der derimod kun at have **margin** og **padding** i en retning tilføjes dette med double bindestreg.

```html
<div class="margin-l--t padding-l--t"></div>
<div class="margin-l--r padding-l--r"></div>
<div class="margin-l--b padding-l--b"></div>
<div class="margin-l--l padding-l--l"></div>
```

Vi har også to samle klasser for *top-bottom* og *right-left*.

```html
<div class="margin-l--tb padding-l--tb"></div>
<div class="margin-l--rl padding-l--rl"></div>
```

## Border-radius

Alle border-radius
```html
<div class="border-radius-s"></div>
<div class="border-radius-m"></div>
<div class="border-radius-l"></div>
```

Top border-radius
```html
<div class="border-radius-s--t"></div>
<div class="border-radius-m--t"></div>
<div class="border-radius-l--t"></div>
```

Bottom border-radius
```html
<div class="border-radius-s--b"></div>
<div class="border-radius-m--b"></div>
<div class="border-radius-l--b"></div>
```
