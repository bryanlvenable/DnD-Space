var gulp = require('gulp'),
    inject = require('gulp-inject'),
    angularFilesort = require('gulp-angular-filesort');


gulp.task('default', function () {
  // Place code for default task here
});

gulp.task('index', function () {
  var target = gulp.src('./client/index.html');
  var sources = gulp.src([
    './client/app/**/*.js',
    './client/app/**/*.css',
    './client/bower_components/**/*.min.js'])
    .pipe(angularFilesort());

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./client'));
})