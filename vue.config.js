/* eslint-disable no-tabs */
/* eslint-disable indent */
module.exports = {
	configureWebpack: {
		// default source maps don't seem to work correctly
		devtool: 'eval-source-map'
	},
	transpileDependencies: [ 'vuex-persist' ]
};
