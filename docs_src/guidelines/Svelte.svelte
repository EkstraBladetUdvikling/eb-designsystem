<h1 class="color--eb">Svelte</h1>

<ol>
  <li>
    Der skal være en stringent opdeling af logik (hvad kan den - script-tagget, datahåndtering - hvis dette ikke kan
    løse stateforbindelse) og visning (template, udvælgelse af classer etc.)
  </li>
  <li>
    Som udgangspunkt laves der ikke komponentspecifik styling i Svelte-regi - der benyttes classes fra designsystemet.
  </li>
  <li>
    Der skal som udgangspunkt benyttes Svelte-funktioner fremfor native funktioner (f.eks. createEventListener).&nbsp;
  </li>
  <li>Script-tags indhold skal holdes til et absolut minimum udover imports og exports.&nbsp;</li>
  <li>
    Som udgangspunkt skal state levere al data I det format som komponenterne kræver. Dvs. Filtrering sker i
    state-håndtering og ikke I de respektive komponenter.&nbsp;
  </li>
  <li>
    Designsystem: Der arbejdes grundkomponenter og higher-order-komponenter, der arver grundkomponenter og har mere
    specifikke brugsmuligheder.
  </li>
  <li>Designsystem: on:click bindes på alle elementer i designsystemet</li>
  <li>Benyttelse af Svelte aftales i frontend-gruppen, så det kun bruges hvor det giver mening.</li>
  <li>Svelte-store benyttes og hver del af staten opdeles i flere readable/writeable, i stedet for et object.</li>
  <li>
    Writables må kun opdateres vha. actions og må ikke exporteres direkte. Der udstilles en samlet derived state
    (readable) og actions.
  </li>
</ol>

<style>
  li {
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }
</style>
