export default {
  // EditorConfig
  endOfLine: 'lf',
  tabWidth: 2,
  useTabs: false,

  // General prettier stuff
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  plugins: ['prettier-plugin-svelte'],
  overrides: [
    {
      files: '*.json',
      options: {
        tabWidth: 4
      }
    },
    {
      // Svelte (prettier-plugin-svelte)
      files: '*.svelte',
      options: {
        svelteSortOrder: 'markup-styles-scripts-options',
        svelteStrictMode: true,
        svelteAllowShorthand: false /* disabled by svelteStrictMode*/,
        svelteBracketNewLine: true,
        svelteIndentScriptAndStyle: true
      }
    }
  ]
};
