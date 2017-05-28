const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint');


gulp.task('html', () => {
    return gulp.src('./publicDev/index.html').
    pipe(gulp.dest('./public/'))
})

gulp.task('default', () => gulp.start('html'));