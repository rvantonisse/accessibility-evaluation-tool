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
  /* REMOVED */
</style>

<script>
  import { getContext } from 'svelte';

  import HelpText from './HelpText.svelte';

  export let id;
  export let legend;
  export let helptext = '';

  function toggle() {
    showHelptext = !showHelptext;
  }

  let showHelptext = false;

  const { translate } = getContext('app');
  $: TRANSLATED = {
    SHOW_HIDE_HELPTEXT: showHelptext
      ? $translate('UI.COMMON.BUTTON.HIDE', {
          values: { subject: $translate('UI.COMMON.BUTTON.INFO') }
        })
      : $translate('UI.COMMON.BUTTON.SHOW', {
          values: { subject: $translate('UI.COMMON.BUTTON.INFO') }
        }),
    FOR: $translate('UI.COMMON.FOR')
  };
</script>
