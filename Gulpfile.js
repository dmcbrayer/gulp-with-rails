var gulp            = require('gulp');
var minifyCss       = require('gulp-minify-css');
var notify          = require("gulp-notify") ;
var browserify      = require('browserify');
var babelify        = require('babelify');
var source          = require('vinyl-source-stream');
var sass            = require('gulp-ruby-sass') ;
var browserSync     = require('browser-sync');
var imagemin        = require('gulp-imagemin');
var cache           = require('gulp-cache');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');

var config          = require('./gulp-config');


gulp.task('css', function() { 
    return sass(config.src.sassFile, {
             style: 'compressed',
             loadPath: [
                 config.src.sass,
             ],
            compass: true
         }) 
        .pipe(minifyCss())
         .pipe(gulp.dest(config.dest.sass))
        .pipe(browserSync.stream()); 
});

gulp.task('scripts', function() {
  return gulp.src(config.src.scripts)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest.scripts));
});

gulp.task('react', function() {
  return browserify({entries: config.src.reactSrc, extensions: ['.jsx'], debug: true})
      .transform('babelify', {presets: ['es2015', 'react']})
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(config.dest.scripts));
});

gulp.task('images', function() {
  return gulp.src(config.src.images)
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(config.dest.images));
});

gulp.task('build', ['images', 'react','scripts','css']);
/* gulp.task('serve', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: "./_site"
        }
    });

    // Start a watch for rebuilds
    gulp.watch(config.watchAssetFiles, ['jekyll-rebuild']);
    gulp.watch(config.watchHtmlFiles, ['jekyll-rebuild']);
}); */


gulp.task('default', ['build']);