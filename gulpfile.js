// Importing the dependencies.
const
    gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');

// CSS compiler.
gulp.task('css', function () {
    const processors = [
        autoprefixer,
        cssnano
    ];

    return gulp.src('./src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/assets/css'));
});
