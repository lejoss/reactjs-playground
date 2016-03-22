/**
 * Created by lejoss on 16/12/15.
 */


var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'babel-polyfill',
        './app/main.js'
        ],
    output: {
        path: __dirname + '/dist',
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
                    presets: ['es2015', 'react', 'stage-3']
                }
            },
            {
                test: /\.css$/,
                  loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};