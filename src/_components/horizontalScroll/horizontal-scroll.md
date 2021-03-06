---
layout: component
title: Horizontal-scroll
description: Horizontal-scroll laver en carosel af items(ex. cards), som kan scroll til højre og venstre.
---

**OBS:** Husk at indsætte ***javascript-koden*** nede i bunden

<span style="color:#12507b;font-weight: bolder">Default horizontal-scroll</span>

<div id="exampleclass-scroll-container" class="horizontal-scroll-container grid-width--large position-relative">
  <button data-horizontallist="button-prev" class="horizontal-scroll-nav">
    <i class="fa fa-chevron-left"></i>
  </button>
  <button data-horizontallist="button-next" class="horizontal-scroll-nav">
    <i class="fa fa-chevron-right"></i>
  </button>
  <div data-horizontallist="itemcontainer" class="horizontal-scroll-items flex padding-m--l padding-m--r">
    <div class="horizontal-scroll-item flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 2 timer siden</small></p>
          <h3 class="card-title">Aliquam ultricies felis eget orci commodo fringilla</h3>
        </div>
      </a>
    </div>
    <div class="horizontal-scroll-item flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--tv">TV</span> - 3 timer siden</small></p>
          <h3 class="card-title">felis eget orci commodo ulimito</h3>
        </div>
      </a>
    </div>
    <div class="horizontal-scroll-item flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--sport">sport</span> - 5 timer siden</small></p>
          <h3 class="card-title">Ultricies commodo lecos mania</h3>
        </div>
      </a>
    </div>
    <div class="horizontal-scroll-item flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--flash">nyheder</span> - 8 timer siden</small></p>
          <h3 class="card-title">Fringilla levos tumio arcadia</h3>
        </div>
      </a>
    </div>
  </div>
</div>

```html
<div id="exampleclass-scroll-container" class="horizontal-scroll-container grid-width--large position-relative">
  <button data-horizontallist="button-prev" class="horizontal-scroll-nav">
    <i class="fa fa-chevron-left"></i>
  </button>
  <button data-horizontallist="button-next" class="horizontal-scroll-nav">
    <i class="fa fa-chevron-right"></i>
  </button>
  <div data-horizontallist="itemcontainer" class="horizontal-scroll-items flex padding-m--l padding-m--r">
    <div class="horizontal-scroll-item flex-item width-1of3 padding-m" style="min-width: 300px;">
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

<span style="color:#12507b;font-weight: bolder">Horizontal-scroll with small items</span>

<div id="exampleclass-scroll-container2" class="horizontal-scroll-container grid-width--large position-relative">
  <button data-horizontallist="button-prev" class="horizontal-scroll-nav">
    <i class="fa fa-chevron-left"></i>
  </button>
  <button data-horizontallist="button-next" class="horizontal-scroll-nav">
    <i class="fa fa-chevron-right"></i>
  </button>
  <div data-horizontallist="itemcontainer" class="horizontal-scroll-items flex padding-m--l padding-m--r">
    <div class="horizontal-scroll-item horizontal-scroll-item--small flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card card--small-media height-1of1">
        <div class="pad-none card-content" style="padding: 0 10px;">
          <p class="card-meta fs-small"><small><span class="color--nyheder">sport</span> - 2 timer siden</small></p>
          <h2 class="card-title fs-small">
            Aliquam ultricies felis eget orci commodo fringilla
          </h2>
        </div>
      </a>
    </div>
    <div class="horizontal-scroll-item horizontal-scroll-item--small flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card card--small-media height-1of1">
        <div class="pad-none card-content" style="padding: 0 10px;">
          <p class="card-meta fs-small"><small><span class="color--nyheder">nyheder</span> - 3 timer siden</small></p>
          <h2 class="card-title fs-small">
            felis eget orci commodo ulimito
          </h2>
        </div>
      </a>
    </div>
    <div class="horizontal-scroll-item horizontal-scroll-item--small flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card card--small-media height-1of1">
        <div class="pad-none card-content" style="padding: 0 10px;">
          <p class="card-meta fs-small"><small><span class="color--sport">sport</span> - 5 timer siden</small></p>
          <h2 class="card-title fs-small">
            Ultricies commodo lecos mania
          </h2>
        </div>
      </a>
    </div>
    <div class="horizontal-scroll-item horizontal-scroll-item--small flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#" class="card card--small-media height-1of1">
        <div class="pad-none card-content" style="padding: 0 10px;">
          <p class="card-meta fs-small"><small><span class="color--flash">nyheder</span> - 8 timer siden</small></p>
          <h2 class="card-title fs-small">
            Fringilla levos tumio arcadia
          </h2>
        </div>
      </a>
    </div>
  </div>
</div>


```html
<div id="exampleclass-scroll-container" class="horizontal-scroll-container grid-width--large position-relative">
  <button data-horizontallist="button-prev" class="horizontal-scroll-nav">
    <i class="fa fa-chevron-left"></i>
  </button>
  <button data-horizontallist="button-next" class="horizontal-scroll-nav">
    <i class="fa fa-chevron-right"></i>
  </button>
  <div data-horizontallist="itemcontainer" class="horizontal-scroll-items flex padding-m--l padding-m--r">
    <div class="horizontal-scroll-item horizontal-scroll-item--small flex-item width-1of3 padding-m" style="min-width: 300px;">
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

<script>
(function () {
  function horizontalList(listId) {

    /* horizontal Scroll elements */
    const scrollContainer = document.getElementById(listId);
    const scrollItemContainer = scrollContainer.querySelector('[data-horizontallist="itemcontainer"]');
    const prevScrollBtn = scrollContainer.querySelector('[data-horizontallist="button-prev"]');
    const nextScrollBtn = scrollContainer.querySelector('[data-horizontallist="button-next"]');
    const children = scrollItemContainer.children;
    const listLength = children.length;
    const containerRight = scrollContainer.getBoundingClientRect().right;
    const lastChild = children[listLength - 1];

    /**
     * Find how many visible elements we have
     */
    let visibleChildren = Array.from(children).filter((child) => child.getBoundingClientRect().right <= containerRight)
      .length;

    if (visibleChildren === listLength) {
      /**
       * If there is no invisible elements hide buttons
       */
      prevScrollBtn.style.display = 'none';
      nextScrollBtn.style.display = 'none';
    } else {
      /**
       * We dont need to count the visible elements
       */
      const maxLength = listLength - visibleChildren;
      let listCurrent = 0;

      /**
       * Advance scroll to make next or previous element visible
       */
      function scroll(listCurrent) {
        const newPos = children[listCurrent];

        scrollItemContainer.scrollTo({
          behavior: 'smooth',
          left: newPos.offsetLeft,
          top: 0,
        });
      }

      /* horizontal scroll to the left */
      nextScrollBtn.addEventListener('click', function () {
        if (listCurrent !== maxLength) {
          listCurrent++;
          scroll(listCurrent);
        }
      });

      /* horizontal scroll to the right */
      prevScrollBtn.addEventListener('click', function () {
        if (listCurrent !== 0) {
          listCurrent--;
          scroll(listCurrent);
        }
      });
    }
  }

  horizontalList('exampleclass-scroll-container');
  horizontalList('exampleclass-scroll-container2');
})();
</script>

<span style="color:#12507b;font-weight: bolder">JavaScript (nødvendigt)</span>

```javascript
(function () {
  function horizontalList(listId) {

    /* horizontal Scroll elements */
    const scrollContainer = document.getElementById(listId);
    const scrollItemContainer = scrollContainer.querySelector('[data-horizontallist="itemcontainer"]');
    const prevScrollBtn = scrollContainer.querySelector('[data-horizontallist="button-prev"]');
    const nextScrollBtn = scrollContainer.querySelector('[data-horizontallist="button-next"]');
    const children = scrollItemContainer.children;
    const listLength = children.length;
    const containerRight = scrollContainer.getBoundingClientRect().right;
    const lastChild = children[listLength - 1];

    /**
     * Find how many visible elements we have
     */
    let visibleChildren = Array.from(children).filter((child) => child.getBoundingClientRect().right <= containerRight)
      .length;

    if (visibleChildren === listLength) {
      /**
       * If there is no invisible elements hide buttons
       */
      prevScrollBtn.style.display = 'none';
      nextScrollBtn.style.display = 'none';
    } else {
      /**
       * We dont need to count the visible elements
       */
      const maxLength = listLength - visibleChildren;
      let listCurrent = 0;

      /**
       * Advance scroll to make next or previous element visible
       */
      function scroll(listCurrent) {
        const newPos = children[listCurrent];

        scrollItemContainer.scrollTo({
          behavior: 'smooth',
          left: newPos.offsetLeft,
          top: 0,
        });
      }

      /* horizontal scroll to the left */
      nextScrollBtn.addEventListener('click', function () {
        if (listCurrent !== maxLength) {
          listCurrent++;
          scroll(listCurrent);
        }
      });

      /* horizontal scroll to the right */
      prevScrollBtn.addEventListener('click', function () {
        if (listCurrent !== 0) {
          listCurrent--;
          scroll(listCurrent);
        }
      });
    }
  }

  horizontalList('exampleclass-scroll-container');
})();
```
