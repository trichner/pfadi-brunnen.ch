let gulp = require('gulp');
let webpack = require('webpack');
let webpackStream = require('webpack-stream');
let conf = require('./conf');
let _ = require('lodash');

// Extends the config provided in conf.js
let webpackConf = _.extend({
	devtool: 'source-map'
}, conf.webpack);

// packs all javascript files into one and puts them in the dist folder
gulp.task('webpack', () => {
	return gulp.src('src/index.js')
		.pipe(webpackStream(webpackConf, webpack))
		.pipe(gulp.dest(conf.paths.dist));
});