/**
 * Created by lejoss on 16/12/15.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 5555
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};