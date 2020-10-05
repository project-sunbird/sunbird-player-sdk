const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
 
gulp.task('default', function () {
    return gulp.src('./projects/sunbird-player-sdk/src/lib/assets/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./projects/sunbird-player-sdk/src/lib/assets'));
});