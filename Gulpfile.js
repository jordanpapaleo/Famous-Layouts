'use strict';

var less        = require('gulp-less'),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    path        = require('path'),
    plumber     = require('gulp-plumber'),
    watch       = require('gulp-watch');

var gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

var EXPRESS_PORT = 4000;

gulp.task('dev:twilli', ['serve:twilli']);

var TWILLI_ROOT = "examples/twilli/";

gulp.task('serve:twilli', ['watch:twilli'], function() {
    var express = require('express');
    var app = express();
    app.use(express.static(TWILLI_ROOT));
    app.listen(EXPRESS_PORT);
    gutil.log('Twilli server: ', gutil.colors.cyan('http://localhost:'+ EXPRESS_PORT +'/'));
});


gulp.task('compile:twilli', function() {
    return gulp.src(TWILLI_ROOT + 'styles/main.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest(TWILLI_ROOT + 'styles/'));
});

gulp.task('watch:twilli', ['compile:twilli'], function() {
    gulp.watch(TWILLI_ROOT + 'styles/main.less', ['compile:twilli']);
});
