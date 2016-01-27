//dependencies
var gulp = require('gulp');
var util = require('gulp-util');
var SystemBuilder = require('systemjs-builder');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');
var tsConfig = require('./tsconfig.json');
var connect = require('gulp-connect');
var rimraf = require('gulp-rimraf');
var sourcemaps = require('gulp-sourcemaps');

//Typescript Config;
var tsProject = ts.createProject(tsConfig.compilerOptions);

//copy dependencies to dist folder
gulp.task('copy:deps', function () {
    gulp.src([
        'node_modules/bootstrap/dist/**'
    ]).pipe(gulp.dest('dist/vendor/bootstrap'));

    gulp.src([
        'node_modules/font-awesome/css/**',
        'node_modules/font-awesome/fonts/**'
    ], {base: 'node_modules/font-awesome'}).pipe(gulp.dest('dist/vendor/font-awesome'))

    gulp.src([
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/http.js',
        'node_modules/angular2/bundles/router.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/systemjs/dist/system.js',
        'node_modules/jquery/dist/jquery.js',
        'node_modules/moment/moment.js'
    ]).pipe(gulp.dest('dist/vendor'));
});

//copy html/css/js files
gulp.task('copy:src', function () {
    return gulp.src([
        'src/bootstrap.js',
        'src/index.html',
        'src/**/*.html',
        'src/**/assets/**/*.*'
    ])
            .pipe(gulp.dest('dist'))
            .pipe(connect.reload());
});

//clean the dist folder
gulp.task('clean', function (cb) {
    rimraf('./dist', cb);
})

//compile app typescript files
gulp.task('compile:app', function () {
    return gulp.src(['src/**/*.ts', 'typings/**/*.d.ts'])
            .pipe(sourcemaps.init())
            .pipe(ts(tsProject))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./dist'))
            .pipe(connect.reload());
});

//live reload server
gulp.task('server', ['copy:deps', 'copy:src', 'compile:app'], function () {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 3000,
        fallback: 'dist/index.html'
    });
});


//default task
gulp.task('default', ['server'], function () {
    gulp.watch(['src/**/*.ts'], ['compile:app']);
    gulp.watch(['src/**/.js', 'src/**/*.html', 'src/**/*.css'], ['copy:src']);
});

//install maven (local)
var maven = require('gulp-maven-deploy');

gulp.task('install', ['copy:deps', 'copy:src', 'compile:app'], function () {
    gulp.src('./dist')
            .pipe(maven.install({
                'config': {
                    'groupId': 'de.gedoplan',
                    'type': 'war'
                }
            }));
});