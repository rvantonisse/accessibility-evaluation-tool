<Field id="{id}" label="{label}" helptext="{helptext}" className="{className}">
  <textarea id="{id}" rows="{contentBasedRows}" bind:value="{value}" on:change
  ></textarea>
</Field>

<style>
  /* REMOVED */
</style>

<script>
  import Field from './Field.svelte';

  const defaultRows = 5;
  let contentBasedRows;

  $: contentBasedRows =
    value && value.match(/\n/g)
      ? value.match(/\n/g).length + defaultRows
      : defaultRows;

  export let id;
  export let label;
  export let helptext = '';
  export let value = '';
  export let className = '';
</script>
