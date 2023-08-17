import { register, init } from 'svelte-i18n';

/**
 * @function registerLocales  Register translation files to Svelte-i18n
 * @param {string[]} locales  Array with lang code
 */
function registerLocales(locales) {
  locales.forEach((locale) => {
    /**
     * @type {import("svelte-i18n").register}
     */
    register(locale, async () => await importLocale(locale));
  });
}

/**
 * @function importLocale
 * @description Import translation for specific locale
 * @param {string} locale Requested language locale code to import
 * @return {Object}  Language specific dictionary with translations
 */
async function importLocale(locale) {
  return import(`@app/locales/translations_${locale}.json`);
}

/**
 * @function internationalize
 * @description
 *  Internationalization wrapper for the svelte app,
 *  utilizing svelte-i18n
 * @param {string[]} locales 
 */
export async function internationalize(locales) {
  /** 
   * @type {string} https://www.rfc-editor.org/rfc/rfc5646.txt; lang code, e.g. "en-US"
   */
  const defaultLocale = locales[0];

  registerLocales(locales);

  init({
    fallbackLocale: defaultLocale,
    // language[-region]
    // e.g. /nl-NL/ --> Dutch Netherlands
    // See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes for language codes
    // See https://en.wikipedia.org/wiki/ISO_3166-1 for region codes
    // initialLocale: getLocaleFromPathname(/^\/([a-z]{2})(\-[A-Z]{2})?\//)
    initialLocale: defaultLocale
  });
}
