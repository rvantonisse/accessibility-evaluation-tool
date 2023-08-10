{#if editing}
  <label for="{`evaluation-meta-edit-${field}`}">
    <slot />
  </label>
{:else}
  <slot />
{/if}

<script>
  export let field;
  export let editing;
</script>
