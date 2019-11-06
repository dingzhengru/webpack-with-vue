const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

var path = require('path');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const host = 'localhost';
const port = 5000;

// 告訴 express 使用 webpack-dev-middleware，
// 以及將 webpack.config.js 作為基礎設置
if(config.mode == 'development') {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));
} else {
    // production
    app.use(express.static(path.resolve(__dirname, 'dist')));
}

app.listen(port, function () {
    console.log(host, port);
});