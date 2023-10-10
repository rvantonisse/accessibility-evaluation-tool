<div class="Field" class:inline="{inline}">
  <label for="{id}">{label}</label>
  {#if helptext}
    <HelpText>
      {@html helptext}
    </HelpText>
  {/if}
  <slot />
</div>

<style>
  div.Field {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
  label {
    font-weight: bold;
  }

  div.Field.inline {
    flex-direction: row;
  }
</style>

<script>
  import HelpText from '../HelpText.svelte';

  export let id;
  export let label;
  export let helptext = '';
  export let inline = false;
</script>
