const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /style.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /style.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            }
        ]
    },

    optimization: {},
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test Webpack',
            // filename: 'app.html',
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        })
    ]
}