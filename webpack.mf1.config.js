const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const mf1 =  {
  entry: "./mf1/main",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist/mf1"),
    port: 4200
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
      publicPath: "http://localhost:4200/",
      path: path.join(__dirname, "dist/mf1"),
      filename: '[name].js'
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "mf1",
      library: { type: "var", name: "mf1" },
      filename: "remoteEntry.js",
      exposes: {
        component: "./mf1/component"
      },
        shared: ["rxjs"]
    }),
    new HtmlWebpackPlugin({
      template: "./mf1/index.html"
    }),
  ]
};

module.exports = mf1;