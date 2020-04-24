---
layout: component
title: Flex
---

## Single item centered

<div class="flex flex-justify--around bg--graa1 text-align--center">
  <div class="flex-item bg--graa3"><p>Flex item 1</p><p>.flex-item</p></div>
</div>

```html
<div class="flex flex-justify--around bg--graa1 text-align--center">
  <div class="flex-item bg--graa3"><p>Flex item 1</p><p>.flex-item</p></div>
</div>
```

## Three items space around

<div class="flex flex-justify--around bg--graa1 text-align--center">
  <div class="flex-item bg--graa3"><p>Flex item 1</p><p>.flex-item</p></div>
  <div class="flex-item bg--graa3"><p>Flex item 2</p><p>.flex-item</p></div>
  <div class="flex-item bg--graa3"><p>Flex item 3</p><p>.flex-item</p></div>
</div>


```html
<div class="flex flex-justify--around bg--graa1 text-align--center">
  <div class="flex-item bg--graa3"><p>Flex item 1</p><p>.flex-item</p></div>
  <div class="flex-item bg--graa3"><p>Flex item 2</p><p>.flex-item</p></div>
  <div class="flex-item bg--graa3"><p>Flex item 3</p><p>.flex-item</p></div>
</div>
```

## Three items space between

<div class="flex flex-justify--between bg--graa1 text-align--center">
  <div class="flex-item bg--graa3"><p>Flex item 1</p><p>.flex-item</p></div>
  <div class="flex-item bg--graa3"><p>Flex item 2</p><p>.flex-item</p></div>
  <div class="flex-item bg--graa3"><p>Flex item 3</p><p>.flex-item</p></div>
</div>

```html
<div class="flex flex-justify--between bg--graa1 text-align--center">
  <div class="flex-item bg--graa3"><p>Flex item 1</p><p>.flex-item</p></div>
  <div class="flex-item bg--graa3"><p>Flex item 2</p><p>.flex-item</p></div>
  <div class="flex-item bg--graa3"><p>Flex item 3</p><p>.flex-item</p></div>
</div>
```


## Four items individually placed

Height of the parent element is set to illustrate how the indivual items can be placed.

<div class="flex flex-justify--between bg--graa1 text-align--center" style="height: 300px;">
  <div class="flex-item flex-item--start bg--graa3"><p>Flex item 1</p><p>.flex-item.flex-item--start</p></div>
  <div class="flex-item flex-item--end bg--graa3"><p>Flex item 2</p><p>.flex-item.flex-item--end</p></div>
  <div class="flex-item flex-item--center bg--graa3"><p>Flex item 3</p><p>.flex-item.flex-item--center</p></div>
  <div class="flex-item flex-item--stretch bg--graa3"><p>Flex item 4</p><p>.flex-item.flex-item--stretch</p></div>
</div>

```html
<div class="flex flex-justify--between bg--graa1 text-align--center" style="height: 300px;">
  <div class="flex-item flex-item--start bg--graa3">
    <p>Flex item 1</p>
    <p>.flex-item.flex-item--start</p>
  </div>
  <div class="flex-item flex-item--end bg--graa3">
    <p>Flex item 2</p>
    <p>.flex-item.flex-item--end</p>
  </div>
  <div class="flex-item flex-item--center bg--graa3">
    <p>Flex item 3</p>
    <p>.flex-item.flex-item--center</p>
  </div>
  <div class="flex-item flex-item--stretch bg--graa3">
    <p>Flex item 4</p>
    <p>.flex-item.flex-item--stretch</p>
  </div>
</div>
```

## Yderligere klasser

Her de klasser som findes i systemet men ikek er med i overstående eksempler.

**Flex directions**

```html
<div class="flex-column"></div>
<div class="flex flex-row--reverse"></div>
```

**Align-items og fustify-content**

```html
<div class="flex flex--center">align-items og justify-content er lig center</div>
<div class="flex flex-align--center">align-items er center</div>
<div class="flex flex-align--stretch">align-items er stretch</div>
<div class="flex flex-align--start">align-items er flex-start</div>
<div class="flex flex-align--end">align-items er flex-end</div>
<div class="flex flex-justify--end">justify-content er flex-end</div>
<div class="flex flex-justify--center">justify-content er center</div>

```

**Wrap**

```html
<div class="flex flex-wrap--wrap"></div>
```

**Sizing**

```html
<div class="flex">
  <div class="flex-item--grow"></div>
  <div class="flex-item--noshrink"></div>
</div>
```
