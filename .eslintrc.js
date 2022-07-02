module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'react-native/no-inline-styles': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
