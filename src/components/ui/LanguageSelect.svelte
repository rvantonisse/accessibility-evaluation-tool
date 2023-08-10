<!--
 * @component
 * LanguageSelect
 * -->
<div class="LanguageSelect">
  {#if !collapsed}
    <span class="LanguageSelect__languages_container languagelist">
      <strong id="LanguageSelect__label">{LABEL_TRANSLATIONS}:</strong>
      <ul
        class="LanguageSelect__languages languagelistul"
        on:click="{handleClick}"
      >
        {#each locales as appLocale}
          <li
            class="LanguageSelect__language {appLocale === currentLocale ? 'language__item--current' : ''}"
          >
            {#if appLocale === currentLocale}
              <strong>{currentLocale.title}</strong>
            {:else}
              <a
                lang="{appLocale.lang}"
                href="#{appLocale.lang}"
              >{appLocale.title}</a>
            {/if}
          </li>
        {/each}
      </ul>
    </span>
  {/if}
  <span class="LanguageSelect__toggle">
    <button
      id="showoptions"
      on:click="{handleToggle}"
      type="button"
      class="button-inline showhidebutton"
      aria-expanded="{!collapsed}"
    >
      <svg aria-hidden="true" class="icon-languages"><use
          xlink:href="{`${$basepath}/images/icons.svg#icon-languages`}"
        ></use></svg>
      <span>
        {#if collapsed}
          {BUTTON_SHOW_TRANSLATIONS}
        {:else}{BUTTON_HIDE_TRANSLATIONS}{/if}
      </span>
    </button>
  </span>
</div>
<!-- /component -->

<style>
  /* REMOVED */
</style>

<script>
  import { t as translate, locale } from 'svelte-i18n';
  import { basepath } from '@app/stores/appStore.js';

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
