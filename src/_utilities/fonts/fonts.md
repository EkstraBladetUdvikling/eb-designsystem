---
layout: component
title: Fonts
---

## Font family

### Primary

<div class="ff-primary">
  Her er .ff-primary
  <p>
    Aa Bb Cc Dd Ee Ff Gg
    Hh Ii Jj Kk Ll Mm Nn
    Oo Pp Qq Rr Ss Tt Uu
    Vv Ww Xx Yy Zz
    Ææ Øø Åå

    1234567890
  </p>
</div>

```html
<div class="ff-primary">
  Her er ff-primary
</div>
```

### Secondary

<div class="ff-secondary">
  Her er .ff-secondary
  <p>
    Aa Bb Cc Dd Ee Ff Gg
    Hh Ii Jj Kk Ll Mm Nn
    Oo Pp Qq Rr Ss Tt Uu
    Vv Ww Xx Yy Zz
    Ææ Øø Åå

    1234567890
  </p>
</div>

```html
<div class="ff-secondary">
  Her er ff-secondary
</div>
```

## Font-size

Font-size er sat i rem for at understøtte brugerens font-size valg i browseren.

rem værdien er udregnet i forhold til en basis font-size på 16px, hvilket er browser-standarden

Der er både en _larger_ og en _smaller_ mulighed, der begge er relative til parent fontsize

<div>
  <div class="fontsize-xxsmall padding-m--tb">fontsize-xxsmall = .625rem ~ 10px;<div class="fontsize-smaller">fontsize-smaller</div><div class="fontsize-larger">fontsize-larger</div></div>
  <div class="fontsize-xsmall padding-m--tb">fontsize-xsmall = .75rem ~ 12px;<div class="fontsize-smaller">fontsize-smaller</div><div class="fontsize-larger">fontsize-larger</div></div>
  <div class="fontsize-small padding-m--tb">fontsize-small = .875rem ~ 14px;<div class="fontsize-smaller">fontsize-smaller</div><div class="fontsize-larger">fontsize-larger</div></div>
  <div class="fontsize-medium padding-m--tb">fontsize-medium = 1rem ~ 16px;<div class="fontsize-smaller">fontsize-smaller</div><div class="fontsize-larger">fontsize-larger</div></div>
  <div class="fontsize-large padding-m--tb">fontsize-large = 1.125rem ~ 18px;<div class="fontsize-smaller">fontsize-smaller</div><div class="fontsize-larger">fontsize-larger</div></div>
  <div class="fontsize-xlarge padding-m--tb">fontsize-xlarge = 1.25rem ~ 20px;<div class="fontsize-smaller">fontsize-smaller</div><div class="fontsize-larger">fontsize-larger</div></div>
  <div class="fontsize-xxlarge padding-m--tb">fontsize-xxlarge = 1.875rem ~ 30px;<div class="fontsize-smaller">fontsize-smaller</div><div class="fontsize-larger">fontsize-larger</div></div>
  <div class="fontsize-xxxlarge padding-m--tb">fontsize-xxxlarge = 2.25rem ~ 36px;<div class="fontsize-smaller">fontsize-smaller</div><div class="fontsize-larger">fontsize-larger</div></div>
  <div class="fontsize-xxxxlarge padding-m--tb">fontsize-xxxxlarge = 3.125rem ~ 50px;<div class="fontsize-smaller">fontsize-smaller</div><div class="fontsize-larger">fontsize-larger</div></div>
</div>

```html
<div class="fontsize-xxsmall">
  fontsize-xxsmall = .625rem ~ 10px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
</div>
<div class="fontsize-xsmall">
  fontsize-xsmall = .75rem ~ 12px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
</div>
<div class="fontsize-small">
  fontsize-small = .875rem ~ 14px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
</div>
<div class="fontsize-medium">
  fontsize-medium = 1rem ~ 16px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
</div>
<div class="fontsize-large">
  fontsize-large = 1.125rem ~18px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
  </div>
<div class="fontsize-xlarge">
  fontsize-xlarge = 1.25rem ~20px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
  </div>
<div class="fontsize-xxlarge">
  fontsize-xxlarge = 1.875rem ~30px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
  </div>
<div class="fontsize-xxxlarge">
  fontsize-xxxlarge = 2.25rem ~36px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
  </div>
<div class="fontsize-xxxxlarge">
  fontsize-xxxxlarge = 3.125rem ~50px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
  </div>
```

## Font-weight

<div>
  <p class="fontweight-normal">fontweight-normal</p>
  <p class="fontweight-bold">fontweight-bold</p>
  <p class="fontweight-bolder">fontweight-bolder</p>
</div>

```html
<p class="fontweight-normal">fontweight-normal</p>
<p class="fontweight-bold">fontweight-bold</p>
<p class="fontweight-bolder">fontweight-bolder</p>
```
