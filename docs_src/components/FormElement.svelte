<script lang="ts">
  import FormElement from '../../src/_components/form-elements/FormElement.svelte';

  let radio = 1;
</script>

<FormElement inputtype="text" label="Noget indhold her" />
<FormElement inputtype="text" label="Noget ANDET indhold her" />

<FormElement inputtype="select" label="Noget indhold her">
  <option value="optioin1">Option 1</option>
  <option value="optioin2">Option 2</option>
</FormElement>

<FormElement inputtype="checkbox" label="Check denne her" />

<FormElement inputtype="radio" label="Radio denne her" bind:group={radio} value={1} />
<FormElement inputtype="radio" label="Radio denne her også" bind:group={radio} value={2} />

<FormElement inputtype="number" label="Noget tal indhold her" />
