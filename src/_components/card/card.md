---
layout: component
title: Card
---

## Default card

<div class="grid-width--small">
  <a href="#" class="card margin-m--b">
    <div class="card-media">
      <img class="card-media--img" src="https://via.placeholder.com/610x343&text=610x343">
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--sport">Sport</span> - 12 timer siden</small></p>
      <h2 class="card-title color--black">Nulla facilisi. Nulla mattis felis eget convallis vehicula</h2>
    </div>
  </a>

  <div class="flex flex-justify--between">
    <a href="#" class="card width-1of2">
      <div class="card-media">
        <img class="card-media--img" src="https://via.placeholder.com/300x168&text=300x168">
        <div class="card-media--icon">
          <svg viewBox="0 0 40 35">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#play-icon"></use>
          </svg>
        </div>
      </div>
      <div class="card-content">
        <p class="card-meta color--graa3"><small><span class="color--nyheder">Politik</span> - 2 timer siden</small></p>
        <h3 class="card-title color--black">Donec sed tincidunt ex, vestibulum congue arcu</h3>
      </div>
    </a>

    <a href="#" class="card width-1of2 margin-m--l">
      <div class="card-content">
        <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 8 timer siden</small></p>
        <h3 class="card-title color--black">Aliquam ultricies felis eget orci commodo fringilla</h3>
      </div>
    </a>
  </div>
</div>

```html
<a href="#" class="card margin-m--b">
  <div class="card-media">
    <img class="card-media--img" src="https://via.placeholder.com/610x343&text=610x343">
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--sport">Sport</span> - 12 timer siden</small></p>
    <h2 class="card-title color--black">Nulla facilisi. Nulla mattis felis eget convallis vehicula</h2>
  </div>
</a>

<div class="flex flex-justify--between">
  <a href="#" class="card width-1of2">
    <div class="card-media">
      <img class="card-media--img" src="https://via.placeholder.com/300x168&text=300x168">
      <div class="card-media--icon">
        <svg viewBox="0 0 40 35">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#play-icon"></use>
        </svg>
      </div>
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--nyheder">Politik</span> - 2 timer siden</small></p>
      <h3 class="card-title color--black">Donec sed tincidunt ex, vestibulum congue arcu</h3>
    </div>
  </a>

  <a href="#" class="card width-1of2 margin-m--l">
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 8 timer siden</small></p>
      <h3 class="card-title color--black">Aliquam ultricies felis eget orci commodo fringilla</h3>
    </div>
  </a>
</div>
```

## Small media card

<div class="grid-width--small">
  <a href="#" class="card card--small-media margin-l--b">
    <div class="card-media">
      <img class="card-media--img" src="https://via.placeholder.com/200x112&text=200x112">
      <div class="card-media--icon">
        <svg viewBox="0 0 40 35">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#play-icon"></use>
        </svg>
      </div>
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--sport">Sport</span> - 6 timer siden</small></p>
      <h3 class="card-title color--black">Curabitur vehicula ac urna</h3>
    </div>
  </a>

  <a href="#" class="card card--small-media margin-l--b">
    <div class="card-media">
      <img class="card-media--img" src="https://via.placeholder.com/200x112&text=200x112">
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--nyheder">Politik</span> - 11 timer siden</small></p>
      <h3 class="card-title color--black">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel. Nam cursus sed nibh quis porttitor.</h3>
    </div>
  </a>

  <a href="#" class="card card--small-media margin-l--b">
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 19 timer siden</small></p>
      <h3 class="card-title color--black">Donec dictum neque et molestie consequat. Cras pharetra tincidunt.</h3>
    </div>
  </a>

  <a href="#" class="card card--small-media card--small-media--reverse margin-l--b">
    <div class="card-media">
      <img class="card-media--img" src="https://via.placeholder.com/200x112&text=200x112">
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--nyheder">Politik</span> - 11 timer siden</small></p>
      <h3 class="card-title color--black">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h3>
    </div>
  </a>
</div>

```html
<a href="#" class="card card--small-media margin-l--b">
  <div class="card-media">
    <img class="card-media--img" src="https://via.placeholder.com/200x112&text=200x112">
    <div class="card-media--icon">
      <svg viewBox="0 0 40 35">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#play-icon"></use>
      </svg>
    </div>
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--sport">Sport</span> - 6 timer siden</small></p>
    <h3 class="card-title color--black">Curabitur vehicula ac urna</h3>
  </div>
</a>

<a href="#" class="card card--small-media margin-l--b">
  <div class="card-media">
    <img class="card-media--img" src="https://via.placeholder.com/200x112&text=200x112">
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--nyheder">Politik</span> - 11 timer siden</small></p>
    <h3 class="card-title color--black">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel. Nam cursus sed nibh quis porttitor.</h3>
  </div>
</a>

<a href="#" class="card card--small-media margin-l--b">
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 19 timer siden</small></p>
    <h3 class="card-title color--black">Donec dictum neque et molestie consequat. Cras pharetra tincidunt.</h3>
  </div>
</a>

<a href="#" class="card card--small-media card--small-media--reverse margin-l--b">
  <div class="card-media">
    <img class="card-media--img" src="https://via.placeholder.com/200x112&text=200x112">
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--nyheder">Politik</span> - 11 timer siden</small></p>
    <h3 class="card-title color--black">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h3>
  </div>
</a>
```

## Ikke et link card

Blot erstat `<a>` med `<div>`, det vil samtidig fjerne hover effekten.

<div class="grid-width--small">
  <div class="card margin-xl--b">
    <div class="card-media">
      <img class="card-media--img" src="https://via.placeholder.com/610x343&text=610x343">
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span class="color--sport">Sport</span> - 12 timer siden</small></p>
      <h2 class="card-title color--black">Nulla facilisi. Nulla mattis felis eget convallis vehicula</h2>
    </div>
  </div>
</div>

```html
<div class="card margin-xl--b">
  <div class="card-media">
    <img class="card-media--img" src="https://via.placeholder.com/610x343&text=610x343">
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span class="color--sport">Sport</span> - 12 timer siden</small></p>
    <h2 class="card-title color--black">Nulla facilisi. Nulla mattis felis eget convallis vehicula</h2>
  </div>
</div>
```

## Brugseksempler

<div class="grid-width--large margin-xl--b">
  <a href="#" class="card card--small-media card--small-media--reverse bg--flash">
    <div class="card-media">
      <img class="card-media--img" src="https://via.placeholder.com/455x255&text=455x255">
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3 color--white"><small><span>Politik</span> - 11 timer siden</small></p>
      <h2 class="card-title color--black color--white">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h2>
    </div>
  </a>
</div>

<div class="grid-width--small">
  <a href="#" class="card card--small-media bg--breaking">
    <div class="card-media">
      <img class="card-media--img" src="https://via.placeholder.com/150x84&text=150x84">
    </div>
    <div class="card-content">
      <p class="card-meta color--graa3"><small><span>BREAKING NEWS</span></small></p>
      <h3 class="card-title color--black">Curabitur vehicula ac urna</h3>
    </div>
  </a>
</div>

```html
<a href="#" class="card card--small-media card--small-media--reverse bg--flash">
  <div class="card-media">
    <img class="card-media--img" src="https://via.placeholder.com/455x255&text=455x255">
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3 color--white"><small><span>Politik</span> - 11 timer siden</small></p>
    <h2 class="card-title color--black color--white">Morbi vestibulum tristique nunc, sit amet rutrum mi placerat vel</h2>
  </div>
</a>

<a href="#" class="card card--small-media bg--breaking">
  <div class="card-media">
    <img class="card-media--img" src="https://via.placeholder.com/150x84&text=150x84">
  </div>
  <div class="card-content">
    <p class="card-meta color--graa3"><small><span>BREAKING NEWS</span></small></p>
    <h3 class="card-title color--black">Curabitur vehicula ac urna</h3>
  </div>
</a>
```
