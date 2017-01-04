'use strict';

let path = require('path');
let gulp = require('gulp');
let conf = require('./conf');

let $ = require('gulp-load-plugins')();

// Injects the proper script tags into html pages
gulp.task('inject', ['html', 'webpack'], () => {
    // It's not necessary to read the files, we're only after their paths: 
    var sources = gulp.src(['./dist/**/*.js'], {
        read: false
    });

    return gulp.src('./dist/**/*.html')
        .pipe($.inject(sources, {
            relative: true
        }))
        .pipe(gulp.dest('./dist'));
});