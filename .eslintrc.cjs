module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
      },
    },
  ],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
