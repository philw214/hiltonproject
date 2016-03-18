var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var input = './scss/**/*.scss';
var output = './css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

gulp.task('serve', ['sass'], function() {

  browserSync.init({
      proxy: "hilton.loc"
  });

  gulp.watch(input, ['sass']);
  gulp.watch('./index.html').on('change', browserSync.reload);
});


gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);
