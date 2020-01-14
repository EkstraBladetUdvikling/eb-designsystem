---
layout: component
# permalink: /eb-designsystem/components/nav-top
title: Navigation top
---

# Navigation top

The top navigation has two default states. Initial state placed relative to elements above it, and a version fixed to the top of the page.

## Initial state

<div class="nav-top-stickybackground">
  <nav class="nav-top">
    <div class="nav-top-left">
      <a href="/" class="nav-brand nav-brand--left nav-top-show_when_fixed">
        <svg viewBox="0 0 40 35" class="eblogo-40px">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ekstrabladet"></use>
        </svg>
      </a>
      <div class="nav-list nav-top-left">
        <span class="nav-item">
          <label class="toggle-container">
            <span class="toggle toggle--icon">
              <input type="checkbox" hidden class="toggle-input" />
              <i class="toggle toggle-off fas fa-bars color--graa3"></i>
              <i class="toggle toggle-on far fa-times-circle color--reddark"></i>
            </span>
            <span>
                Nav-item
            </span>
          </label>
        </span>
        |
        <span class="nav-item color--flash">
          <a href="#" class="nav-item-hover">
              Nav-item (hover)
          </a>
        </span>
        |
        <span class="nav-item color--flash">
          <a href="#" class="nav-item-hover">
              Nav-item (hover)
          </a>
        </span>
        |
        <span class="nav-item color--flash">
          <a href="#" class="nav-item-hover">
              Nav-item (hover)
          </a>
        </span>
      </div>
    </div>
    <div class="nav-top-right">
      <a href="#" class="button button--solid button--accept">Button accept</a>
      <a href="#" class="button button--solid button--accept">Button accept</a>
      <div class="nav-list nav-top-right">
      |
        <span class="nav-item color--bruger">
          <a href="#" class="nav-item-hover">
              Nav-item (hover)
          </a>
        </span>
        |
        <span class="nav-item color--bruger">
          <a href="#" class="nav-item-hover">
            <i class="fa fas fa-search"></i>
            <span>
              Nav-item (hover)
            </span>
          </a>
        </span>
        </div>
    </div>
  </nav>
</div>

<nav class="nav-top nav-top--sub">
  <div class="nav-top-left">
    <span class="nav-item color--nyheder">
      <a href="#">
          Nav-sub-item (hover)
      </a>
    </span>
    |
    <span class="nav-item color--flash">
      <a href="#">
          Nav-sub-item (hover)
      </a>
    </span>
  </div>
</nav>

## Fixed state

In the fixed state(here shown with fixed disable), we show a logo on the left.

<div class="nav-top-stickybackground">
  <nav class="nav-top nav-top--fixed">
    <div class="nav-top-left">
      <a href="/" class="nav-brand nav-brand--left nav-top-show_when_fixed">
        <svg viewBox="0 0 40 35" class="eblogo-40px">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ekstrabladet"></use>
        </svg>
      </a>
      <div class="nav-list nav-top-left">
        <span class="nav-item">
          <label class="toggle-container">
            <span class="toggle toggle--icon">
              <input type="checkbox" hidden class="toggle-input" />
              <i class="toggle toggle-off fas fa-bars color--graa3"></i>
              <i class="toggle toggle-on far fa-times-circle color--reddark"></i>
            </span>
            <span>
                Nav-item
            </span>
          </label>
        </span>
        |
        <span class="nav-item color--flash">
          <a href="#" class="nav-item-hover">
              Nav-item (hover)
          </a>
        </span>
      </div>
    </div>
    <div class="nav-top-right">
      <a href="#" class="button button--solid button--accept">Button accept</a>
      <a href="#" class="button button--solid button--accept">Button accept</a>
      <div class="nav-list nav-top-right">
      |
        <span class="nav-item color--bruger">
          <a href="#" class="nav-item-hover">
              Nav-item (hover)
          </a>
        </span>
        |
        <span class="nav-item color--bruger">
          <a href="#" class="nav-item-hover">
            <i class="fa fas fa-search"></i>
            <span>
              Nav-item (hover)
            </span>
          </a>
        </span>
        </div>
    </div>
  </nav>
</div>
