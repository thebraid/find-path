const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    resolve: {
        alias: {
            Actions: path.resolve(__dirname, 'src/actions'),
            Components: path.resolve(__dirname, 'src/components'),
            Constants: path.resolve(__dirname, 'src/constants'),
            Tools: path.resolve(__dirname, 'src/tools'),
        },
        extensions: ['.js', '.jsx'],
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve('src'),
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(css|pcss)$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: 'css-loader',
                        options: { minimize: false }
                    },
                    { loader: 'postcss-loader' },
                ]
            }
        ]
    },

    plugins: [
        /* собирает html страницу по шаблону из public и подключает бандлы */
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            minify: {
                removeComments: process.env.NODE_ENV === 'production',
                collapseWhitespace: process.env.NODE_ENV === 'production',
                conservativeCollapse: false, /* удалит пробелы между тегами */
            },
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        port: 9000,
        hot: true
    }
};