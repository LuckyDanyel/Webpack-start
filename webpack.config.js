const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const plugins = () =>  {
    const basePlugins = [
        new HTMLWebpackPlugin({
            template:  path.resolve(__dirname, 'app/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        }),
    ];
    if(isProd){
        basePlugins.push(
            new ImageMinimizerPlugin({
                minimizerOptions: {
                  // Lossless optimization with custom option
                  // Feel free to experiment with options for better result for you
                  plugins: [
                    ["gifsicle", { interlaced: true }],
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 5 }],
                    // Svgo configuration here https://github.com/svg/svgo#configuration
                    [
                      "svgo",
                      {
                        plugins: extendDefaultPlugins([
                          {
                            name: "removeViewBox",
                            active: false,
                          },
                          {
                            name: "addAttributesToSVGElement",
                            params: {
                              attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                            },
                          },
                        ]),
                      },
                    ],
                  ],
                },
              }),
        )
    }

    return basePlugins;
};

module.exports = {
    context: path.resolve(__dirname, 'app'),
    mode: 'development',
    entry: '../app/js/main.js',
    output: {
        filename: `./js/${filename('js')}` ,
        path: path.resolve(__dirname, 'dist'),
        
       
        
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,

    },
    plugins: plugins(),
    devtool: isProd ? false : 'source-map',
    module:{
        rules:[
            {
                test: /\.html$/,
            
                loader: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: [
                {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: isDev
                },
            },
            'css-loader'
        ],
        
    },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                type: 'asset/resource',

                generator: {
                    filename: 'images/[name][ext][query]',
                    
                }
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator:{
                  filename: 'fonts/[name][ext][query]'
                }
                
            }
        ]
    }
};