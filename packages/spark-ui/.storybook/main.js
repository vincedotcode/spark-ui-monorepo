/**
 * Storybook configuration for Spark UI. This file tells Storybook where to
 * find your stories and which framework to use. If you wish to customise
 * the Storybook experience (e.g. add more addons), modify this file.
 */
module.exports = {
  stories: ["../src/stories/**/*.stories.@(ts|tsx)"],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  }
};