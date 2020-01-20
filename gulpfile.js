const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');

function style() {
  // 1. where is my scss file?
  return (
    gulp
      .src('./scss/**/*.scss')
      // 2. pass that file through sass compiler
      .pipe(sass())
      .pipe(cleanCSS({ debug: true }))
      // 3. where to save compiled css?
      .pipe(gulp.dest('./css'))
      // 4. stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
