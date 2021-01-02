const path = require('path')
const HtmlWepackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src", "App.js")
    },
    output: {
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWepackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}