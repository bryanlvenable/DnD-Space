var gulp = require('gulp');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var jshint = require('gulp-jshint');
var liveReload = require('gulp-livereload');


gulp.task('default', ['watch']);

gulp.task('inject', function () {
  var target = gulp.src('./client/index.html');
  var sources = gulp.src([
    './client/dnd/**/*.js',
    './client/dnd/**/*.css',
    './client/assets/**/*.js',
    './client/bower_components/**/*.min.js']);

  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./client'));
});

gulp.task('jshint', function () {
  return gulp.src('./client/dnd/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('reload', function () {
  return gulp.src('./client/index.html')
    .pipe(liveReload());
})

gulp.task('watch', function () {
  liveReload.listen();
  gulp.watch(['./client/dnd/**/*.js', './client/dnd/**/*.css', './client/dnd/**/*.html'], ['jshint', 'reload']);
});