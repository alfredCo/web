'use strict'

let gulp = require('gulp'),
  rename = require('gulp-rename'),
	del = require('del')

gulp.task('move', cb => {
	gulp.src('./src/favicon.ico')
		.pipe(gulp.dest('./built'));

  gulp.src(['./src/**/*.html'])
    .pipe(gulp.dest('./built'));

  gulp.src('./src/plugin/**/*.*')
    .pipe(gulp.dest('./built/plugin'));
    
  gulp.src(['./src/images/content/*.*'])
    .pipe(gulp.dest('./built/images/content/'))
})


gulp.task('default', ['move'])

