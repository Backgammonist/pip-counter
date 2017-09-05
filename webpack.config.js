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

    plugins: ([
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: constants.GAME_TITLE
        }),
        new webpack.HotModuleReplacementPlugin()
    ]).concat(ENV==='production' ? [
        new OfflinePlugin({
            relativePaths: false,
            AppCache: false,
            excludes: ['_redirects'],
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
    ] : []),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
