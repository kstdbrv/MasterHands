const path = require("path");
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, "../static/"),
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
            loader: 'svg-url-loader',
            options: {
              name : './svg/[name].[ext]',
              limit: 10000,
            },
          },
        ]
      },
      {
          test: /\.ttf$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: './font/[name].[ext]',
              },
            },
          ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name]-[hash].[ext]',
            },
          },
        ],
      },
    ]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};