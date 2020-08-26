const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, 
            {
                test:/\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'sass-loader'
                ]
            }, 
            {
                test: /\.(png|jpg|svg|gif)$/,
                exclude: /node_modules/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css"
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist']
        })
    ]
};