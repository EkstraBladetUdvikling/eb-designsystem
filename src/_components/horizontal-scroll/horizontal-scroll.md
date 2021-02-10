---
layout: component
title: Horizontal-scroll
description: Horizontal-scroll laver en carosel af items(ex. cards), som kan scroll til højre og venstre.
---

**OBS:** Husk at indsætte ***javascript-koden*** nede i bunden

<span style="color:#12507b;font-weight: bolder">Default horizontial-scroll</span>

<div id="exampleclass-scroll-container" class="grid-width--large horizontal-scroll--container position-relative">
  <button id="prev-scroll-btn" class="button button--solid button--icon button--secondary horizontal-scroll--nav">
    <i class="fa fa-chevron-left"></i>
  </button>
  <button
    id="next-scroll-btn"
    class="button button--solid button--icon button--secondary horizontal-scroll--nav horizontal-scroll--nav-next"
  >
    <i class="fa fa-chevron-right"></i>
  </button>
  <div id="exampleclass-scroll-item-container" class="flex padding-m--l padding-m--r horizontal-scroll--scroll-container">
    <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 2 timer siden</small></p>
          <h3 class="card-title">Aliquam ultricies felis eget orci commodo fringilla</h3>
        </div>
      </a>
    </div>
    <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--tv">TV</span> - 3 timer siden</small></p>
          <h3 class="card-title">felis eget orci commodo ulimito</h3>
        </div>
      </a>
    </div>
    <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--sport">sport</span> - 5 timer siden</small></p>
          <h3 class="card-title">Ultricies commodo lecos mania</h3>
        </div>
      </a>
    </div>
    <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--flash">nyheder</span> - 8 timer siden</small></p>
          <h3 class="card-title">Fringilla levos tumio arcadia</h3>
        </div>
      </a>
    </div>
  </div>
</div>

<script>
/* Horizontial Scroll elements */
const scrollContainer = document.getElementById('exampleclass-scroll-container');
const scrollItemContainer = document.getElementById('exampleclass-scroll-item-container');
const prevScrollBtn = scrollContainer.querySelector('#prev-scroll-btn');
const nextScrollBtn = scrollContainer.querySelector('#next-scroll-btn');
const children = scrollItemContainer.children;
const listLength = children.length;
let listCurrent = 0;

/* Horizontial scroll to the left */
nextScrollBtn.addEventListener('click', function() {
  if (listCurrent !== listLength - 1) {
    listCurrent++;
    const newPos = children[listCurrent];
    scrollItemContainer.scrollTo({
      behavior: 'smooth',
      left: newPos.offsetLeft,
      top: 0,
    });
  }
});

/* Horizontial scroll to the right */
prevScrollBtn.addEventListener('click', function() {
  if (listCurrent !== 0) {
    listCurrent--;
    const newPos = children[listCurrent];
    scrollItemContainer.scrollTo({
      behavior: 'smooth',
      left: newPos.offsetLeft,
      top: 0,
    });
  }
});
</script>

```html
<div id="exampleclass-scroll-container" class="grid-width--large horizontal-scroll--container position-relative">
  <button id="prev-scroll-btn" class="button button--solid button--icon button--secondary horizontal-scroll--nav">
    <i class="fa fa-chevron-left"></i>
  </button>
  <button
    id="next-scroll-btn"
    class="button button--solid button--icon button--secondary horizontal-scroll--nav horizontal-scroll--nav-next"
  >
    <i class="fa fa-chevron-right"></i>
  </button>
  <div id="exampleclass-scroll-item-container" class="flex padding-m--l padding-m--r horizontal-scroll--scroll-container">
    <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 2 timer siden</small></p>
          <h3 class="card-title">Aliquam ultricies felis eget orci commodo fringilla</h3>
        </div>
      </a>
    </div>
  </div>
</div>
```

<span style="color:#12507b;font-weight: bolder">JavaScript (nødvendigt)</span>
```javascript
/* Horizontial Scroll elements */
const scrollContainer = document.getElementById('exampleclass-scroll-container');
const scrollItemContainer = document.getElementById('exampleclass-scroll-item-container');
const prevScrollBtn = scrollContainer.querySelector('#prev-scroll-btn');
const nextScrollBtn = scrollContainer.querySelector('#next-scroll-btn');
const children = scrollItemContainer.children;
const listLength = children.length;
let listCurrent = 0;

/* Horizontial scroll to the left */
nextScrollBtn.addEventListener('click', function() {
  if (listCurrent !== listLength - 1) {
    listCurrent++;
    const newPos = children[listCurrent];
    scrollItemContainer.scrollTo({
      behavior: 'smooth',
      left: newPos.offsetLeft,
      top: 0,
    });
  }
});

/* Horizontial scroll to the right */
prevScrollBtn.addEventListener('click', function() {
  if (listCurrent !== 0) {
    listCurrent--;
    const newPos = children[listCurrent];
    scrollItemContainer.scrollTo({
      behavior: 'smooth',
      left: newPos.offsetLeft,
      top: 0,
    });
  }
});
```
