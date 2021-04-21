module.exports = {
  root: true,
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'import'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 0,
    'prefer-arrow-callback': 1,
    'func-style': ['warn', 'expression'],
    'no-console': 1,
    'no-var': 2,
    'no-multiple-empty-lines': 1,
    'react/no-unescaped-entities': 0,
    'eol-last': 2,
    semi: 1,
    eqeqeq: 2,
    quotes: ['warn', 'single'],
    'jsx-quotes': ['warn', 'prefer-double'],
    curly: 2,
    'prefer-const': 2,
    'dot-notation': 1,
    'no-empty-pattern': 1,
    'import/order': ['error', { groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object'] }],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'react/prop-types': 0,
    'react/destructuring-assignment': [2, 'always'],
    // 'react/display-name': [2, {
    //   'ignoreTranspilerName': true
    // }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral'],
      },
    ],
    'template-curly-spacing': ['off'],
  },
};
