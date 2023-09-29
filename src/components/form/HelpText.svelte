<!--
@component

# HelpText

- property {string} label
- slot Detail contents
-->
<Details
  summary="{open ? TRANSLATED.HIDE_INFO : TRANSLATED.SHOW_INFO}"
  bind:open="{open}"
>
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
