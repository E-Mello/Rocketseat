const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const isDevelopment = process.env.NODE_ENV !== 'production';
// const isDevelopment = true;

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'source-map' : 'eval-source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, "public"),
          staticOptions: {},
          // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
          // Can be:
          // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
          publicPath: "/static-public-path/",
          // Can be:
          // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
          serveIndex: true,
          // Can be:
          // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
          watch: true,
        },
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader'],
            }
        ],
    }
};