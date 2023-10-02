<Fieldset id="{id}" legend="{label}" {...$$restProps}>
  <ol class="MultipleChoice__options{columns ? '--columns' : ''}">
    {#each options as option, index (option)}
      <li class="MultipleChoice__option">
        <!-- type attribute cant be dynamic with bind:group -->
        {#if type === CHECKBOX}
          <!-- svelte-ignore a11y-no-onchange -->
          <input
            id="{`${id}_${index}`}"
            class="MultipleChoice__option__input"
            type="checkbox"
            value="{option.value || option.title || option}"
            checked="{option.checked}"
            name="{label}"
            bind:group="{value}"
            on:change
          />
        {:else if type === RADIO}
          <input
            id="{`${id}_${index}`}"
            class="MultipleChoice__option__input"
            type="radio"
            value="{option.value || option.title || option}"
            checked="{option.checked}"
            name="{label}"
            bind:group="{value}"
            on:change
          />
        {/if}
        <label
          class="MultipleChoice__option__label"
          for="{`${id}_${index}`}"
        >{option.title || option}</label>
      </li>
    {/each}
  </ol>

  {#if editable}
    <AddOther label="Add other {label}" on:ADD="{handleOptionAdd}">
      <Input id="{id}__other" label="Other {label}" />
    </AddOther>
  {/if}
</Fieldset>

<style>
/* REMOVED */
</style>

<script context="module">
  const CHECKBOX = 'checkbox';
  const RADIO = 'radio';
</script>

<script>
  import AddOther from './AddOther.svelte';
  import Fieldset from './Fieldset/Fieldset.svelte';
  import Input from './Input.svelte';

  export let id;
  export let label;
  export let type = CHECKBOX;
  export let options = [];
  export let columns = false;
  export let editable = false;
  export let value = [];

  function handleOptionAdd(event) {
    const newValue = event.detail.join();

    if (!newValue) {
      return;
    }

    const newOption = {
      title: event.detail.join()
      // checked: true
    };

    if (!options.some((option) => option.title === newOption.title)) {
      options = [...options, newOption];
      value = [...value, newOption.title];
    }
  }
</script>
