const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = 'development';
let target = 'web';
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
];

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: mode,
  target: target,

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        /* parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        }, */
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  plugins: plugins,

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
};
