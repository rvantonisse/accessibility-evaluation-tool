<div class={`${className} Field`}>
  <slot />
  {#if helptext}
    <HelpText
      labelHTML="{label && `<label for="${id}">${label}</label>`}"
      {label}
    >
      {@html helptext}
    </HelpText>
  {:else if label}<label for="{id}">{label}:</label>{/if}
</div>

<style>
/* REMOVED */
</style>

<script>
  import HelpText from './HelpText.svelte';

  export let id;
  export let label;
  export let helptext = "";
  export let className = "";
</script>
