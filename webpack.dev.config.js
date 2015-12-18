'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var pkg = require(path.join(process.cwd(), 'package.json'));
var webpack = require('webpack');

module.exports = {
    output: {
        path: path.join(process.cwd(), './public/dist/assets/'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: "/dist/assets/"
    },

    devtool: '#source-map',

    resolve: {
        root: path.join(__dirname, './node_modules'),
        extensions: ['', '.js', '.jsx']
    },

    resolveLoader: {
        root: path.join(__dirname, './node_modules/antd-build/node_modules')
    },

    entry: [
        'webpack-hot-middleware/client',
        './app/js/main.jsx',
        './app/js/login.jsx'
    ],
    module: {
        loaders: [{
            test: /\.jsx$/,
            loaders: ['babel?stage=0']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel?stage=0'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                'css?sourceMap&-restructuring!' +
                'autoprefixer-loader'
            )
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract(
                'css?sourceMap!' +
                'autoprefixer-loader!' +
                'less?{"sourceMap":true,"modifyVars":' + JSON.stringify(pkg.theme || {}) + '}'
            )
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=application/font-woff'
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=image/svg+xml'
        }, {
            test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
            loader: 'url?limit=10000'
        }]
    },

    externals: {
        jquery: 'window.jQuery'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new ExtractTextPlugin('[name].css', {
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
