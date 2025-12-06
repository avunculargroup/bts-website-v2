import nextConfig from 'eslint-config-next';
import prettierPlugin from 'eslint-plugin-prettier';

const [nextBaseConfig = {}, nextTsConfig = {}, ...restConfigs] = nextConfig;

const baseConfig = {
  ...nextBaseConfig,
  plugins: {
    ...(nextBaseConfig.plugins || {}),
    prettier: prettierPlugin,
  },
  rules: {
    ...(nextBaseConfig.rules || {}),
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
  },
};

const tsConfig = {
  ...nextTsConfig,
  rules: {
    ...(nextTsConfig.rules || {}),
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
  },
};

const workspaceIgnores = {
  ignores: ['eslint.config.mjs'],
};

const config = [baseConfig, tsConfig, ...restConfigs, workspaceIgnores];

export default config;
