<aside
  class="Panel your-report"
  class:your-report--expanded="{$yourReportPanelOpen}"
  class:your-report--collapsed="{!$yourReportPanelOpen}"
>
  {#if $yourReportPanelOpen}
    <h2 class="Panel__Header__heading your-report__heading">
      {#if subtitle}
        <div>
          <span class="your-report__heading-pre">{subtitle}</span>
          {title}
        </div>
      {:else}{title}{/if}

      <button
        type="button"
        class="button-secondary button-small your-report__showhide"
        on:click="{toggle}"
        aria-expanded="{$yourReportPanelOpen}"
      >
        {@html TRANSLATED.SHOW_HIDE}
      </button>
    </h2>

    <slot />
  {:else}
    <button
      type="button"
      class="button-secondary button-small your-report__showhide"
      on:click="{toggle}"
      aria-expanded="{$yourReportPanelOpen}"
    >
      {@html TRANSLATED.SHOW_HIDE}
    </button>
  {/if}
</aside>

<style>
  /* REMOVED */
</style>

<script>
  import { getContext } from 'svelte';
  import { yourReportPanelOpen } from '@app/stores/appStore.js';

  export let title = null;
  export let subtitle = null;

  const { translate } = getContext('app');

  $: fullTitle = subtitle ? `${subtitle} ${title}` : title;

  $: TRANSLATED = {
    SHOW_HIDE: $yourReportPanelOpen
      ? $translate('UI.COMMON.BUTTON.HIDE', {
          default: 'Hide {subject}',
          values: {
            subject: `<span class="visuallyhidden">${fullTitle || ''}</span>`
          }
        })
      : $translate('UI.COMMON.BUTTON.SHOW', {
          default: 'Show {subject}',
          values: { subject: fullTitle || '' }
        })
  };

  function toggle() {
    yourReportPanelOpen.set(!$yourReportPanelOpen);
  }
</script>
