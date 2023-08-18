import path from 'path';

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import requireTransform from 'vite-plugin-require-transform';

import mergeJson from './rollup/rollup-plugin-merge-json/index.js';
import replace from '@rollup/plugin-replace';

import locales from './src/locales/index.json';

const BASEPATH = process.env.BASEPATH || '/';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, "build"),
  },

  plugins: [
    svelte(),

    mergeJson({
      targets: locales.map((locale) => {
        return {
          src: `src/locales/${locale.lang}/**/*.json`,
          dest: `src/locales/translations_${locale.lang}.json`
        };
      }),
      verbose: false,
      watch: true,
      wrapWithPath: true
    }),

    /**
     * https://github.com/rollup/plugins/tree/master/packages/replace
     * Replaces strings {string: replacement,} in:
     * - ./src/main.js
     */
    replace({
      /** @type {string} Path where app will run */
      __BASEPATH__: BASEPATH
    }),

    /**
     * CommonJS modules required in code
     * need to be transformed to ESM compatible import
     * clientside.
     */
    requireTransform({
      fileRegex: /jsonld\.js/
    }),
  ],

  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src')
    }
  }
});
