# 中央公園

> Build a park with Vue.js

## Initialize

``` bash
# scaffold a new vue project with vue-cli
vue init webpack [project_name]

# add modules to project
npm install node-sass sass-loader style-loader --save-dev
npm install path/to/watchout-tw/common --save-dev
npm install jquery --save
npm install tether bootstrap@4.0.0-alpha.6 --save
```

## Use JavaScript

``` js
import $ from 'jquery'
window.jQuery = window.$ = $
global.Tether = require('tether')
global.Bootstrap = require('bootstrap')
```

## Use CSS

> with `<style lang="scss">`

``` css
@import '~common/styles/resources';
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
