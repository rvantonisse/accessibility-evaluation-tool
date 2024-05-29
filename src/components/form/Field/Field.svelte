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
  @import './styles.css';
</style>

<script>
  import HelpText from '../HelpText.svelte';

  /** @type {string} id */
  export let id;

  /** @type {string} */
  export let label;
  export let helptext = '';
  export let inline = false;
</script>
