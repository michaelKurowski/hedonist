const gulp = require('gulp')
const sass = require('gulp-sass')
//const babel = require('gulp-babel')
const browserify = require('browserify')
const uglify = require('gulp-uglify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
var babel      = require('babelify');

var conf = {
  // JavaScript
  appName:  'app.jsx',
  srcJs:    './js',
  destName: 'app.js',
  destJs:   './build',

  // SASS
  srcSass:  './sass',
  destSass: './css'
};


gulp.task('html', () => {
    return gulp.src('./publicDev/index.html')
    .pipe(gulp.dest('./public/'))
        .on('error', function (err) {console.log(err);this.emit('end')})
})

gulp.task('js', function(){
    return browserify('./publicDev/index.js', {debug: true})
    .transform(babel.configure({ presets: ['es2015', 'react'] }))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/'))
})

gulp.task('sass', function () {
  return gulp.src('./publicDev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/style/'))
        .on('error', function (err) {console.log(err);this.emit('end')})
})

gulp.task('watchCSS', () => gulp.watch('./publicDev/**/*.scss', ['sass']))

gulp.task('watchJS', () => gulp.watch('./publicDev/**/*.js', ['js']))

gulp.task('watchHTML', () => gulp.watch('./publicDev/index.html', ['html']))

gulp.task('default', () => gulp.start(['watchHTML', 'watchCSS', 'watchJS']));