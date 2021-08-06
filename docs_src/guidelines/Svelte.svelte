<h1 class="color--eb">Svelte</h1>

<ol>
  <li>There must be a rigorous division of logic (script-part) and views (template, class selection, etc.)</li>
  <li>
    Component-specific styling should preferably be solved using the designsystem instead of styling within the
    Svelte-files.
  </li>
  <li>Svelte functions should (if possible) be used instead of native functions (eg createEventListener).</li>
  <li>Script tag content must be kept to an absolute minimum.</li>
  <li>
    As a rule, the state must provide all data in the format required by the components. Ie. Filtering takes place in
    state management and not in the respective components.
  </li>
  <li>Design system: on:click should exist on all elements of the design system</li>
  <li>The use of Svelte is agreed in the front-end group, so that it is only used where it makes sense.</li>
  <li>
    Svelte-store is used and each part of the state is divided into several readable / writeable, instead of one object.
  </li>
  <li>Writables may only be updated using actions (functions) and may not be exported directly.</li>
</ol>

<style>
  li {
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }
</style>
