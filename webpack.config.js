const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    alias: {
      three: path.resolve("./node_modules/three"),
    },
    extensions: [".js", ".wasm"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.png",
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    https: true,
    host: "0.0.0.0",
    allowedHosts: "all",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
