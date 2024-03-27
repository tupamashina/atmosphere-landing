/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { node: true, browser: true },
  ignorePatterns: ['.eslintrc.js', 'next.config.mjs'],
  parserOptions: { project: true, tsconfigRootDir: __dirname },
  settings: { 'import/resolver': { typescript: { alwaysTryTypes: true } } },

  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:@next/next/core-web-vitals',
    'plugin:prettier/recommended',
  ],

  rules: {
    //* ESLint
    'arrow-body-style': ['error', 'as-needed'],

    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    //* TypeScript
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    '@typescript-eslint/no-unused-vars': [
      'warn',
      { ignoreRestSiblings: false },
    ],

    '@typescript-eslint/no-empty-interface': [
      'error',
      { allowSingleExtends: true },
    ],

    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],

    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true },
    ],

    //* React
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/display-name': ['error', { checkContextObjects: true }],

    'react-hooks/exhaustive-deps': [
      'warn',
      { additionalHooks: '(useIsomorphicLayoutEffect)' },
    ],

    'react/jsx-props-no-spreading': [
      'error',
      { html: 'ignore', explicitSpread: 'ignore', exceptions: ['Component'] },
    ],

    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    //* Import
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',

    'import/order': [
      'warn',
      {
        distinctGroup: false,
        'newlines-between': 'always',
        alphabetize: { order: 'asc', orderImportKind: 'asc' },

        groups: [
          ['builtin', 'external', 'internal'],
          ['index', 'sibling', 'parent'],
          ['type', 'unknown'],
        ],

        pathGroups: [
          { pattern: '@/**', group: 'parent', position: 'before' },
          { pattern: '../**', group: 'parent', position: 'before' },
          { pattern: './**', group: 'sibling', position: 'after' },
        ],
      },
    ],

    //* Unicorn
    'unicorn/no-null': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prevent-abbreviations': 'off',

    'unicorn/filename-case': [
      'error',
      { cases: { camelCase: true, pascalCase: true } },
    ],
  },
};
