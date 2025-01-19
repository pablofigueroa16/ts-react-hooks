import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/*.test.ts'],
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}', 'vite.config.ts'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslintPluginPrettier,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': ['error', { endOfline: 'auto' }],
    },
  },
]
