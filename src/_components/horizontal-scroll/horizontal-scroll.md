---
layout: component
title: Horizontal-scroll
description: The horizontal-scroll creates a carosel of items i.e cards that can be scrolled horizontally left and right.
---

<div class="grid-width--large horizontal-scroll--container position-relative">
  <button id="prev-scroll-btn" class="button button--solid button--icon button--secondary horizontal-scroll--nav">
    <i class="fa fa-chevron-left"></i>
  </button>
  <button
    id="next-scroll-btn"
    class="button button--solid button--icon button--secondary horizontal-scroll--nav horizontal-scroll--nav-next"
  >
    <i class="fa fa-chevron-right"></i>
  </button>
  <div class="flex padding-m--l padding-m--r horizontal-scroll--scroll-container">
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

<span style="color:#12507b;font-weight: bolder">HTML</span> - Cards with a static min-width (as showed in the example)
```html
<div class="grid-width--large horizontal-scroll--container position-relative">
  <button id="prev-scroll-btn" class="button button--solid button--icon button--secondary horizontal-scroll--nav">
    <i class="fa fa-chevron-left"></i>
  </button>
  <button
    id="next-scroll-btn"
    class="button button--solid button--icon button--secondary horizontal-scroll--nav horizontal-scroll--nav-next"
  >
    <i class="fa fa-chevron-right"></i>
  </button>
  <div id="example-scroll-container" class="flex padding-m--l padding-m--r horizontal-scroll--scroll-container">
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

<span style="color:#12507b;font-weight: bolder">JavaScript</span> - Functions to make the horizontial-scroll work
```html
/* Horizontial Scroll elements */
const scrollItemContainer = document.getElementById('example-scroll-container') as HTMLDivElement;
const prevScrollBtn = document.getElementById('prev-scroll-btn');
const nextScrollBtn = document.getElementById('next-scroll-btn');
let listCurrent = 0;

/* Horizontial scroll to the left */
nextScrollBtn.addEventListener('click', () => {
  const listLength = scrollItemContainer.children.length;
  if (listCurrent !== listLength - 1) {
    listCurrent++;
    const newPosition = scrollItemContainer.children[listCurrent] as HTMLDivElement;
    scrollItemContainer.scrollTo({
      behavior: 'smooth',
      left: newPosition.offsetLeft,
      top: 0,
    });
  }
});

/* Horizontial scroll to the right */
prevScrollBtn.addEventListener('click', () => {
  if (listCurrent !== 0) {
    listCurrent--;
    const newPosition = scrollItemContainer.children[listCurrent] as HTMLDivElement;
    scrollItemContainer.scrollTo({
      behavior: 'smooth',
      left: newPosition.offsetLeft,
      top: 0,
    });
  }
});
```
