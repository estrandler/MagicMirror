const HWP = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        // Include empty string '' to resolve files by their explicit extension
        // (e.g. require('./somefile.ext')).
        // Include '.js', '.jsx' to resolve files by these implicit extensions
        // (e.g. require('underscore')).
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HWP(
            {
                template: './src/index.html'
            }
        )
    ],
    devServer: {
        disableHostCheck: true
    }
}