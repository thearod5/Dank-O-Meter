
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './src/client/build');
var APP_DIR = path.resolve(__dirname, './src/client');

module.exports = {
	entry: {
		main: APP_DIR + '/server.js'
	},
	output: {
		filename: 'bundle.js',
		path: BUILD_DIR,
	},
	resolve: {
		extensions: [".js", ".jsx"]	
	},
	module: {
		rules: [
			 {
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: "style-loader"}, 
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			 },
			 {
				test: /\.(jsx|js)?$/,
				loader: "babel-loader",
				exclude: /node_modules/
			 }
		],
  	}
};
