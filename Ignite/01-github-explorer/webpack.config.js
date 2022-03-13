const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'
// const isDevelopment = true;
// new webpack.SourceMapDevToolPlugin(options);
// new webpack.optimize.UglifyJsPlugin({sourceMap: true});

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    // mode: 'development',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    // devtool: "eval",
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
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
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader', 'sass-loader'],
            }
        ],
    }
};