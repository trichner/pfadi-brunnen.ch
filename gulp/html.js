'use strict';

let path = require('path');
let gulp = require('gulp');
let conf = require('./conf');

let $ = require('gulp-load-plugins')();

gulp.task('html', () => {
  return gulp.src(path.join(conf.paths.src, '**/*.html'))
    .pipe(gulp.dest(conf.paths.dist));
});