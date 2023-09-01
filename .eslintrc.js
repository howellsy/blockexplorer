module.exports = {
  extends: ['airbnb-typescript', 'prettier', 'plugin:import/typescript'],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import', 'jsx-a11y', 'react-hooks'],
  rules: {
    'no-console': 2,
    'no-debugger': 2,
    'no-alert': 2,
    'no-param-reassign': 0,
    'prettier/prettier': ['error'],
    'comma-dangle': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-restricted-imports': 0,
    '@typescript-eslint/no-restricted-imports': [
      'warn',
      {
        name: 'react-redux',
        importNames: ['useSelector', 'useDispatch'],
        message: 'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
      },
    ],
    '@typescript-eslint/comma-dangle': 0,
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js'],
    },
    project: ['tsconfig.json'],
  },
};
