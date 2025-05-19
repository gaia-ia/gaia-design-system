const pluginJs = require('@eslint/js');
const pluginStorybook = require('eslint-plugin-storybook');
const globals = require('globals');
const tseslint = require('typescript-eslint');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = [
  {
    plugins: {
      'storybook/react': pluginStorybook,
      'simple-import-sort': simpleImportSort,
    },
  },
  { files: ['**/*.{js,mjs,cjs,ts,tsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      eqeqeq: 'off',
      'no-unused-vars': 'error',
      'no-console': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
