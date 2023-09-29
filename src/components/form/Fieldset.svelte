<fieldset id="{id}" class="Fieldset field">
  <legend>
    {@html legend}
    {#if helptext}
      <Button
        small
        on:click="{toggle}"
        aria-expanded="{showHelptext}"
        aria-controls="{`field-helptext-${id}`}"
        aria-label="{`${TRANSLATED.SHOW_HIDE_HELPTEXT} ${TRANSLATED.FOR} ${legend}`}"
      >
        {TRANSLATED.SHOW_HIDE_HELPTEXT}
      </Button>
      {#if showHelptext}
        <div class="Fieldset__helptext" id="{`field-helptext-${id}`}">
          {@html helptext}
        </div>
      {/if}
    {/if}
  </legend>

  <div class="Fieldset__elements">
    <slot />
  </div>
</fieldset>

<style>
  /* REMOVED */
</style>

<script>
  import { getContext } from 'svelte';

  import Button from '@app/components/ui/Button/Button.svelte';

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
