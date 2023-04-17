module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },
  ignorePatterns: [
    '/node_modules/',
    '.eslintrc.*',
    '.eslintrc',
    'jest.config.js',
    'jest.config.ts',
    'vite.config.ts',
    'vite.config.js',
    '*.min.js',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'sort-imports-es6-autofix',
    'import',
    'no-relative-import-paths',
    'sort-destructure-keys',
    'sort-keys-fix',
    'eslint-plugin-node',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'node/no-process-env': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      { allowSameFolder: false },
    ],
    'import/newline-after-import': ['error'],
    '@typescript-eslint/no-floating-promises': 'error',
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      { caseSensitive: true },
    ],
    'require-await': 'error',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'import/prefer-default-export': 'error',
  },
}
