'use strict';

let gulp = require('gulp');
let wrench = require('wrench');

/* loads all tasks in ./gulp */
wrench.readdirSyncRecursive('./gulp').filter((file) => {
    return (/\.js$/i).test(file);
}).map((file) => {
    require('./gulp/' + file);
});

/* default task to run */
gulp.task('default', ['inject', 'clean'], () => {
});