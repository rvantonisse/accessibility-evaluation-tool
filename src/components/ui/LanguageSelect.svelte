<!--
 * @component
 * LanguageSelect
 * -->
<div class="LanguageSelect">
  {#if !collapsed}
    <span class="LanguageSelect__languages_container languagelist">
      <strong id="LanguageSelect__label">{LABEL_TRANSLATIONS}:</strong>
      <!-- 
        svelte-ignore a11y-click-events-have-key-events
        ---
        Managed with event delegation. As click events bubble up,
        a click on a nested button or link cause the click event
        to trigger on the list.
        One registered event to handle all nested clicks.
      /-->
      <ul
        class="LanguageSelect__languages languagelistul"
        on:click="{handleClick}"
      >
        {#each locales as appLocale}
          <li
            class="LanguageSelect__language {appLocale === currentLocale
              ? 'language__item--current'
              : ''}"
          >
            {#if appLocale === currentLocale}
              <strong>{currentLocale.title}</strong>
            {:else}
              <a lang="{appLocale.lang}" href="#{appLocale.lang}"
                >{appLocale.title}</a
              >
            {/if}
          </li>
        {/each}
      </ul>
    </span>
  {/if}
  <span class="LanguageSelect__toggle">
    <Button
      id="showoptions"
      small
      aria-expanded="{!collapsed}"
      on:click="{handleToggle}"
    >
      <span>
        {#if collapsed}
          {BUTTON_SHOW_TRANSLATIONS}
        {:else}{BUTTON_HIDE_TRANSLATIONS}{/if}
      </span>
    </Button>
  </span>
</div>

<!-- /component -->

<style>
  /* REMOVED */
</style>

<script>
  import { t as translate, locale } from 'svelte-i18n';

  import Button from '@app/components/ui/Button/Button.svelte';

  export let locales = [];

  let collapsed = false;

  $: currentLocale = locales.find((l) => l.lang === $locale);

  // translations
  $: TRANSLATIONS = $translate('UI.COMMON.BUTTON.LANGUAGE_SELECT');

  $: BUTTON_SHOW_TRANSLATIONS = $translate('UI.COMMON.BUTTON.SHOW', {
    values: {
      subject: TRANSLATIONS
    }
  });

  $: BUTTON_HIDE_TRANSLATIONS = $translate('UI.COMMON.BUTTON.HIDE', {
    values: {
      subject: TRANSLATIONS
    }
  });

  $: LABEL_TRANSLATIONS = $translate('UI.COMMON.LABEL.LANGUAGE_SELECT');

  function handleClick(event) {
    const target = event.target;

    if (
      target.nodeName === 'A' &&
      locales.some((l) => l.lang === target.lang)
    ) {
      event.preventDefault();

      // This line is what makes the App translate to another language
      locale.set(target.lang);
    }
  }

  function handleToggle() {
    collapsed = !collapsed;
  }
</script>
