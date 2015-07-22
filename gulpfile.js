var gulp = require('gulp');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');


// gulp.task('default', function () {
//   // Place code for default task here
// });

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