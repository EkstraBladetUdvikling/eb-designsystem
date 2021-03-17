<script lang="ts">
  import FormElement from '../../src/_components/form-elements/FormElement.svelte';

  let radio = 1;
</script>

<FormElement inputtype="text" size="small" label="input size small" />
<FormElement inputtype="text" label="input size medium(standard)" />
<FormElement inputtype="text" size="large" label="input size large" />

<FormElement inputtype="select" label="Noget indhold her">
  <option value="optioin1">Option 1</option>
  <option value="optioin2">Option 2</option>
</FormElement>

<FormElement inputtype="checkbox" label="Check denne her" />

<FormElement inputtype="radio" label="Radio denne her" bind:group={radio} value={1} />
<FormElement inputtype="radio" label="Radio denne her også" bind:group={radio} value={2} />

<FormElement inputtype="number" label="Noget tal indhold her" />
<FormElement inputtype="textarea" label="Kommentar label" />
