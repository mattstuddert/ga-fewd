var gulp = require('gulp');

var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
  gulp.src('src/scss/main.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload({ start: true }));
});

gulp.task('watch:css', ['css'], function() {
  gulp.watch('src/scss/**/**.scss', ['css']);
});

gulp.task('dev', ['watch:css']);
