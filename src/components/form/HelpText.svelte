<!--
 * @component
 * HelpText
 * @property label <String|@html>
 * @slot Detail contents
 * -->
<div class="HelpText information" >
  <div class="HelpText__label">
    {@html labelHTML}
    <button 
      type="button" 
      on:click={toggle} 
      class="button button-small showhidebutton"
      aria-expanded="{open}"
      aria-label={`${buttonText} ${TRANSLATED.FOR} ${label}`}
    >
     {@html buttonText} 
    </button>
  </div>
   {#if open}
  <div class="HelpText__body">
    <slot />
  </div>
  {/if}
</div>
 <!-- /component -->

<style>
/* REMOVED */
</style>

<script>
  import { getContext } from 'svelte';

  export let label;
  export let labelHTML;
  export let open = false;

  function toggle() {
    open = !open;
  }

  $: buttonText = open ? TRANSLATED.HIDE_INFO : TRANSLATED.SHOW_INFO;

  const { translate } = getContext('app');

  $: TRANSLATED = {
    HIDE_INFO: $translate('UI.COMMON.BUTTON.HIDE', {
      default: 'Hide {subject}',
      values: {
        subject: $translate('UI.COMMON.BUTTON.INFO', { default: 'info' })
      }
    }),
    SHOW_INFO: $translate('UI.COMMON.BUTTON.SHOW', {
      default: 'Show {subject}',
      values: {
        subject: $translate('UI.COMMON.BUTTON.INFO')
      }
    }),
    FOR: $translate('UI.COMMON.FOR')
  };
</script>
