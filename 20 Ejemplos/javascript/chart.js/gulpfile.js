let gulp = require("gulp");
let browserify = require("browserify");
let source = require('vinyl-source-stream');
let watchify = require("watchify");
let tsify = require("tsify");
let gutil = require("gulp-util");
let es = require('event-stream');
let mocha = require("gulp-mocha");

let paths = {
    pages: ['pages/*.html'],
    images: ['images/*.png'],
    styles: ['css/*.css'],
    libs: ['node_modules/chart.js/dist/Chart.bundle.min.js'],
    data: ['data/coindata.js']
};


function bundle() {
    return browserify({
            basedir: '.',
            debug: true,
            entries: ['ts/CoinHoarder.ts'],
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
    let images = gulp.src(paths.images)
        .pipe(gulp.dest("dist/images"));
    let styles = gulp.src(paths.styles)
        .pipe(gulp.dest("dist/css"));
    let libs = gulp.src(paths.libs)
        .pipe(gulp.dest("dist/lib"));
    let data = gulp.src(paths.data)
        .pipe(gulp.dest("dist/js"));
    es.concat([pages, styles, libs, data, images]);
});

gulp.task('watch', ["copy-html", "bundle", "test"], function (cb) {
    // For now, this rebuilds everything when any of the watched files changes; could definitely be separated when 
    // the project grows
    var watcher = gulp.watch(["ts/**", "test/*.ts", paths.pages, paths.images, paths.styles, paths.libs, paths.data], ['bundle']);
    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    cb();
});

gulp.task('test', function () {
    return gulp.src(['test/header.js', 'test/*.spec.ts'])
        .pipe(mocha({
            reporter: 'min',
            require: ['ts-node/register']
        }));
});

gulp.task("bundle", ["copy-html", "test"], bundle);

gulp.task("default", ["copy-html", "bundle"]);