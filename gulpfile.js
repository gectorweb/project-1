const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sync = require('browser-sync').create();

function html() {
  return src('src/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    // .pipe(htmlmin({
    //   collapseWhitespace: true
    // }))
    .pipe(dest('dist'))
}

function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('style.min.css'))
    .pipe(dest('dist/css'))
}

function js() {
  return src('src/js/**.js')
    .pipe(dest('dist/js'))
}

function img() {
  return src('src/images/**/*.*')
    .pipe(dest('dist/images'))
}
function fonts() {
  return src('src/fonts/**/*.*')
    .pipe(dest('dist/fonts'))
}

function clear() {
  return del('dist')
}

function serve() {
  sync.init({
    server: './dist'
  });

  watch('src/**.html', series(html)).on('change', sync.reload);
  watch('src/scss/**.scss', series(scss)).on('change', sync.reload);
  watch('src/js/**.js', series(js)).on('change', sync.reload);
}

exports.build = series(clear, scss, html, js, img, fonts);
exports.serve = series(clear, scss, html, js, img, fonts, serve);
exports.clear = clear;