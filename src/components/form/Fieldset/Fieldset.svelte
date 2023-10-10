<!-- 
  @component
  # Fieldset

  A set of Fields. Used to group user input by theme.

  Also more commonly used as Field for checkbox and radio groups.

  The Fieldset is only used in Form context and requires a legend and id.  
 -->
<fieldset id="{id}" class="Fieldset" class:boxed="{boxed}">
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
<!-- /component -->

<style>
  @import './styles.css';
</style>

<script>
  import HelpText from '../HelpText.svelte';

  /** @type {string} id */
  export let id = '';
  export let legend = '';
  export let helptext = '';
  export let boxed = false;
</script>
