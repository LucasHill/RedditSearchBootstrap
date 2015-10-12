var gulp = require('gulp'),
sourcemaps = require('gulp-sourcemaps'),
babel = require('gulp-babel'),
concat = require('gulp-concat'),
nodemon = require('gulp-nodemon');

var JS_SOURCE_DIR = 'es6/**/*.es6';



gulp.task('babel', function() {
	return gulp.src(JS_SOURCE_DIR)
	.pipe(sourcemaps.init())
	.pipe(babel())
	.pipe(concat('all.js'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['babel', 'start']);

gulp.task('start', function () {
	nodemon({
		script: 'server.js', 
		ext: 'js html', 
		env: { 'NODE_ENV': 'development' }
	})
});

gulp.task('watch', function() {
  gulp.watch(JS_SOURCE_DIR, ['babel']);
});