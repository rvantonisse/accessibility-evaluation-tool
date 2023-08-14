<!-- 
  @component
  Button  Dispatches an on:click event.
 -->
{#if fake}
  <span class="{classNames}">
    {#if label}
      {label}
    {:else}
      <slot />
    {/if}
  </span>
{:else}
  <button type="button" class="{classNames}" on:click>
    {#if label}
      {label}
    {:else}
      <slot />
    {/if}
  </button>
{/if}

<style>
  /* REMOVED */
</style>

<script>
  export let type = 'primary';
  export let fake = false;
  export let small = false;
  export let label;

  $: classNames = [
    'Button',
    `Button--${type}`,
    small ? 'Button--small' : '',
    'button',
    `button-${type}`,
    small ? 'button-small' : ''
  ].join(' ');
</script>
