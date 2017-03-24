//npm install webpack
var webpack = require("webpack");
module.exports = {
	devtool: 'source-map',
	entry: __dirname + '/main.js',
	output:{
		path:__dirname + '/public',
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test:/\.html$/,
				loader:'html-loader'
			},
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.less$/,
				loader:'less-loader'
			}
		]
	},
	resolve:{
		alias:{
			vue:'vue/dist/vue.js'
		}
	},
	devServer:{
		contentBase:"./public",
		inline:true,
		port:23232
	}
}