const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        produto: './src/js/produto.js',
    },

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist')
    },

    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", 
                    "postcss-loader",
                    "sass-loader",
                ]
            },

            {
                test: /\.html$/,
                use: "html-loader"
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'medias/images/[name][ext]'
                }
            },

            {
                test: /\.(mp4|mov|qt|avi|wmv|avchd|flv|swf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'medias/videos/[name][ext]'
                }
            },

            {
                test: /\.(woff|woff2|otf|ttf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'medias/fonts/[name][ext]'
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({filename: 'css/[name].css'}),

        new HtmlWebpackPlugin({
            template: './src/html/index.html', 
            filename: "index.html",
            chunks: ['index'],
        }),

        new HtmlWebpackPlugin({
            template: './src/html/produto.html', 
            filename: "produto.html",
            chunks: ['produto'],
        }),
    ],
}