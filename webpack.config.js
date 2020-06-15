const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackMerge = require("webpack-merge");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const WebpackBar = require("webpackbar");
const { resolve } = require("path");
const loadModeConfig = (env) =>
  require(`./build-utils/${env.mode}.config`)(env);

module.exports = (env) =>
  webpackMerge(
    {
      mode: env.mode,
      context: path.resolve(__dirname, "src"),
      entry: "./index.js",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
          },
          {
            test: /\.(gif|png|jpe?g|svg)/,
            use: [
              {
                loader: "url-loader",
                options: {
                  name: "[path]/[name].[ext]",
                  limit: 5000,
                },
              },
            ],
          },
          {
            test: /\.html$/,
            use: ["html-loader"],
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar(),
      ],
    },
    loadModeConfig(env)
  );
