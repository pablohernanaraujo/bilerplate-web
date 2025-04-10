import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import unicornPlugin from 'eslint-plugin-unicorn';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Base configuration from Next.js recommended rules
const baseConfig = compat.extends('next/core-web-vitals');

// Custom rules configuration
const customConfig = {
  files: ['**/*.{js,jsx,ts,tsx}'],
  ignores: ['**/.next/**', '.next/**'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: tsParser,
    parserOptions: {
      project: './tsconfig.json',
    },
  },
  plugins: {
    prettier: prettierPlugin,
    'simple-import-sort': simpleImportSortPlugin,
    'react-hooks': reactHooksPlugin,
    unicorn: unicornPlugin,
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    // Disable the now-unnecessary rule in Next.js 10+
    'react/react-in-jsx-scope': 'off',
    // Warn about console statements when in production
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // Report Prettier formatting issues as ESLint errors.
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // Import order
    'import/newline-after-import': ['error', { count: 1 }],
    'import/extensions': ['error', 'never', { svg: 'always' }],
    'import/prefer-default-export': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'], // efectos secundarios
          ['^react', '^@?\\w'], // módulos externos (react primero)
          ['^'], // importaciones absolutas
          ['^\\.'], // importaciones relativas
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    // TypeScript rules
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // React rules
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-children-prop': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/no-unknown-property': 'off',
    // ESLint rules
    'global-require': 'off',
    'no-plusplus': 'off',
    complexity: ['error', { max: 12 }],
    'max-depth': ['error', { max: 3 }],
    'max-nested-callbacks': ['error', { max: 3 }],
    'max-params': ['error', { max: 3 }],
    'max-statements': ['error', { max: 12 }],
    'arrow-body-style': ['error', 'as-needed'],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: false },
    ],
    // Other rules
    'max-len': [
      'warn',
      {
        code: 82,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'export',
      },
      {
        blankLine: 'any',
        prev: 'export',
        next: 'export',
      },
    ],
    // Unicorn rules
    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-reduce': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/regex-shorthand': 'error',
  },
};

const config = [
  {
    ignores: ['**/.next/**', '.next/**', '!.next/types/**'],
  },
  ...baseConfig,
  customConfig,
];

export default config;
