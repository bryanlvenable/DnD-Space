var gulp = require('gulp');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var jshint = require('gulp-jshint');
var liveReload = require('gulp-livereload');


gulp.task('default', ['watch']);

gulp.task('index', function () {
  var target = gulp.src('./client/index.html');
  var sources = gulp.src([
    './client/app/**/*.js',
    './client/app/**/*.css',
    './client/bower_components/**/*.min.js'])
    .pipe(angularFilesort());

  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./client'));
});

gulp.task('jshint', function () {
  return gulp.src('./client/app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('reload', function () {
  return gulp.src('./client/index.html')
    .pipe(liveReload());
})

gulp.task('watch', function () {
  liveReload.listen();
  gulp.watch('./client/app/**/*.js', ['reload']);
});