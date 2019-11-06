# webpack-with-vue(Use webpack bundle vue)

## 參考
vue-loader: https://vue-loader.vuejs.org/zh/guide/

## Install
```npm init```  
```npm install --save-dev webpack webpack-cli```  

## vue-loader & babel-loader
```npm install --save-dev vue-loader vue-template-compiler```  
```npm install --save-dev babel-loader @babel/core @babel/preset-env```  
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