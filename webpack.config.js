'use strict';

var path = require('path');
var webpack = require('webpack');
var assign = require('object-assign');
var commonConfig = require('./webpack.dev.config');

var plugins = [];
plugins.push(new webpack.DefinePlugin({
	'process.env.NODE_ENV': JSON.stringify('production')
}));

var config = assign({}, commonConfig, {
	plugins: commonConfig.plugins.concat(plugins)
});

module.exports = config;
