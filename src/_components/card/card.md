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

Et card-mode giver cardet mulighed for at blive anvendt som **lightmode** eller **darkmode**.

OBS: Det er stadig muligt at give cardet en bg--farve.

<span style="color:#12507b;font-weight: bolder">Lightmode</span>

<div class="flex grid-width--small">
    <a href="#" class="card card-mode card-lightmode width-1of2 margin-s--r">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-icon">
          <i class="far fa-play-circle"></i>
        </div>
        <div class="card-border bg--breaking"></div>
      </div>
      <div class="card-content">
        <p class="card-meta fontsize-small margin-s--b"><small>Politik - 2 timer siden</small></p>
        <h2 class="fontsize-medium">Curabitur vehicula ac urna</h2>
        <div class="card-icon-plus">
          <svg viewBox="0 0 100 100">
            <use xlink:href="#ebplus_sort"></use>
          </svg>
        </div>
      </div>
    </a>
    <a href="#" class="card card-mode card-lightmode width-1of2 margin-s--r">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-icon">
          <i class="far fa-headphones-alt"></i>
        </div>
        <div class="card-border bg--nyheder"></div>
      </div>
      <div class="card-content">
        <h2 class="fontsize-medium">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h2>
      </div>
    </a>
    <a href="#" class="card card-mode card-lightmode width-1of2 margin-s--r">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-border bg--sport"></div>
      </div>
      <div class="card-content">
        <h2 class="fontsize-medium">Donec sed tincidunt ex, vestibulum congue arcu</h2>
        <div class="card-icon-plus">
          <svg viewBox="0 0 100 100">
            <use xlink:href="#ebplus_sort"></use>
          </svg>
        </div>
      </div>
    </a>
</div>

<span style="color:#12507b;font-weight: bolder">Darkmode</span>

<div class="flex grid-width--small">
    <a href="#" class="card card-mode card-darkmode width-1of2 margin-s--r">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-icon">
          <i class="far fa-play-circle"></i>
        </div>
        <div class="card-border bg--breaking"></div>
      </div>
      <div class="card-content">
        <p class="card-meta fontsize-small margin-s--b"><small>Politik - 2 timer siden</small></p>
        <h2 class="fontsize-medium">Curabitur vehicula ac urna</h2>
        <div class="card-icon-plus">
          <svg viewBox="0 0 100 100">
            <use xlink:href="#ebplus_sort"></use>
          </svg>
        </div>
      </div>
    </a>
    <a href="#" class="card card-mode card-darkmode width-1of2 margin-s--r">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-icon">
          <i class="far fa-headphones-alt"></i>
        </div>
        <div class="card-border bg--nyheder"></div>
      </div>
      <div class="card-content">
        <h2 class="fontsize-medium">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h2>
      </div>
    </a>
    <a href="#" class="card card-mode card-darkmode width-1of2 margin-s--r">
      <div class="card-media">
        <img class="card-image" src="https://via.placeholder.com/300x168&text=300x168" height="168" width="300">
        <div class="card-border bg--sport"></div>
      </div>
      <div class="card-content">
        <h2 class="fontsize-medium">Donec sed tincidunt ex, vestibulum congue arcu</h2>
        <div class="card-icon-plus">
          <svg viewBox="0 0 100 100">
            <use xlink:href="#ebplus_sort"></use>
          </svg>
        </div>
      </div>
    </a>
</div>
