const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const port = process.env.PORT || 3000;

module.exports = {
	mode: 'development',

	entry: {
		index: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	resolve: {
		alias: {
			Assets: path.resolve(__dirname, 'assets')
		}
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			// Images
			{
				test: /\.(png|svg|jpg|jpeg|gif|mp4|pdf)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			},
			// PDF
			// {
				// test: /\.(pdf)$/,
			// }
			// Babel Loader
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			// Specifically for css
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			// favicon: 'public/assets/images/'
		}),
		new Dotenv()
	],

	devServer: {
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		open: true
	}
};
