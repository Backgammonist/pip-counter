/* global __dirname, process */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const constants = require('./fixtures/constants');
const webpack = require('webpack');
const OfflinePlugin = require('offline-plugin');
const ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/index.js',

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist',
        hot: true
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },

    plugins: ([
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.template.ejs',
            title: constants.GAME_TITLE
        }),
        new webpack.HotModuleReplacementPlugin()
    ]).concat(ENV==='production' ? [
        new OfflinePlugin({
            relativePaths: false,
            AppCache: false,
            excludes: ['_redirects'],
            publicPath: '/pip-counter/',
            ServiceWorker: {
                events: true
            },
            cacheMaps: [
                {
                    match: /.*/,
                    to: '/',
                    requestTypes: ['navigate']
                }
            ],
            publicPath: '/'
        })
    ] : [])
};
