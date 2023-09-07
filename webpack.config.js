const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './assets/src/index.tsx',
    // entry: { 
    //     default: './src'
    // },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets/dist'),
        clean: true,
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            { 
                test: /\.(sa|sc|c)ss$/, 
                use: [
                      {
                        loader: MiniCssExtractPlugin.loader
                      },
                      {
                        loader: 'css-loader',
                        options: {
                           sourceMap: true
                        }
                      },
                      {
                        loader: 'sass-loader',
                        options: {
                           sourceMap: true
                        }
                      }
                ] 
              },
            // { 
            //     test: /\.(sa|sc|c)ss$/, 
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         },
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         }
            //     ] 
            // },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        })
    ],
};