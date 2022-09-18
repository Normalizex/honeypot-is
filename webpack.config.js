const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: ['./src/index.ts'],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            url: require.resolve("url"),
            process: require.resolve("process/browser"),
            zlib: require.resolve("browserify-zlib"),
            stream: require.resolve("stream-browserify"),
            util: require.resolve("util"),
            buffer: require.resolve("buffer"),
            asset: require.resolve("assert"),
        }
    },
    mode: 'production',
    plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],
    output: {
        filename: 'index.browser.min.js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this',
        libraryTarget: 'window'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({})
        ]
    }
}