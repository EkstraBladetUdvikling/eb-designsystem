---
layout: component
permalink: /components/nav-top
title: Navigation top
---

# Navigation top

The top navigation has two default states. Initial state placed relative to elements above it, and a version fixed to the top of the page.

## Initial state



<div class="nav-top-stickybackground">
  <nav class="nav-top">
    <div class="nav-top-left">
      <a href="/" class="nav-item nav-top-show_when_fixed">
        <svg viewBox="0 0 40 35" class="eblogo-40px">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ekstrabladet"></use>
        </svg>
      </a>
      <ul class="nav-top-left">
        <li>
          <a href="#" class="nav-item color--flash">
            <span class="nav-item-hover">
              Nav-item (hover)
            </span>
          </a>
        </li>
        <li>
          <a href="#" class="nav-item color--flash">
            <span class="nav-item-hover">
              Nav-item (hover)
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="nav-top-right">
      <div class="nav-item">
        <a href="#" class="button button--solid button--accept">Button accept</a>
      </div>
      <a href="#" class="nav-item color--flash">
        <i class="fa fas fa-angle-left nav-item-hover"></i>
        <span class="nav-item-hover">
          Nav-item (ikon)
        </span>
      </a>
    </div>
  </nav>
</div>

## Fixed state

In the fixed state(here shown with fixed disable), we show a logo on the left.

<div class="nav-top-stickybackground">
  <nav class="nav-top nav-top--fixed">
    <div class="nav-top-left">
      <a href="/" class="nav-item nav-top-show_when_fixed">
        <svg viewBox="0 0 40 35" class="eblogo-40px">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ekstrabladet"></use>
      </svg>
      </a>
      <div class="nav-top-left">
        <a href="#" class="nav-item color--flash">
          <span class="nav-item-hover">
            Nav-item (hover)
          </span>
        </a>
        <a href="#" class="nav-item color--flash">
          <span class="nav-item-hover">
            Nav-item (hover)
          </span>
        </a>
      </div>
    </div>
    <div class="nav-top-right">
      <div class="nav-item">
        <a href="#" class="button button--solid button--accept">Button accept</a>
      </div>
      <a href="#" class="nav-item color--flash">
        <i class="fa fas fa-angle-left nav-item-hover"></i>
        <span class="nav-item-hover">
          Nav-item (ikon)
        </span>
      </a>
    </div>
  </nav>
</div>
