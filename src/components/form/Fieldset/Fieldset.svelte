<fieldset id="{id}" class="Fieldset field">
  <legend>
    {@html legend}
  </legend>

  {#if helptext}
    <HelpText>
      {@html helptext}
    </HelpText>
  {/if}

  <div class="Fieldset__elements">
    <slot />
  </div>
</fieldset>

<style>
  legend {
    font-weight: bold;
  }
</style>

<script>
  import HelpText from '../HelpText.svelte';

  export let id;
  export let legend;
  export let helptext = '';
</script>
