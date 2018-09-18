var gulp = require('gulp'), connect = require('gulp-connect');
gulp.task('watch', function () {
    gulp.watch('./junping/**/*.*', ['html', 'css', 'js']);
});
gulp.task('connect', function () {
    connect.server({
        // root:'./',
        // ip:'192.168.31.110',
        port: "3445",
        livereload: true
    })
});
gulp.task('html', function () {
    gulp.src(['./junping/form/*.html',"./junping/*.html"])
        .pipe(connect.reload());
});
gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(connect.reload());
});
gulp.task('js', function () {
    gulp.src('./js/*.js')
        .pipe(connect.reload());
});
gulp.task('default', ['connect', 'watch']);