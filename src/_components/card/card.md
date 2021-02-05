---
layout: component
title: Card
---

## Default card

<div class="grid-width--small">
  <a href="#" class="card margin-m--b">
    <div class="card-media">
      <img class="card-image" src="https://via.placeholder.com/610x343&text=610x343">
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--sport">Sport</span> - 12 timer siden</small></p>
      <h2 class="card-title">Nulla facilisi. Nulla mattis felis eget convallis vehicula</h2>
    </div>
  </a>

  <div class="flex flex-justify--between">
    <a href="#" class="card width-1of2">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-icon">
          <svg viewBox="0 0 40 35">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#play-icon"></use>
          </svg>
        </div>
      </div>
      <div class="card-content">
        <p class="card-meta color--graa3"><small><span class="color--nyheder">Politik</span> - 2 timer siden</small></p>
        <h3 class="card-title">Donec sed tincidunt ex, vestibulum congue arcu</h3>
      </div>
    </a>

    <a href="#" class="card width-1of2 margin-m--l">
      <div class="card-content">
        <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 8 timer siden</small></p>
        <h3 class="card-title">Aliquam ultricies felis eget orci commodo fringilla</h3>
      </div>
    </a>
  </div>
</div>

```html
<a href="#" class="card margin-m--b">
  <div class="card-media">
    <img class="card-image" src="https://via.placeholder.com/610x343&text=610x343" height="343" width="610">
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--sport">Sport</span> - 12 timer siden</small></p>
    <h2 class="card-title">Nulla facilisi. Nulla mattis felis eget convallis vehicula</h2>
  </div>
</a>

<a href="#" class="card width-1of2">
  <div class="card-media">
    <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
    <div class="card-icon">
      <svg viewBox="0 0 40 35">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#play-icon"></use>
      </svg>
    </div>
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--nyheder">Politik</span> - 2 timer siden</small></p>
    <h3 class="card-title">Donec sed tincidunt ex, vestibulum congue arcu</h3>
  </div>
</a>

<a href="#" class="card width-1of2 margin-m--l">
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 8 timer siden</small></p>
    <h3 class="card-title">Aliquam ultricies felis eget orci commodo fringilla</h3>
  </div>
</a>
```

## Small media card

<div class="grid-width--small">
  <a href="#" class="card card--small-media margin-l--b">
    <div class="card-media">
      <img class="card-image" src="https://via.placeholder.com/200x112&text=200x112" height="112" width="200">
      <div class="card-icon">
        <svg viewBox="0 0 40 35">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#play-icon"></use>
        </svg>
      </div>
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--sport">Sport</span> - 6 timer siden</small></p>
      <h3 class="card-title">Curabitur vehicula ac urna</h3>
    </div>
  </a>

  <a href="#" class="card card--small-media margin-l--b">
    <div class="card-media">
      <img class="card-image" src="https://via.placeholder.com/200x112&text=200x112" height="112" width="200">
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--nyheder">Politik</span> - 11 timer siden</small></p>
      <h3 class="card-title">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel. Nam cursus sed nibh quis porttitor.</h3>
    </div>
  </a>

  <a href="#" class="card card--small-media margin-l--b">
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 19 timer siden</small></p>
      <h3 class="card-title">Donec dictum neque et molestie consequat. Cras pharetra tincidunt.</h3>
    </div>
  </a>

  <a href="#" class="card card--small-media card--small-media--reverse margin-l--b">
    <div class="card-media">
      <img class="card-image" src="https://via.placeholder.com/200x112&text=200x112" height="112" width="200">
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--nyheder">Politik</span> - 11 timer siden</small></p>
      <h3 class="card-title">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h3>
    </div>
  </a>
</div>

```html
<a href="#" class="card card--small-media margin-l--b">
  <div class="card-media">
    <img class="card-image" src="https://via.placeholder.com/200x112&text=200x112" height="112" width="200">
    <div class="card-icon">
      <svg viewBox="0 0 40 35">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#play-icon"></use>
      </svg>
    </div>
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--sport">Sport</span> - 6 timer siden</small></p>
    <h3 class="card-title">Curabitur vehicula ac urna</h3>
  </div>
</a>

<a href="#" class="card card--small-media margin-l--b">
  <div class="card-media">
    <img class="card-image" src="https://via.placeholder.com/200x112&text=200x112" height="112" width="200">
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--nyheder">Politik</span> - 11 timer siden</small></p>
    <h3 class="card-title">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel. Nam cursus sed nibh quis porttitor.</h3>
  </div>
</a>

<a href="#" class="card card--small-media margin-l--b">
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 19 timer siden</small></p>
    <h3 class="card-title">Donec dictum neque et molestie consequat. Cras pharetra tincidunt.</h3>
  </div>
</a>

<a href="#" class="card card--small-media card--small-media--reverse margin-l--b">
  <div class="card-media">
    <img class="card-image" src="https://via.placeholder.com/200x112&text=200x112" height="112" width="200">
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--nyheder">Politik</span> - 11 timer siden</small></p>
    <h3 class="card-title">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h3>
  </div>
</a>
```

## Ikke et link card

Blot erstat `<a>` med `<div>`, det vil samtidig fjerne hover effekten.

<div class="grid-width--small">
  <div class="card margin-xl--b">
    <div class="card-media">
      <img class="card-image" src="https://via.placeholder.com/610x343&text=610x343" height="343" width="610">
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--sport">Sport</span> - 12 timer siden</small></p>
      <h2 class="card-title">Nulla facilisi. Nulla mattis felis eget convallis vehicula</h2>
    </div>
  </div>
</div>

```html
<div class="card margin-xl--b">
  <div class="card-media">
    <img class="card-image" src="https://via.placeholder.com/610x343&text=610x343" height="343" width="610">
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--sport">Sport</span> - 12 timer siden</small></p>
    <h2 class="card-title">Nulla facilisi. Nulla mattis felis eget convallis vehicula</h2>
  </div>
</div>
```

## Header og footer

Et "card" kan indeholde en top eller bund, ved at tilføje et element med navnet: `<xxx class="card-header">` eller `<xxx class="card-footer">`.

<div class="grid-width--small">
  <div class="card margin-xl--b">
    <div class="card-header"><b>Header her</b></div>
    <div class="card-media">
      <img class="card-image" src="https://via.placeholder.com/610x343&text=610x343" height="343" width="610">
    </div>
    <div class="card-content">
      <h2 class="card-title">Nulla facilisi. Nulla mattis felis eget convallis vehicula</h2>
    </div>
    <div class="card-footer flex flex-justify--between">
      <p class="card-meta color--graa3"><small><i class="far fa-clock"></i> 12 timer siden</small></p>
      <p class="card-meta color--graa3"><small><span class="badge bg--native">Native</span> <span class="badge bg--green">Sport</span> </small></p>
    </div>
  </div>
</div>


## Brugseksempler

<div class="grid-width--large margin-xl--b">
  <a href="#" class="card card--small-media card--small-media--reverse bg--flash">
    <div class="card-header bg--rose">
      <p class="card-meta"><small><span>Politik</span> - 11 timer siden</small></p>
    </div>
    <div class="card-media">
      <img class="card-image" src="https://via.placeholder.com/455x255&text=455x255" height="255" width="455">
    </div>
    <div class="card-content">
      <p class="card-meta"><small><span>Politik</span> - 11 timer siden</small></p>
      <h2 class="card-title">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h2>
    </div>
    <div class="card-footer flex flex-justify--around bg--graa7">
      <button class="button button--solid button--accept">
        <span>Vælg</span>
      </button>
    </div>
  </a>
</div>

<div class="grid-width--small margin-xl--b">
  <a href="#" class="card card--small-media bg--breaking">
    <div class="card-media">
      <img class="card-image" src="https://via.placeholder.com/150x84&text=150x84" height="84" width="150">
    </div>
    <div class="card-content">
      <p class="card-meta"><small><span>BREAKING NEWS</span></small></p>
      <h3 class="card-title">Curabitur vehicula ac urna</h3>
    </div>
  </a>
</div>

<div class="grid-width--large">
  <div class="flex flex-justify--between">
      <a href="#" class="card width-1of3 bg--rose">
        <div class="card-media">
          <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        </div>
        <div class="card-content">
          <div class="card-meta flex flex-align--center flex-justify--between fs-large">
            <div class="badge bg--white">
              <img class="card-image" src="https://side6.dk/assets/images/side6_FS.png" style="width:65px;">
            </div>
            <i class="fa fal fa-external-link-alt"></i>
          </div>
          <h3 class="card-title card-title--large">Donec sed tincidunt ex, vestibulum congue arcu</h3>
        </div>
      </a>

      <a href="#" class="card width-1of3 flex-item--start margin-m--l">
        <div class="card-media">
          <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        </div>
        <div class="card-content text-align--center">
          <h3 class="card-title">Donec sed tincidunt ex, vestibulum congue arcu</h3>
          <p class="card-meta color--graa3 margin-m--t"><small><i class="far fa-clock"></i> 12 timer siden</small></p>
        </div>
      </a>

      <a href="#" class="card width-1of3 margin-m--l">
        <div class="card-header text-align--center">
            <b>Avisen</b>
        </div>
        <div class="card-content">
           <p class="margin-none margin-l--b">Cras sed viverra tortor. Sed dictum lacus nec velit ultricies viverra sed tincidunt mi. Nulla mi velit, dictum sed tempor vitae, mattis a felis.</p>
          <p class="card-meta color--graa2 text-align--center">Buy for only:</p>
          <h3 class="card-title text-align--center">120<small>,-</small></h3>
        </div>
        <div class="card-footer flex flex-justify--around bg--graa7">
          <button class="button button--solid button--accept">
            <span>Vælg</span>
          </button>
        </div>
      </a>
  </div>
</div>

```html
<a href="#" class="card card--small-media card--small-media--reverse bg--flash">
  <div class="card-header bg--rose">
    <p class="card-meta"><small><span>Politik</span> - 11 timer siden</small></p>
  </div>
  <div class="card-media">
    <img class="card-image" src="https://via.placeholder.com/455x255&text=455x255" height="255" width="455">
  </div>
  <div class="card-content">
    <p class="card-meta"><small><span>Politik</span> - 11 timer siden</small></p>
    <h2 class="card-title">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h2>
  </div>
  <div class="card-footer flex flex-justify--around bg--graa7">
    <button class="button button--solid button--accept">
      <span>Vælg</span>
    </button>
  </div>
</a>

<a href="#" class="card card--small-media bg--breaking">
  <div class="card-media">
    <img class="card-image" src="https://via.placeholder.com/150x84&text=150x84" height="84" width="150">
  </div>
  <div class="card-content">
    <p class="card-meta"><small><span>BREAKING NEWS</span></small></p>
    <h3 class="card-title">Curabitur vehicula ac urna</h3>
  </div>
</a>

<a href="#" class="card width-1of3 bg--rose">
    <div class="card-media">
      <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
    </div>
    <div class="card-content">
      <div class="card-meta flex flex-align--center flex-justify--between fs-large ">
          <div class="badge bg--white">
            <img class="card-image" src="https://side6.dk/assets/images/side6_FS.png" style="width:65px;">
          </div>
          <i class="fa fal fa-external-link-alt"></i>
      </div>
      <h3 class="card-title card-title--large">Donec sed tincidunt ex, vestibulum congue arcu</h3>
    </div>
  </a>

  <a href="#" class="card width-1of3 flex-item--start margin-m--l">
    <div class="card-media">
      <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
    </div>
    <div class="card-content text-align--center">
      <h3 class="card-title">Donec sed tincidunt ex, vestibulum congue arcu</h3>
      <p class="card-meta color--graa3 margin-m--t"><small><i class="far fa-clock"></i> 12 timer siden</small></p>
    </div>
  </a>

  <a href="#" class="card width-1of3 margin-m--l">
    <div class="card-header text-align--center">
        <b>Avisen</b>
    </div>
    <div class="card-content">
        <p class="margin-none margin-l--b">Cras sed viverra tortor. Sed dictum lacus nec velit ultricies viverra sed tincidunt mi. Nulla mi velit, dictum sed tempor vitae, mattis a felis.</p>
      <p class="card-meta color--graa2 text-align--center">Buy for only:</p>
      <h3 class="card-title text-align--center">120<small>,-</small></h3>
    </div>
    <div class="card-footer flex flex-justify--around bg--graa7">
      <button class="button button--solid button--accept">
        <span>Vælg</span>
      </button>
    </div>
  </a>
```
## Card modes

Et card-mode er re-design af det originale card-element.

<span style="color:#12507b;font-weight: bolder">Default card-mode</span>
<div class="flex grid-width--small">
    <a href="#" class="card-mode width-1of2 margin-s--r">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-icon">
          <svg viewBox="0 0 100 100">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="play-circle" class="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5 81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z"></path></svg>
          </svg>
        </div>
        <div class="card-section-border bg--breaking"></div>
      </div>
      <div class="card-content">
        <p class="card-meta fontsize-small margin-s--b"><small>Politik - 2 timer siden</small></p>
        <h2 class="fontsize-medium">Curabitur vehicula ac urna</h2>
        <div class="card-icon-plus">
          <svg viewBox="0 0 100 100">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 72.8 72.8" style="enable-background:new 0 0 72.8 72.8;" xml:space="preserve">
            <path d="M36.4,0C16.3,0,0,16.3,0,36.4s16.3,36.4,36.4,36.4s36.4-16.3,36.4-36.4S56.5,0,36.4,0z M56.5,41.9H42.2v14.2
              H30.6V41.9H16.3V31.4h14.2V17.2h11.7v14.1h14.2V41.9z"/>
            </svg>
          </svg>
        </div>
      </div>
    </a>
    <a href="#" class="card-mode width-1of2 margin-s--r">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-icon">
          <svg viewBox="0 0 100 100">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 53 53" style="enable-background:new 0 0 53 53;" xml:space="preserve">
            <path d="M14.9,52.7c-0.5,0-1.1-0.1-1.6-0.3c-0.9-0.4-1.6-1.2-2-2.3L6.7,38.3c-0.4-1-0.4-2.1,0.1-3c0.4-0.9,1.2-1.6,2.2-1.9l2-0.9
              c1-0.4,2.1-0.4,3.1,0c0.9,0.4,1.6,1.2,2,2.3l4.6,11.8c0.4,1,0.4,2.1-0.1,3c-0.4,0.9-1.2,1.6-2.2,1.9l-2,0.9
              C15.9,52.6,15.4,52.7,14.9,52.7z M12.5,35.1c-0.1,0-0.2,0-0.3,0.1l-2,0.9c0,0-0.1,0-0.1,0.1c-0.2,0.1-0.4,0.2-0.5,0.4
              c-0.1,0.2-0.1,0.4,0,0.7c0,0,0,0,0,0l4.7,11.9c0.1,0.3,0.2,0.5,0.4,0.6c0.2,0.1,0.4,0.1,0.7,0l2-0.9c0,0,0.1,0,0.1-0.1
              c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.1-0.4,0-0.7l-4.7-11.9c-0.1-0.3-0.2-0.5-0.4-0.6C12.7,35.1,12.6,35.1,12.5,35.1z M38,52.6
              c-0.5,0-0.9-0.1-1.3-0.3l-2.2-1c-1.9-0.8-2.9-3.1-2.2-5L37,34.6c0.8-2,3.1-3,5-2.2l2.2,1c0.9,0.3,1.6,1.1,2.1,2c0.5,1,0.5,2,0.1,3
              l-4.7,11.9c0,0,0,0,0,0c-0.4,0.9-1.1,1.7-2,2.1C39.1,52.5,38.6,52.6,38,52.6z M40.7,35.1c-0.3,0-0.7,0.3-0.9,0.6l-4.7,11.9
              c-0.2,0.4,0.1,0.9,0.6,1.1l2.2,1c0.3,0.1,0.9-0.2,1-0.6l4.7-11.9c0.1-0.2,0.1-0.4,0-0.6c-0.1-0.2-0.3-0.4-0.5-0.5l-2.2-1
              C40.8,35.1,40.7,35.1,40.7,35.1z M40.3,49.6L40.3,49.6L40.3,49.6z M44,52.5c-0.2,0-0.5-0.1-0.7-0.2c-0.7-0.4-1-1.3-0.6-2
              c0.1-0.1,6.8-12.6,6.8-23.8c0-12.7-10.3-23-23-23c-12.7,0-23,10.3-23,23c0,11.1,6.7,23.7,6.8,23.8c0.4,0.7,0.1,1.6-0.6,2
              c-0.7,0.4-1.6,0.1-2-0.6c-0.3-0.5-7.2-13.3-7.2-25.2c0-14.3,11.7-26,26-26c14.3,0,26,11.7,26,26c0,11.9-6.9,24.7-7.2,25.2
              C45,52.2,44.5,52.5,44,52.5z"/>
            </svg>
          </svg>
        </div>
        <div class="card-section-border bg--nyheder"></div>
      </div>
      <div class="card-content">
        <h2 class="fontsize-medium">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h2>
      </div>
    </a>
    <a href="#" class="card-mode width-1of2 margin-s--r">
      <div class="card-content">
        <h2 class="fontsize-medium">Donec sed tincidunt ex, vestibulum congue arcu</h2>
        <div class="card-icon-plus">
          <svg viewBox="0 0 100 100">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 72.8 72.8" style="enable-background:new 0 0 72.8 72.8;" xml:space="preserve">
            <path d="M36.4,0C16.3,0,0,16.3,0,36.4s16.3,36.4,36.4,36.4s36.4-16.3,36.4-36.4S56.5,0,36.4,0z M56.5,41.9H42.2v14.2
              H30.6V41.9H16.3V31.4h14.2V17.2h11.7v14.1h14.2V41.9z"/>
            </svg>
          </svg>
        </div>
      </div>
    </a>
</div>

```html
<a href="#" class="card-mode width-1of2 margin-s--r">
  <div class="card-media">
    <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
    <div class="card-icon">
      <svg viewBox="0 0 100 100">
        <use href="#play-circle-light"></use>
      </svg>
    </div>
    <div class="card-section-border bg--breaking"></div>
  </div>
  <div class="card-content">
    <p class="card-meta fontsize-small margin-s--b"><small>Politik - 2 timer siden</small></p>
    <h2 class="fontsize-medium">Curabitur vehicula ac urna</h2>
    <div class="card-icon-plus">
      <svg viewBox="0 0 100 100">
        <use href="#ebplus_icon"></use>
      </svg>
    </div>
  </div>
</a>
```
<br>
Det er muligt at tilføje **lightmode** eller **darkmode**.

Light- eller darkmode tilknyttes via en data-attribute: **data-theme="lightmode" / "darkmode"**.
<br>

<span style="color:#12507b;font-weight: bolder">Lightmode</span>

<div class="flex grid-width--small">
    <a data-theme="lightmode" href="#" class="card-mode width-1of2 margin-s--r">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-icon">
          <svg viewBox="0 0 100 100">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="play-circle" class="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5 81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z"></path></svg>
          </svg>
        </div>
        <div class="card-section-border bg--breaking"></div>
      </div>
      <div class="card-content">
        <p class="card-meta fontsize-small margin-s--b"><small>Politik - 2 timer siden</small></p>
        <h2 class="fontsize-medium">Curabitur vehicula ac urna</h2>
        <div class="card-icon-plus">
          <svg viewBox="0 0 100 100">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 72.8 72.8" style="enable-background:new 0 0 72.8 72.8;" xml:space="preserve">
            <path d="M36.4,0C16.3,0,0,16.3,0,36.4s16.3,36.4,36.4,36.4s36.4-16.3,36.4-36.4S56.5,0,36.4,0z M56.5,41.9H42.2v14.2
              H30.6V41.9H16.3V31.4h14.2V17.2h11.7v14.1h14.2V41.9z"/>
            </svg>
          </svg>
        </div>
      </div>
    </a>
    <a data-theme="lightmode" href="#" class="card-mode width-1of2 margin-s--r">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-icon">
          <svg viewBox="0 0 100 100">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 53 53" style="enable-background:new 0 0 53 53;" xml:space="preserve">
            <path d="M14.9,52.7c-0.5,0-1.1-0.1-1.6-0.3c-0.9-0.4-1.6-1.2-2-2.3L6.7,38.3c-0.4-1-0.4-2.1,0.1-3c0.4-0.9,1.2-1.6,2.2-1.9l2-0.9
              c1-0.4,2.1-0.4,3.1,0c0.9,0.4,1.6,1.2,2,2.3l4.6,11.8c0.4,1,0.4,2.1-0.1,3c-0.4,0.9-1.2,1.6-2.2,1.9l-2,0.9
              C15.9,52.6,15.4,52.7,14.9,52.7z M12.5,35.1c-0.1,0-0.2,0-0.3,0.1l-2,0.9c0,0-0.1,0-0.1,0.1c-0.2,0.1-0.4,0.2-0.5,0.4
              c-0.1,0.2-0.1,0.4,0,0.7c0,0,0,0,0,0l4.7,11.9c0.1,0.3,0.2,0.5,0.4,0.6c0.2,0.1,0.4,0.1,0.7,0l2-0.9c0,0,0.1,0,0.1-0.1
              c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.1-0.4,0-0.7l-4.7-11.9c-0.1-0.3-0.2-0.5-0.4-0.6C12.7,35.1,12.6,35.1,12.5,35.1z M38,52.6
              c-0.5,0-0.9-0.1-1.3-0.3l-2.2-1c-1.9-0.8-2.9-3.1-2.2-5L37,34.6c0.8-2,3.1-3,5-2.2l2.2,1c0.9,0.3,1.6,1.1,2.1,2c0.5,1,0.5,2,0.1,3
              l-4.7,11.9c0,0,0,0,0,0c-0.4,0.9-1.1,1.7-2,2.1C39.1,52.5,38.6,52.6,38,52.6z M40.7,35.1c-0.3,0-0.7,0.3-0.9,0.6l-4.7,11.9
              c-0.2,0.4,0.1,0.9,0.6,1.1l2.2,1c0.3,0.1,0.9-0.2,1-0.6l4.7-11.9c0.1-0.2,0.1-0.4,0-0.6c-0.1-0.2-0.3-0.4-0.5-0.5l-2.2-1
              C40.8,35.1,40.7,35.1,40.7,35.1z M40.3,49.6L40.3,49.6L40.3,49.6z M44,52.5c-0.2,0-0.5-0.1-0.7-0.2c-0.7-0.4-1-1.3-0.6-2
              c0.1-0.1,6.8-12.6,6.8-23.8c0-12.7-10.3-23-23-23c-12.7,0-23,10.3-23,23c0,11.1,6.7,23.7,6.8,23.8c0.4,0.7,0.1,1.6-0.6,2
              c-0.7,0.4-1.6,0.1-2-0.6c-0.3-0.5-7.2-13.3-7.2-25.2c0-14.3,11.7-26,26-26c14.3,0,26,11.7,26,26c0,11.9-6.9,24.7-7.2,25.2
              C45,52.2,44.5,52.5,44,52.5z"/>
            </svg>
          </svg>
        </div>
        <div class="card-section-border bg--nyheder"></div>
      </div>
      <div class="card-content">
        <h2 class="fontsize-medium">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h2>
      </div>
    </a>
    <a data-theme="lightmode" href="#" class="card-mode width-1of2 margin-s--r">
      <div class="card-content">
        <h2 class="fontsize-medium">Donec sed tincidunt ex, vestibulum congue arcu</h2>
        <div class="card-icon-plus">
          <svg viewBox="0 0 100 100">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 72.8 72.8" style="enable-background:new 0 0 72.8 72.8;" xml:space="preserve">
            <path d="M36.4,0C16.3,0,0,16.3,0,36.4s16.3,36.4,36.4,36.4s36.4-16.3,36.4-36.4S56.5,0,36.4,0z M56.5,41.9H42.2v14.2
              H30.6V41.9H16.3V31.4h14.2V17.2h11.7v14.1h14.2V41.9z"/>
            </svg>
          </svg>
        </div>
      </div>
    </a>
</div>

```html
  <a data-theme="lightmode" href="#" class="card-mode width-1of2 margin-s--r">
    <div class="card-media">
      <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
      <div class="card-icon">
        <svg viewBox="0 0 100 100">
          <use href="#play-circle-light"></use>
        </svg>
      </div>
      <div class="card-section-border bg--breaking"></div>
    </div>
    <div class="card-content">
      <p class="card-meta fontsize-small margin-s--b"><small>Politik - 2 timer siden</small></p>
      <h2 class="fontsize-medium">Curabitur vehicula ac urna</h2>
      <div class="card-icon-plus">
        <svg viewBox="0 0 100 100">
          <use href="#ebplus_icon"></use>
        </svg>
      </div>
    </div>
  </a>
```

<span style="color:#12507b;font-weight: bolder">Darkmode</span>

<div class="flex grid-width--small">
    <a data-theme="darkmode" href="#" class="card-mode width-1of2 margin-s--r">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-icon">
          <svg viewBox="0 0 100 100">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="play-circle" class="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5 81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z"></path></svg>
          </svg>
        </div>
        <div class="card-section-border bg--breaking"></div>
      </div>
      <div class="card-content">
        <p class="card-meta fontsize-small margin-s--b"><small>Politik - 2 timer siden</small></p>
        <h2 class="fontsize-medium">Curabitur vehicula ac urna</h2>
        <div class="card-icon-plus">
          <svg viewBox="0 0 100 100">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 72.8 72.8" style="enable-background:new 0 0 72.8 72.8;" xml:space="preserve">
            <path d="M36.4,0C16.3,0,0,16.3,0,36.4s16.3,36.4,36.4,36.4s36.4-16.3,36.4-36.4S56.5,0,36.4,0z M56.5,41.9H42.2v14.2
              H30.6V41.9H16.3V31.4h14.2V17.2h11.7v14.1h14.2V41.9z"/>
            </svg>
          </svg>
        </div>
      </div>
    </a>
    <a data-theme="darkmode" href="#" class="card-mode width-1of2 margin-s--r">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-icon">
          <svg viewBox="0 0 100 100">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 53 53" style="enable-background:new 0 0 53 53;" xml:space="preserve">
            <path d="M14.9,52.7c-0.5,0-1.1-0.1-1.6-0.3c-0.9-0.4-1.6-1.2-2-2.3L6.7,38.3c-0.4-1-0.4-2.1,0.1-3c0.4-0.9,1.2-1.6,2.2-1.9l2-0.9
              c1-0.4,2.1-0.4,3.1,0c0.9,0.4,1.6,1.2,2,2.3l4.6,11.8c0.4,1,0.4,2.1-0.1,3c-0.4,0.9-1.2,1.6-2.2,1.9l-2,0.9
              C15.9,52.6,15.4,52.7,14.9,52.7z M12.5,35.1c-0.1,0-0.2,0-0.3,0.1l-2,0.9c0,0-0.1,0-0.1,0.1c-0.2,0.1-0.4,0.2-0.5,0.4
              c-0.1,0.2-0.1,0.4,0,0.7c0,0,0,0,0,0l4.7,11.9c0.1,0.3,0.2,0.5,0.4,0.6c0.2,0.1,0.4,0.1,0.7,0l2-0.9c0,0,0.1,0,0.1-0.1
              c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.1-0.4,0-0.7l-4.7-11.9c-0.1-0.3-0.2-0.5-0.4-0.6C12.7,35.1,12.6,35.1,12.5,35.1z M38,52.6
              c-0.5,0-0.9-0.1-1.3-0.3l-2.2-1c-1.9-0.8-2.9-3.1-2.2-5L37,34.6c0.8-2,3.1-3,5-2.2l2.2,1c0.9,0.3,1.6,1.1,2.1,2c0.5,1,0.5,2,0.1,3
              l-4.7,11.9c0,0,0,0,0,0c-0.4,0.9-1.1,1.7-2,2.1C39.1,52.5,38.6,52.6,38,52.6z M40.7,35.1c-0.3,0-0.7,0.3-0.9,0.6l-4.7,11.9
              c-0.2,0.4,0.1,0.9,0.6,1.1l2.2,1c0.3,0.1,0.9-0.2,1-0.6l4.7-11.9c0.1-0.2,0.1-0.4,0-0.6c-0.1-0.2-0.3-0.4-0.5-0.5l-2.2-1
              C40.8,35.1,40.7,35.1,40.7,35.1z M40.3,49.6L40.3,49.6L40.3,49.6z M44,52.5c-0.2,0-0.5-0.1-0.7-0.2c-0.7-0.4-1-1.3-0.6-2
              c0.1-0.1,6.8-12.6,6.8-23.8c0-12.7-10.3-23-23-23c-12.7,0-23,10.3-23,23c0,11.1,6.7,23.7,6.8,23.8c0.4,0.7,0.1,1.6-0.6,2
              c-0.7,0.4-1.6,0.1-2-0.6c-0.3-0.5-7.2-13.3-7.2-25.2c0-14.3,11.7-26,26-26c14.3,0,26,11.7,26,26c0,11.9-6.9,24.7-7.2,25.2
              C45,52.2,44.5,52.5,44,52.5z"/>
            </svg>
          </svg>
        </div>
        <div class="card-section-border bg--nyheder"></div>
      </div>
      <div class="card-content">
        <h2 class="fontsize-medium">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h2>
      </div>
    </a>
    <a data-theme="darkmode" href="#" class="card-mode width-1of2 margin-s--r">
      <div class="card-content">
        <h2 class="fontsize-medium">Donec sed tincidunt ex, vestibulum congue arcu</h2>
        <div class="card-icon-plus">
          <svg viewBox="0 0 100 100">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 72.8 72.8" style="enable-background:new 0 0 72.8 72.8;" xml:space="preserve">
            <path d="M36.4,0C16.3,0,0,16.3,0,36.4s16.3,36.4,36.4,36.4s36.4-16.3,36.4-36.4S56.5,0,36.4,0z M56.5,41.9H42.2v14.2
              H30.6V41.9H16.3V31.4h14.2V17.2h11.7v14.1h14.2V41.9z"/>
            </svg>
          </svg>
        </div>
      </div>
    </a>
</div>


```html
  <a data-theme="darkmode" href="#" class="card-mode width-1of2 margin-s--r">
    <div class="card-media">
      <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-icon">
          <svg viewBox="0 0 100 100">
            <use href="#play-circle-light"></use>
          </svg>
        </div>
      <div class="card-section-border bg--breaking"></div>
    </div>
    <div class="card-content">
      <p class="card-meta fontsize-small margin-s--b"><small>Politik - 2 timer siden</small></p>
      <h2 class="fontsize-medium">Curabitur vehicula ac urna</h2>
      <div class="card-icon-plus">
        <svg viewBox="0 0 100 100">
          <use href="#ebplus_icon"></use>
        </svg>
      </div>
    </div>
  </a>
```
