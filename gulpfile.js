"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var svgstore = require("gulp-svgstore");
var rename = require("gulp-rename");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var webp = require("gulp-webp");
var imagemin = require('gulp-imagemin');
var posthtml = require("gulp-posthtml");
var uglify = require("gulp-uglify");
var include = require("posthtml-include");
var run = require("run-sequence");
var del = require("del");
var htmlmin = require("gulp-htmlmin");
var prettyHtml = require("gulp-pretty-html");
var exec = require("gulp-exec");
var cp = require('child_process');
var browsersync = require('browser-sync');
var exec          = require('child_process').exec,
    /** Utilities */
    gutil         = require('gulp-util');

var config       = require('./_app/gulp/config');

gulp.task("build", function (done) {
  run(
    "clean",
    "images",
    "webp",
    "copy",
    "style",
    // "sprite",
    "htmlmin",
    "compress",
    "jekyll-build",
    done
  );
});

gulp.task("htmlpretty", function () {
    return gulp.src("_app/*.html")
        .pipe(prettyHtml())
        .pipe(gulp.dest(""));
});

gulp.task("style", function () {
  gulp.src("_app/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))

    .pipe(gulp.dest("css"))
    .pipe(gulp.dest("_site/css/"))
    .pipe(gulp.dest("_app/css/"))
    .pipe(minify({
        }))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css"))
    .pipe(gulp.dest("_site/css/"))
    .pipe(gulp.dest("_app/css/"))
    .pipe(server.stream());
});

gulp.task("sprite", function () {
  return gulp.src("_app/img/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("img"));
});

gulp.task("webp", function () {
  return gulp.src("_app/img/**/*.{png,jpg}")
  .pipe(webp({quality: 60}))
  .pipe(gulp.dest("img"));
});

gulp.task("imagemin", function () {
  return gulp.src("_app/img/**/*.{png,jpg}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest("img"));
});

gulp.task("images", function () {
  gulp.src("_app/img/**/*.{png,jpg,svg}")
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 50}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
]))
  .pipe(gulp.dest("img"));
});

gulp.task("html", function () {
  return gulp.src("_includes/*.html")
  .pipe(posthtml([
    include()
  ]))
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("_includes"));
});

gulp.task("compress", function () {
    return gulp.src("_app/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("js"))
    .pipe(gulp.dest("_site/js/"));
});

gulp.task("clean", function () {
  return del(["css", "js", "img", "fonts"]);
});

gulp.task("copy", function () {
  return gulp.src([
    "_app/fonts/**/*.{woff,woff2}",
  ], {
    base: "_app"
  })
  .pipe(gulp.dest(""));
});

var exec = require('child_process').exec;

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('jekyll-build', function (done) {
  browsersync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll.bat', ['build'], {stdio: 'inherit'})
      .on('close', done);
});

gulp.task('build:jekyll:watch', ['jekyll-build'], function(cb) {
  browsersync.reload();
  cb();
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "_app",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("_app/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("_app/*.html").on("change", server.reload);
  gulp.watch('_app/js/**/*.js', ['compress']);
  gulp.watch('_posts/**/*.+(md|markdown|MD)', ['build:jekyll:watch']);
  gulp.watch('_drafts/*.+(md|markdown|MD)', ['build:jekyll:watch']);
  gulp.watch(['**/*.html', '!_site/**/*.*'], ['build:jekyll:watch']);
  gulp.watch('feed.xml', ['build:jekyll:watch']);
  gulp.watch('_data/**.*+(yml|yaml|csv|json)', ['build:jekyll:watch']);
  gulp.watch('favicon.ico', ['build:jekyll:watch']);
});
