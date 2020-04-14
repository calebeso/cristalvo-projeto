'use strict';

var gulp = require('gulp'); 
var sass = require ('gulp-sass'); 


//Gulp sass
gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

//Gulp watch
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', gulp.series('sass'));
});


//Gulp default
gulp.task('default', gulp.series('sass','watch'));