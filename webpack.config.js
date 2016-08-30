const webpack = require('webpack');

module.exports = {
	devtool:'cheap-module-source-map',
	entry: {
		//Example: "./src/Example.js",
		Signup: "./src/Signup.js"
	},
	output: {
		path: "dist",
		filename: "[name].js",
		libraryTarget: 'umd',
		library: "[name]"
	},
	externals: {
		"react": {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'React',
			root: 'React'
		},
		"react-dom": {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'ReactDOM',
			root: 'ReactDOM'
		}
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: "babel",
				query: {
					presets: ["es2015", "stage-1", "react"]
				}
			}
		]
	},
	plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production'),
          'DISABLE_LINTER': true,
          'DEVTOOLS': false//set it to true in dev mode
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress:{
          warnings: false
        },
        minimize: true
      })
  ],

};