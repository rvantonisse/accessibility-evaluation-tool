<Field id="{id}" {...$$restProps}>
  <input id="{id}" type="text" on:keydown bind:value bind:this="{textInput}" />
</Field>

<style>
/* REMOVED */
</style>

<script>
  import { onMount } from 'svelte';
  import Field from './Field/Field.svelte';

  export let id;
  export let value = '';
  export let autofocus = false;

  let textInput;

  onMount(() => {
    if (autofocus) {
      textInput.focus();
    }
  });
</script>
