const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const mf2 =  {
  entry: "./modules/mf2/main",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist/mf2"),
    port: 4300
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
      publicPath: "http://localhost:4300/",
      path: path.join(__dirname, "dist/mf2"),
      filename: '[name].js'
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "mf2",
      library: { type: "var", name: "mf2" },
      filename: "remoteEntry.js",
      exposes: {
        component: "./modules/mf2/component"
      },
        shared: ["rxjs"]
    }),
    new HtmlWebpackPlugin({
      template: "./modules/mf2/index.html"
    }),
  ]
};

module.exports = mf2;