var gulp = require("gulp"),
  handlebars = require("gulp-compile-handlebars"),
  replace = require("gulp-replace"),
  rename = require("gulp-rename"),
  jshint = require("gulp-jshint"),
  stylish = require("jshint-stylish"),
  rjs = require("gulp-requirejs"),
  minifyCss = require("gulp-minify-css"),
  uglify = require("gulp-uglify"),
  copy = require("gulp-copy"),
  shell = require("gulp-shell"),
  del = require("del");

var helpers = require("./bin/helpers");

gulp.task("clean", function (cb) {
  del(["dist"], cb);
});

gulp.task("jshint", function () {
  return gulp.src("dev/js/**/*.js").pipe(jshint()).pipe(jshint.reporter(stylish));
});

gulp.task("css", ["clean"], function () {
  return gulp
    .src("dev/css/**/*.css")
    .pipe(minifyCss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("img", ["clean"], function () {
  return gulp.src("dev/img/**").pipe(copy("dist", {prefix: 1}));
});

gulp.task("html", ["clean"], function () {
  gulp
    .src("dev/**/*.hbs")
    .pipe(handlebars(null, {helpers: helpers("production")}))
    .pipe(
      rename(function (path) {
        path.extname = ".html";
      }),
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("js", ["js:index"]);

gulp.task("js:index", ["clean"], function () {
  rjs({
    mainConfigFile: "dev/js/require-config.js",
    baseUrl: "dev/js",
    name: "../libs/almond/almond",
    include: "app/index/main",
    out: "js/index.min.js",
  })
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

gulp.task("default", ["build"]);
gulp.task("build", ["jshint", "css", "js", "img", "html"]);
gulp.task("server", shell.task(["node bin/app"]));
