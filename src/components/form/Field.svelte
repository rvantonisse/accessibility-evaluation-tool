<div class="Field">
  <label for="{id}">{label}</label>
  {#if helptext}
    <HelpText>
      {@html helptext}
    </HelpText>
  {/if}
  <slot />
</div>

<style>
  /* REMOVED */
</style>

<script>
  import HelpText from './HelpText.svelte';

  export let id;
  export let label;
  export let helptext = '';
</script>
