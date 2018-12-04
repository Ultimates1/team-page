const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
	mode: 'development',
	plugins: [],
	devServer: {
		contentBase: '../',
		open: true,
		openPage: 'The_Ultimates/www/index.html'
	}
});
