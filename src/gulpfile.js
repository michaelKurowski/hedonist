const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const babel = require('gulp-babel')

gulp.task('babel'), () => {
    return gulp.src('./publicDev/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./public'));
}

gulp.task('html', () => {
    return gulp.src('./publicDev/index.html').
    pipe(gulp.dest('./public/'))
})
gulp.task('watchHTML', () => gulp.watch('./publicDev/index.html', ['html']))

gulp.task('default', () => gulp.start('watchHTML'));