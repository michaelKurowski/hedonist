const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')

gulp.task('babel', () => {
    return gulp.src('./publicDev/js/**/*.js')
        //.pipe(eslint())
        .pipe(eslint.format())
       // .pipe(eslint.failAfterError())
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('./public/js/'))
        .on('error', function (err) {console.log(err);this.emit('end')})
})
gulp.task('html', () => {
    return gulp.src('./publicDev/index.html').
    pipe(gulp.dest('./public/'))
        .on('error', function (err) {console.log(err);this.emit('end')})
})

gulp.task('sass', function () {
  return gulp.src('./publicDev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../public/css'))
        .on('error', function (err) {console.log(err);this.emit('end')})
})

gulp.task('watchCSS', () => gulp.watch('./publicDev/**/*.scss', ['sass']))

gulp.task('watchJS', () => gulp.watch('./publicDev/js/**/*.js', ['babel']))

gulp.task('watchHTML', () => gulp.watch('./publicDev/index.html', ['html']))

gulp.task('default', () => gulp.start(['watchHTML', 'watchJS', 'watchCSS']));