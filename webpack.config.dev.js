var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: './public/js/app',
        publicPath: "/js/app/",
        filename: "[name].js",
        chunkFilename: "[id].js"
    }
});