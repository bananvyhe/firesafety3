var gulp = require('gulp');
var postcssgulp = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var hamster = require('postcss-hamster');
var livereload = require('gulp-livereload');
var lost = require('lost');
var assets  = require('postcss-assets');
var postutil = require('postcss-utilities');
 
gulp.task('css', function () {
  var plugins = [
    assets({
      loadPaths: ['app/assets/images/']
    }),
    precss({
      "lookup": false
    }),
    postutil,
    postcssgulp,
    hamster(),
    lost(),
    autoprefixer({browsers: ["> 0.5%"]})
  ];
  return gulp.src('app/assets/stylesheets/postcss/application.css')
   .pipe(sourcemaps.init())
   .pipe(postcssgulp(plugins))
   .pipe(sourcemaps.write('.'))
   .pipe(gulp.dest('app/assets/stylesheets'))
   .pipe(livereload());
});

gulp.task('html', function () {
   return gulp.src('app/views/indexpage/index.html.erb')
    .pipe(gulp.dest(''))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('app/assets/stylesheets/postcss/application.css', ['css']);
  gulp.watch('app/views/indexpage/index.html.erb', ['html']);
});

gulp.task('default', ['watch']);

