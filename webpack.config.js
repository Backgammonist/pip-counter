/* global __dirname, process */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const constants = require('./fixtures/constants');
const webpack = require('webpack');
const OfflinePlugin = require('offline-plugin');
const ENV = process.env.NODE_ENV || 'development';
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        new webpack.HotModuleReplacementPlugin(),
        new WebpackPwaManifest({
            name: 'Pip counter',
            short_name: 'PIPcount',
            display: 'standalone',
            description: 'Practice your backgammon pip counting skill',
            background_color: '#ffffff',
            theme_color: '#ffffff',
            orientation: 'landscape',
            start_url: './',
            ios: true,
            icons: [
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512],
                    ios: true
                }
            ]
        })
    ]).concat(ENV==='production' ? [
        new OfflinePlugin({
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
            ]
        }),
        new CopyWebpackPlugin([{from: '.nojekyll', to: ''}])
    ] : [])
};
