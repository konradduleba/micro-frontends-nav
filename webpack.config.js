const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "dulcon",
    projectName: "nav",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
