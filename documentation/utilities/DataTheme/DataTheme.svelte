<script lang="ts">
  // Style
</script>

<div class="grid-width--small">
  <h1 class="color--eb">Data Theme</h1>
  <h3>Anvendelse af data-theme</h3>
  <div data-theme="lightmode">
    <p>I'm now in lightmode</p>
  </div>

  <div data-theme="darkmode">
    <p>I'm now in darkmode</p>
  </div>

  <h3>Komponenter der kan anvende data-theme</h3>
  <div class="grid-width--large">
    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);">
      <div class="width-1of3 padding-m fontweight-bold">Component</div>
      <div class="width-1of3 padding-m fontweight-bold">Link</div>
      <div class="width-1of3 padding-m fontweight-bold">Temaer</div>
    </div>
    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);">
      <div class="width-1of3 padding-m">Accordion</div>
      <div class="width-1of3 padding-m">
        <a href="#/components/accordion">Accordion dokumentation</a>
      </div>
      <div class="width-1of3 padding-m">
        <p class="margin-none">- lightmode</p>
        <p class="margin-none">- darkmode</p>
      </div>
    </div>
    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);">
      <div class="width-1of3 padding-m">Card (Card-mode)</div>
      <div class="width-1of3 padding-m">
        <a href="#/components/card">Card dokumentation</a>
      </div>
      <div class="width-1of3 padding-m">
        <p class="margin-none">- lightmode</p>
        <p class="margin-none">- darkmode</p>
      </div>
    </div>
  </div>
</div>
