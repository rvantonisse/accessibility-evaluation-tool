import path from 'path';

import { build, defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import requireTransform from 'vite-plugin-require-transform';

import copy from 'rollup-plugin-copy';
import mergeJson from './rollup/rollup-plugin-merge-json/index.js';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import pkg from './package.json';
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

    copy({
      targets: [
        {
          // Styles
          src: 'src/static/css/**/*.css',
          dest: `build/bundles`
        },
        {
          // Images
          src: 'src/static/**/*.{svg,png,jpeg,jpg}',
          dest: `build/images`
        },
        {
          // index.html
          src: 'index.html',
          dest: 'build',
          transform: (contents) => {
            let contentsString = contents.toString();
            const buildDate = new Date();
            const months = [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ];

            const replacement = {
              __APP_BUILD_DATE__: `${buildDate.getDate()} ${
                months[buildDate.getMonth()]
              } ${buildDate.getFullYear()}`,
              __APP_BUILD_YEAR__: buildDate.getFullYear(),
              __APP_VERSION__: production ? pkg.version : 'DEVELOPMENT',
              __BASEPATH__: BASEPATH,
              __TITLE__: pkg.name
            };

            let replaceRegexp;

            // e.g. "{__TITLE__}" => "WCAG-EM-Report-Tool"
            for (var key in replacement) {
              replaceRegexp = new RegExp(`\\{${key}\\}`, 'g');

              if (Object.prototype.hasOwnProperty.call(replacement, key)) {
                contentsString = contentsString.replace(
                  replaceRegexp,
                  replacement[key]
                );
              }
            }

            return contentsString;
          }
        }
      ],
      verbose: false
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
