<script>
  import Prism from 'svelte-prism';
</script>

<div class="grid-width--large">
  <h1 class="color--eb">Flex</h1>
  <h3>Anvendelse af Flex</h3>
  <p>
    Flex består af forskellige CSS klasser, som både kan anvendes på komponenter og elementer ved tilføjelse af class.
  </p>
  <p>HTML element</p>
  <Prism language="html" source={`<div class="flex"></div>`} />
  <p>Svelte component</p>
  <Prism language="html" source={`<component className="flex"></component>`} />

  <h3>Flex container</h3>
  <p>
    Flex tilføjer <code>display: flex</code> til container element og transformere alle child elementer til flex-items.
  </p>
  <Prism language="html" source={`<div class="flex">I'm a flexbox container!</div>`} />
  <div class="flex bg--graa7 padding-l">I'm a flexbox container!</div>

  <h3>Flex center</h3>
  <p>Flex center centrere alle child elementer både horizontalt og vertical.</p>
  <Prism language="html" source={`<div class="flex flex--center">...</div>`} />
  <div class="flex flex--center bg--graa7" style="height: 100px;">
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
  </div>

  <h3>Flex justify content</h3>
  <p>Justify content anvendes til <i>horizontal</i> placering af child elementer i flex containers.</p>
  <Prism language="html" source={`<div class="flex flex-justify--start">...</div>`} />
  <div class="flex flex-justify--start bg--graa7">
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
  </div>
  <Prism language="html" source={`<div class="flex flex-justify--center">...</div>`} />
  <div class="flex flex-justify--center bg--graa7">
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
  </div>
  <Prism language="html" source={`<div class="flex flex-justify--end">...</div>`} />
  <div class="flex flex-justify--end bg--graa7">
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
  </div>
  <Prism language="html" source={`<div class="flex flex-justify--around">...</div>`} />
  <div class="flex flex-justify--around bg--graa7">
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
  </div>
  <Prism language="html" source={`<div class="flex flex-justify--between">...</div>`} />
  <div class="flex flex-justify--between bg--graa7">
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
  </div>

  <h3>Flex align items</h3>
  <p>Align items anvendes til <i>veritcal</i> placering af child elementer i flex containers.</p>
  <p>Individuelle child elementer(flex-item) kan også vertical placeres med <code>flex-item--start | center | end | strech</code></p>
  <Prism language="html" source={`<div class="flex flex-align--start">...</div>`} />
  <div class="flex flex-align--start bg--graa7" style="height: 100px;">
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
  </div>
  <Prism language="html" source={`<div class="flex flex-align--center">...</div>`} />
  <div class="flex flex-align--center bg--graa7" style="height: 100px;">
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
  </div>
  <Prism language="html" source={`<div class="flex flex-align--end">...</div>`} />
  <div class="flex flex-align--end bg--graa7" style="height: 100px;">
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
  </div>
  <Prism language="html" source={`<div class="flex flex-align--strech">...</div>`} />
  <div class="flex flex-align--strech bg--graa7" style="height: 100px;">
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
    <div class="flex-item bg--graa5 padding-l">Flex item</div>
  </div>

  <h3>Flex directions</h3>
  <p>Flex directions bestemmer rækkefølgen for visning af child elementer i flex containeren.</p>
  <Prism language="html" source={`<div class="flex flex-column">...</div>`} />
  <div class="flex flex-column bg--graa7">
    <div class="flex-item bg--graa5 padding-l">Flex item 1</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 2</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 3</div>
  </div>
  <Prism language="html" source={`<div class="flex flex-column--reverse">...</div>`} />
  <div class="flex flex-column--reverse bg--graa7">
    <div class="flex-item bg--graa5 padding-l">Flex item 1</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 2</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 3</div>
  </div>
  <Prism language="html" source={`<div class="flex flex-row--reverse">...</div>`} />
  <div class="flex flex-row--reverse bg--graa7">
    <div class="flex-item bg--graa5 padding-l">Flex item 1</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 2</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 3</div>
  </div>

  <h3>Flex wrap</h3>
  <p>
    Flex wrap sørger for at alle child elementer beholder deres størrelse og istedet wrapper elementerne på multiple lines
    istedet for one-line.
  </p>
  <p>
    Ex. browser-default er <code>flex-wrap: nowrap;</code> som forcer alle child elementer til at stå på samme line ved at squeeze
    dem sammen.
  </p>

  <Prism language="html" source={`<div class="flex">...</div>`} />
    <div class="flex bg--graa7">
      <div class="flex-item bg--graa5 padding-l">Flex item 1</div>
      <div class="flex-item bg--graa5 padding-l">Flex item 2</div>
      <div class="flex-item bg--graa5 padding-l">Flex item 3</div>
      <div class="flex-item bg--graa5 padding-l">Flex item 4</div>
      <div class="flex-item bg--graa5 padding-l">Flex item 5</div>
      <div class="flex-item bg--graa5 padding-l">Flex item 6</div>
      <div class="flex-item bg--graa5 padding-l">Flex item 7</div>
      <div class="flex-item bg--graa5 padding-l">Flex item 8</div>
      <div class="flex-item bg--graa5 padding-l">Flex item 9</div>
    </div>

  <Prism language="html" source={`<div class="flex flex-wrap--wrap">...</div>`} />
  <div class="flex flex-wrap--wrap bg--graa7">
    <div class="flex-item bg--graa5 padding-l">Flex item 1</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 2</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 3</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 4</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 5</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 6</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 7</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 8</div>
    <div class="flex-item bg--graa5 padding-l">Flex item 9</div>
  </div>

  <h3>Flex size</h3>
  <p>Flex size bestemmer hvordan størrelsen på child elementer skal opføre sig.</p>
  <p>
    <code>flex-item--noshrink</code> sørger for at et child element altid vil have den samme størrelse også på scalering.
  </p>
  <Prism
    language="html"
    source={`<div class="flex"><div class="flex-item flex-item--noshrink">Flex item no-shrink</div></div>`}
  />
  <div class="flex bg--graa7">
    <div class="flex-item bg--graa5 padding-l">Flex item normal</div>
    <div class="flex-item bg--graa5 padding-l">Flex item normal</div>
    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div>
    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div>
    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div>
    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div>
    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div>
  </div>

  <p>
    <code>flex-item--grow</code> sørger for at child element udfylder den tilbageværende plads i flex containeren.
  </p>
  <Prism
    language="html"
    source={`<div class="flex"><div class="flex-item flex-item--grow">Flex item grow</div></div>`}
  />
  <div class="flex bg--graa7">
    <div class="flex-item bg--graa5 padding-l">Flex item normal</div>
    <div class="flex-item flex-item--grow bg--graa5 padding-l">Flex item grow</div>
    <div class="flex-item bg--graa5 padding-l">Flex item normal</div>
  </div>
</div>
