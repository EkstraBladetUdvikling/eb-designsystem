<script lang="ts">
  import FormElement from '../../src/_components/form-elements/FormElement.svelte';
</script>

<FormElement inputtype="text" label="Noget indhold her" />
<FormElement inputtype="text" label="Noget ANDET indhold her" />

<FormElement inputtype="select" label="Noget indhold her">
  <option value="optioin1">Option 1</option>
  <option value="optioin2">Option 2</option>
</FormElement>

<FormElement inputtype="checkbox" label="Check denne her" />

<FormElement inputtype="radio" label="Radio denne her" />

<FormElement inputtype="number" label="Noget tal indhold her" />
