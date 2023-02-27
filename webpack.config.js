const path = require("path");
const webpack = require("webpack");
const htmlwebpackplugin = require("html-webpack-plugin");



module.exports = {
    mode: "development",
    entry: "./src/cliente/js/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename:"bundle.js"
    },
    module: {
        rules: [
            {
            test:/\.css$/,
            use:['style-loader', 'css-loader']
            }
        ]
    },
    plugin:[
        new htmlwebpackplugin({
            template:"./src/cliente/index.html"
        })
    ]
};