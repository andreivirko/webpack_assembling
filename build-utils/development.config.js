const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { dirname } = require("path");

module.exports = (env) => ({
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({template: "./index.html"})],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 4040,
    noInfo: true,
    quiet: true,
    clientLogLevel: "warning",
    stats: "errors-only",
    open: true,
  },
});
