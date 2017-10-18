const gulp = require('gulp');

const browserSync = require('browser-sync');
const reload = browserSync.reload;

var pkgConfig = require('./package.json');

/**
 * Static server
 */
gulp.task('browser-sync', function () {
    browserSync.notify('BS');
    browserSync.init({
        server: {
            baseDir: './',
            browser: ["google chrome", "firefox"],
            httpModule: 'http2',
            https: true,
            reloadOnRestart: false,
            logConnections: true,
            notify: true
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(['*.html', '*/*.html', 'css/*.css', '*.js', 'img/*.png'], {
            ignored: 'gulpfile.js'
        }).on('change', reload);
});

gulp.task('default', ['browser-sync', 'watch']);