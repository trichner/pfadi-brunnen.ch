'use strict';

let path = require('path');
let gulp = require('gulp');
let conf = require('./conf');

let $ = require('gulp-load-plugins')();

// clears the entire dist folder
gulp.task('clean', () => {
	return gulp.src(path.join(conf.paths.dist, '/*'))
		.pipe($.rimraf());
});