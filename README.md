# webpack-with-vue(Use webpack bundle vue)

## 參考
vue-loader: https://vue-loader.vuejs.org/zh/guide/

## Install
```npm init```  
```npm install --save-dev webpack webpack-cli```  

## vue-loader & babel-loader & css-loader
```npm install --save-dev vue-loader vue-template-compiler```  
```npm install --save-dev babel-loader @babel/core @babel/preset-env```  
```npm install --save-dev css-loader```  
**webpack.config.js**  
```
const VueLoaderPlugin = require('vue-loader/lib/plugin')

plugins: [new VueLoaderPlugin()]

module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    }

```

## Sass, SCSS
```npm install --save-dev sass-loader node-sass```  
**webpack.comfig.js**  
```
{
    test: /\.scss$/,
    use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
    ]
}
```
**.vue**  
```
<style lang="scss">
/* 在這裡撰寫 SCSS */
</style>
```
**.js**  
```
import 'style.scss'
```

## Babel
**排除node_modules**  
```
{
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: file => (
        /node_modules/.test(file) &&
        !/\.vue\.js/.test(file)
    )
}
```

## server (webpack-dev-middleware & express or webpack-dev-server)
### webpack-dev-middleware & express
```npm install --save-dev webpack-dev-middleware express```  

**webpack.config.js**  
```
output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
},
devServer: {
    contentBase: './dist',
    hot: true
}
```
**server.js**  
```
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 告訴 express 使用 webpack-dev-middleware，
// 以及將 webpack.config.js 作為基礎設置
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});
```
**package.json (set script)**
```sciprt:{ "serve": "node server.js" }```  

**serve**```npm run serve``` or ```node server.js```

## webpack-dev-server
```npm install --save-dev webpack-dev-server```  
webpack.config.js  
```
devServer: {
    contentBase: './dist'
},
```
package.json  
```
"scripts": {
    "start": "webpack-dev-server --open",
}
```
執行```npm start```