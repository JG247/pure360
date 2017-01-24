var gulp = require('gulp');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');


gulp.task('default', function() {
    gulp.watch('main.less', ['less']);  // Watch all the .less files, then run the less task
});
 
gulp.task('less', function () {
    return gulp.src('main.less')
        .pipe(watchLess('main.less'))
        .pipe(less())
        .pipe(gulp.dest('css'));
});