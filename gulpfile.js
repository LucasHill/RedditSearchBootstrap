var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon')

gulp.task('start', function () {
  nodemon({
    script: 'server.js', 
    ext: 'js html', 
    env: { 'NODE_ENV': 'development' }
  })
})
 
gulp.task('default', function () {
    return gulp.src('es6/**/*.es6')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});