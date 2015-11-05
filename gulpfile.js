var gulp = require('gulp'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee'),
    gutil = require('gulp-util');


gulp.task('css', function () {
  gulp.src('./css/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./css/src/*.scss', ['css']);
  gulp.watch('./js/src/*.coffee', ['js']);
});

gulp.task('js', function() {
  gulp.src('./js/src/*.coffee')
    .pipe(coffee().on('error', gutil.log))
    .pipe(gulp.dest('./js/'))
});

gulp.task('default', ['css', 'js', 'watch']);