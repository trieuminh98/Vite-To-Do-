/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  extends: [
    // Default rule
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    // Disable rules tend to conflict with prettier, put at the bottom to override default rules above
    'eslint-config-prettier',
    'prettier'
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      // Auto detect react's version
      version: 'detect'
    },
    // Setup import resolver
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, '')],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json')
      }
    }
  },
  env: {
    node: true
  },
  rules: {
    // Disable require React in jsx file
    'react/react-in-jsx-scope': 'off',
    // Warning when <a target='_blank'> tag don't have rel="noreferrer"
    'react/jsx-no-target-blank': 'warn',
    // Add more rule from prettier (copy from .prettierrc file)
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  }
}