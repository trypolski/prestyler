const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    '@storybook/addon-links',
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "webpackFinal": async (config) => {
    config.resolve.alias['prestyler-config'] = path.resolve(__dirname, '../prestyler/prestyler.config.js');
    return config;
  },
};
export default config;
