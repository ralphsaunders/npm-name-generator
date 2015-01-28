// THEME RELATED GULP TASKS
var gulp = require('gulp'),
    nib = require('nib'),
    stylus = require('gulp-stylus');

gulp.task('css', function() {
    return gulp.src('./assets/src/styles/*.styl')
        .pipe(stylus({
            compress: true,
            use: nib()
        }))
        .pipe(gulp.dest('./assets/dist/styles/'))
});

gulp.task('css-regen', function() {
    gulp.watch('./assets/src/styles/*.styl', ['css'])
});
