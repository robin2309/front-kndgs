const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const defineVars = require('./define');
const alias = require('./alias');

const BABEL_LOADER_PLUGINS = [
  require.resolve('babel-plugin-transform-class-properties'),
  require.resolve('babel-plugin-transform-object-rest-spread'),
  require.resolve('babel-plugin-transform-regenerator'),
  require.resolve('babel-plugin-transform-runtime')
];

const jsLoader = {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
        presets: ['env'],
        plugins: BABEL_LOADER_PLUGINS
    }
};

const jsxLoader = {
    test: /\.jsx$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
        presets: ['env', 'react'],
        plugins: BABEL_LOADER_PLUGINS
    }
};

const cssLoader = {
	test: /\.css$/,
	use: [
		MiniCssExtractPlugin.loader,
		'css-loader'
	]
};

const lessExtractLoader = {
  test: /\.less$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader', 
    'less-loader'
  ]
};

const outputTemplate = {
	path: path.join(__dirname, "../build"),
	filename: "[name].bundle.js"
};

const serverConfig = {
	target: 'node',
	mode: 'production',
	entry: {
		server: './src/server/index.js'
  },
  externals: [nodeExternals()],
	output: outputTemplate,
	module: {
		rules: [
			jsxLoader,
			jsLoader
		]
  },
  plugins: [
    new webpack.DefinePlugin(defineVars.prod.server)
  ],
	resolve: {
		alias,
		extensions: ['.js', '.jsx']
	}
};

const clientConfig = {
	target: 'web',
	mode: 'production',
	entry: {
    client: './src/client/index.js'
	},
	output: outputTemplate,
	module: {
		rules: [
			jsxLoader,
			jsLoader,
			cssLoader,
			lessExtractLoader
		]
	},
	resolve: {
		alias,
		extensions: ['.js', '.jsx', '.css', '.less']
  },
  plugins: [
    new webpack.DefinePlugin(defineVars.prod.client),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
	devtool: 'source-map'
};

module.exports = [serverConfig, clientConfig];
