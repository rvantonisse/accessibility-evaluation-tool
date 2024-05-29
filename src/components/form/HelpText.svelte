<!--
@component

# HelpText

- property {string} label
- slot Detail contents
-->
<Details summary="{TRANSLATED.HELPTEXT_TOGGLE}" bind:open="{open}">
  <slot />
</Details>

<!-- /component -->

<style>
  /* REMOVED */
</style>

<script>
  import { getContext } from 'svelte';
  import Details from '@app/components/ui/Details/Details.svelte';

  export let open = false;

  const { translate } = getContext('app');

  $: TRANSLATED = {
    HELPTEXT_TOGGLE: $translate(
      open ? 'UI.COMMON.BUTTON.HIDE' : 'UI.COMMON.BUTTON.SHOW',
      {
        default: open ? 'Hide {subject}' : 'Show {subject}',
        values: {
          subject: $translate('UI.COMMON.BUTTON.INFO', { default: 'info' })
        }
      }
    ),
    FOR: $translate('UI.COMMON.FOR')
  };
</script>
