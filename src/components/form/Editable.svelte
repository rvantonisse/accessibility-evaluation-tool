<div class="Editable">
  <div class="Editable__Contents">
    {#if removable}
    <Button
      small
      on:click="{dispatchDelete}"
    >
     <span class="visually-hidden">{TRANSLATED.DELETE} {label}</span>
    </Button>
    {/if}    
    <slot />
  </div>

  <div class="Editable__Controls">
    {#if !persistent}
      <Button
        small
        on:click="{handleEditClick}"
        bind:this="{EditToggle}"
      >{#if editing}Done{:else}Edit{/if}
        <span class="visually-hidden">{label}</span></Button>
    {/if}
  </div>
</div>

<style>
/* REMOVED */
</style>

<script context="module">
  import { writable } from 'svelte/store';

  export const editMode = writable({});
</script>

<script>
  import { getContext, createEventDispatcher } from 'svelte';
  import Button from '@app/components/ui/Button/Button.svelte';

  export let id = '';
  export let label = '';
  export let persistent = false;
  export let removable = false;
  
  const { translate } = getContext('app');

  const dispatch = createEventDispatcher();
  const EVENT = {
    DELETE: 'DELETE',
    EDIT: 'EDIT'
  };

  let EditToggle;

  $: editing = $editMode[id] = persistent;

  $: TRANSLATED = {
    DELETE: $translate('UI.COMMON.DELETE')
  };

  function handleEditClick() {
    if (!editing) {
      dispatchEdit();
    }

    $editMode[id] = !editing;
  }

  function dispatchDelete() {
    dispatch(EVENT.DELETE, id);
  }

  function dispatchEdit() {
    dispatch(EVENT.EDIT, id);
  }
</script>
