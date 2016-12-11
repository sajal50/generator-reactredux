var webpack = require('webpack');
var production = process.env.NODE_ENV === 'production';

var plugins = [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('dev')
		}
	})
];

if (production) {

	plugins = [

		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name:      'main',
			children:  true,
			minChunks: 2
		}),

		new webpack.optimize.UglifyJsPlugin({
			mangle:   true,
			compress: {
				warnings: false
			}
		})

	];
}


var entry = [

	'webpack-dev-server/client?http://localhost:8080',


	'webpack/hot/only-dev-server',

	'./app/app.js'
];


if (production) {

	entry = ['babel-polyfill', './app/app.js'];
}


var output = {

	filename : 'public/bundle.js',
	'publicPath': '/'
};

if (production) {
	output =  {

		filename : 'bundle.js',
		path : __dirname + '/public',
		publicPath: './'
	};
}

module.exports = {
	entry: entry ,
	'output' : output ,
	devtool:  production ? false : 'eval',
	module : {
		loaders : [

			{

				test : /\.jsx?$/,
				exclude : /(node_modules|bower_components)/,
				loaders : ['babel?presets[]=es2015,presets[]=react,presets[]=stage-2']

			},
			{
				test: /\.scss$/,
				loaders: ['style?sourceMap',
					'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
					'resolve-url',
					'sass?sourceMap']
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
		]

	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	plugins: plugins
};
