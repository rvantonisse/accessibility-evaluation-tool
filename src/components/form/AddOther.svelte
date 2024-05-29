<!--
 @component
 
 # AddOther
 -->

<div class="AddOther__container">
  <div
    class="AddOther__Inputs"
    bind:this="{otherInputsContainer}"
    on:keydown="{handleAddKeydown}"
  >
    <slot />
  </div>
  <Button on:click="{handleAddClick}">{label}</Button>
</div>

<style>
/* REMOVED */
</style>

<script>
  import { onMount, createEventDispatcher } from 'svelte';

  import Button from '@app/components/ui/Button/Button.svelte';

  export let label = 'Add';

  const dispatch = createEventDispatcher();

  let otherInputsContainer;
  let otherInputs;

  onMount(() => {
    otherInputs = Array.from(
      otherInputsContainer.querySelectorAll('input, select, textarea')
    );
  });

  function handleAddKeydown(event) {
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();

      dispatchAdd();
    }
  }

  function handleAddClick(event) {
    event.preventDefault();
    dispatchAdd();
  }

  function dispatchAdd() {
    const detail = otherInputs.map((input) => {
      return input.value;
    });

    if (otherInputs.length > 0) {
      // Clear fields
      otherInputs.forEach((input) => {
        input.value = '';
      });

      otherInputs[0].focus();
    }

    dispatch('ADD', detail);
  }
</script>
