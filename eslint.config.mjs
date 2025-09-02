import js from '@eslint/js'
import tsEslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },

  {
    ignores: ['**/.react-router/', '**/node_modules/'],
  },

  {
    name: 'eslint/recommended',
    rules: js.configs.recommended.rules,
  },
  ...tsEslint.configs.recommended,

  {
    name: 'react/jsx-runtime',
    plugins: {
      react: pluginReact,
    },
    rules: pluginReact.configs['jsx-runtime'].rules,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    name: 'react-hooks/recommended',
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: pluginReactHooks.configs.recommended.rules,
  },

  {
    files: ['tailwind.config.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  {
    name: 'project-custom',
    rules: {
      'no-irregular-whitespace': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]
