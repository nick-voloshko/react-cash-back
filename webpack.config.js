var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.png$/,
                loader: "url-loader",
                options: {
                    limit: 100000
                }
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    mimetype: "application/font-woff"
                }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    mimetype: "application/octet-stream"
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "svg-inline-loader",
                options: {
                    limit: 10000,
                    mimetype: "mimetype=image/svg+xml"
                }
            },
            // {
            //     test: /\.jsx$/,
            //     exclude: /(node_modules|bower_components)/,
            //     loader: "babel-loader",
            //     query: {
            //         options: {
            //             presets: [
            //                 'react',
            //                 ['es2015', {modules: false}],
            //                 'stage-0',
            //                 "env"
            //             ],
            //         }
            //     }
            // }
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'react',
                            ['es2015', {modules: false}],
                            'stage-0',
                            "env"
                        ],
                    }
                }],
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map'
};