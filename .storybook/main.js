module.exports = {
  // automatically import all files ending in *.stories.js|mdx
  stories: ["../src/Intro.stories.mdx", "../src/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: "babel-loader",
    });

    // Return the altered config
    return config;
  },
};
