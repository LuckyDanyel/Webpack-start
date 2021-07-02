const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
        require('autoprefixer'),
    ];
    if(isProd){
        basePlugins.push(
            
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
                    hmr: isDev,
                       
                },
            },
            'css-loader',
            'postcss-loader'
        
        ],
        
    },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader', 
                    'postcss-loader',
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
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
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator:{
                  filename: 'fonts/[name][ext][query]'
                }
                
            }
        ]
    }
};