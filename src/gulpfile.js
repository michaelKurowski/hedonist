const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const babel = require('gulp-babel')


//transpile JSX to JS
gulp.task('babel', () => {
    return gulp.src('./publicDev/**/*.js').
        pipe(babel({
            plugins: ['transform-react-jsx']
        })).
        pipe(gulp.dest('./public/'))
})