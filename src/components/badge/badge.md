---
layout: component
title: Badge
---

Badges kan benyttes som mærkater eller som indikation af tags. Størrelsen af et badge kan styres vha. <a href="../../utilities/fonts/fonts.html"> font-sizes</a>.


<span class="badge">Standard badge</span>

```html
<span class="badge">Standard badge</span>
```

Prædefinerede farver:

<span class="badge badge--primary">Primary</span>
<span class="badge badge--secondary">Secondary</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--danger">Danger</span>

```html
<span class="badge badge--primary">Primary</span>
<span class="badge badge--secondary">Secondary</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--danger">Danger</span>
```

Som links / aktive tags:

<a href="#" class="badge bg--bluedark">Bandekriminalitet</a> <a href="#" class="badge bg--green">Sport</a> <a href="#" class="badge bg--greendark">Nicklas Bendtner</a>

```html
<a href="#" class="badge bg--bluedark">Bandekriminialitet</a>
<a href="#" class="badge bg--green">Sport</a>
<a href="#" class="badge bg--greendark">Nicklas Bendtner</a>
```


Andre farver og variationer:

<span class="badge text-transform--uppercase"><small>Small text</small></span> <span class="badge bg--native">Native</span> <span class="badge badge--small bg--greendark fontsize-xxsmall">Greendark xxsmall</span> <span class="badge">Badge with icon <i class="fa fal fa-trash"></i></span>

```html
<span class="badge text-transform--uppercase"><small>Small text uppercase</small></span>
<span class="badge bg--native">Native</span>
<span class="badge badge--small bg--greendark fontsize-xsmall">Greendark xsmall</span>
<span class="badge">Badge with icon <i class="fa fal fa-trash"></i></span>
```

Liste med tags:
<div class="width-1of2 flex flex-wrap--wrap bg--graa7 padding-s" style="resize: horizontal; overflow: auto">
  <a href="#" class="badge margin-s--r margin-s--b">Lorem</a>
  <a href="#" class="badge margin-s--r margin-s--b">ipsum dolor sit</a>
  <a href="#" class="badge margin-s--r margin-s--b">amet</a>
  <a href="#" class="badge margin-s--r margin-s--b"> consectetur</a>
  <a href="#" class="badge margin-s--r margin-s--b">adipiscing</a>
  <a href="#" class="badge margin-s--r margin-s--b">elit</a>
  <a href="#" class="badge margin-s--r margin-s--b">sed do</a>
  <a href="#" class="badge margin-s--r margin-s--b">eiusmod tempor incididunt ut labore</a>
  <a href="#" class="badge margin-s--r margin-s--b">et dolore magna</a>
  <a href="#" class="badge margin-s--r margin-s--b">aliqua</a>
  <a href="#" class="badge margin-s--r margin-s--b">Ut enim ad minim</a>
  <a href="#" class="badge margin-s--r margin-s--b">veniam</a>
  <a href="#" class="badge margin-s--r margin-s--b">quis</a>
  <a href="#" class="badge margin-s--r margin-s--b">nostrud</a>
  <a href="#" class="badge margin-s--r margin-s--b">exercitation</a>
</div>

```html
<div class="flex flex-wrap--wrap">
  <a href="#" class="badge margin-s--r margin-s--b">Lorem</a>
  ...
</div>
```
