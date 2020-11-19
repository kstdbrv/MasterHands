const path = require("path");
const miniCss = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  static: path.join(__dirname, '../static/')
}

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: PATHS.static,
    publicPath: '',
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [miniCss.loader, "css-loader",]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          miniCss.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader', // A webpack loader which loads SVG file as utf-8 encoded DataUrl string.
            options: {
              name: './svg/[name].[ext]',
              limit: 10000,
            },
          },
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',

          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/images/',
              publicPath: '/static/images/',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: `${PATHS.src}/assets/svg`, to: `${PATHS.static}/images/svg` },
        { from: `${PATHS.src}/assets/favicon`, to: '' },
        { from: `${PATHS.src}/assets/images/about_master.svg`, to: `${PATHS.static}/images` },
      ],
    }),
    new CleanWebpackPlugin(),
    new miniCss({
      filename: 'style.css',
    }),
    new CompressionPlugin({
      filename: "[base].gz[query]",
      algorithm: "gzip",
      test: /\.js$/,
      minRatio: 0.8
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  }
};