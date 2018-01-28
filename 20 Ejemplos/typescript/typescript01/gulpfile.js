let gulp = require("gulp");
let browserify = require("browserify");
let source = require('vinyl-source-stream');
let watchify = require("watchify");
let tsify = require("tsify");
let gutil = require("gulp-util");
let es = require('event-stream');

let paths = {
    pages: ['pages/*.html'],
    styles: ['css/*.css'],
};

function bundle() {
    return browserify({
            basedir: '.',
            debug: true,
            entries: ['ts/Main.ts'],
            cache: {},
            packageCache: {}
        }).plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist/js"));
}

gulp.task("copy-html", function () {
    let pages = gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
    let styles = gulp.src(paths.styles)
        .pipe(gulp.dest("dist/css"));
    es.concat([pages, styles]);
});

gulp.task('watch', ["copy-html", "bundle"], function (cb) {
    // For now, this rebuilds everything when any of the watched files changes; could definitely be separated when 
    // the project grows
    var watcher = gulp.watch(["ts/**", paths.pages, paths.styles], ['bundle']);
    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    cb();
});

gulp.task("bundle", ["copy-html"], bundle);

gulp.task("default", ["copy-html", "bundle"]);