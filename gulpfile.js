var gulp = require('gulp'),
sourcemaps = require('gulp-sourcemaps'),
babel = require('gulp-babel'),
concat = require('gulp-concat'),
nodemon = require('gulp-nodemon'),
sass = require('gulp-sass');

var JS_SOURCE_DIR = 'public/es6/**/*.es6',
	HTML_SOURCE_DIR = 'public/*.html',
	SASS_SOURCE_DIR = 'public/sass/**/*.scss';

gulp.task('sass', function () {
  gulp.src(SASS_SOURCE_DIR)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('babel', function() {
	return gulp.src(JS_SOURCE_DIR)
	.pipe(sourcemaps.init())
	.pipe(babel())
	.pipe(concat('all.js'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
  return gulp
    .src(HTML_SOURCE_DIR)
    .pipe(gulp.dest('dist'))
})

gulp.task('start', function () {
	nodemon({
		script: 'server.js', 
		ext: 'js html', 
		env: { 'NODE_ENV': 'development' }
	})
});

gulp.task('watch', function() {
  gulp.watch([JS_SOURCE_DIR, HTML_SOURCE_DIR, SASS_SOURCE_DIR], ['babel', 'sass', 'copy']);
});

gulp.task('default', ['babel', 'copy', 'sass', 'start']);
gulp.task('build', ['babel', 'copy', 'sass', 'watch']);