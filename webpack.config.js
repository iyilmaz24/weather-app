const path = require('path');
const HtmlPlugIn = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          include: /src/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
                // ['@babel/preset-env', '@babel/preset-react', { targets: "defaults" }]
              ],
              // plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import']
              }
            }  
      },
    ],
  },
  plugins: [
    new HtmlPlugIn({
      title: 'HtmlPlugIn',
      filename: 'index.html',
      inject: 'head',
      template: './src/template.html',
    //   favicon: 'src/',
    }),
  ],
};
