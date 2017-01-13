var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var outputFile = 'someline-table'
var globalName = 'SomelineTable'

var config = require('../package.json')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'css-loader',
                        less: 'css-loader!less-loader'
                    }
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'VERSION': JSON.stringify(config.version),
        }),
        // new ExtractTextPlugin(outputFile + '.css'),
    ],
}
