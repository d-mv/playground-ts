module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:json/recommended',
    'plugin:markdown/recommended',
    // 'plugin:react-hooks/recommended',
    // 'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {},
  },
  env: {
    'jest/globals': true,
  },
  plugins: [
    '@getify/proper-arrows',
    '@typescript-eslint',
    'async-await',
    'eslint-comments',
    'import',
    'jest',
    'prettier',
    'promise',
    // 'react-perf',
    // 'react',
  ],
  // settings: {
  //   react: {
  //     pragma: 'React',
  //     version: 'detect',
  //   },
  // },
  rules: {
    // 'react/prop-types': 'off', // Using TS instead
    // 'react/display-name': 'off', // Research and enable
    // 'react/jsx-uses-react': 'off',
    // 'react/react-in-jsx-scope': 'off',
    'no-undef': [0],
    'import/no-unresolved': [0],
    // 'react/jsx-key': [
    //   'error',
    //   {
    //     checkFragmentShorthand: true,
    //   },
    // ],
    '@getify/proper-arrows/params': [
      'error',
      {
        unused: 'trailing',
        count: 15,
        length: 0,
        allowed: ['key'],
      },
    ],
    'no-var': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: false,
      },
    ],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
        minimumDescriptionLength: 3,
      },
    ],
    '@typescript-eslint/semi': ['off', null],
    'async-await/space-after-async': 2,
    'async-await/space-after-await': 2,
    'block-spacing': ['error', 'always'],
    'lines-around-comment': [0],
    'lines-between-class-members': ['error', 'always'],
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-nested-callbacks': [2, 3],
    'newline-per-chained-call': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-mixed-spaces-and-tabs': ['error'],
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error'],
    'no-spaced-func': ['error'],
    'no-whitespace-before-property': ['error'],
    'prettier/prettier': 'error',
    'space-before-blocks': ['error', 'always'],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'const',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'const',
      },
      {
        blankLine: 'always',
        prev: 'function',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'function',
      },
      {
        blankLine: 'always',
        prev: 'if',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if',
      },
      {
        blankLine: 'always',
        prev: 'for',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'for',
      },
      {
        blankLine: 'always',
        prev: 'switch',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'switch',
      },
      {
        blankLine: 'always',
        prev: 'try',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'try',
      },
      {
        blankLine: 'always',
        prev: 'export',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'export',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.',
          },
        ],
        patterns: ['!styled-components/macro'],
      },
    ],
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
  },
}
