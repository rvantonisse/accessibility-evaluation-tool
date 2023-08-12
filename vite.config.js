import path from 'path';

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import requireTransform from 'vite-plugin-require-transform';

import mergeJson from './rollup/rollup-plugin-merge-json/index.js';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

import locales from './src/locales/index.json';

const production = process.env.production;
const BASEPATH = process.env.BASEPATH || '';

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

    replace({
      __BASEPATH__: BASEPATH
    }),

    requireTransform({
      fileRegex: /jsonld\.js/
    }),

    production && terser()
  ],
  resolve: {
    alias: {
      '@app': './src'
    }
  }
});
