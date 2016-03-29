'use strict';

const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const gulp = require('gulp');
const header = require('gulp-header');
const sass = require('gulp-sass');
const sync = require('browser-sync').create();

// Server

gulp.task('default', ['styles'], () => {
	sync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: '.'
		}
	});

	gulp.watch('styles/**/*.scss', ['styles']);
	gulp.watch('index.html').on('change', sync.reload);
});

// Styles

gulp.task('styles', () => {
	return gulp.src('styles/screen-*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(csso())
		.pipe(gulp.dest('styles'))
		.pipe(sync.stream());
});
