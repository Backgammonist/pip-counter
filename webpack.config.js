/* global __dirname */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const constants = require('./fixtures/constants');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: constants.GAME_TITLE
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
