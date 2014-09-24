var gulp = require('gulp');
var browserSync = require('browser-sync');

var paths = {
  src: {
    css: 'src/**/*.css',
    fonts: 'src/fonts/**/*.*',
    img: 'src/img/**/*.*',
    js: 'src/**/*.js',
    html: 'src/index.html'
  },
  build: {
    css: 'build/**/*.css',
    js: 'build/**/*.js'
  }
};

// Static server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    port: 4321
  });
});

gulp.task('images', function() {
  var imagemin = require('gulp-imagemin');
  var pngcrush = require('imagemin-pngcrush');
  return gulp.src(paths.src.img)
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngcrush()]
  }))
  .pipe(gulp.dest('build/img'));
});

gulp.task('css', function() {
  return gulp.src(paths.src.css)
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('fonts', function() {
  return gulp.src(paths.src.fonts)
    .pipe(gulp.dest('build/fonts'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('js', function() {
  var uglify = require('gulp-uglify');

  return gulp.src(paths.src.js)
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('index', function() {
  var inject = require('gulp-inject');
  var target = gulp.src('./src/index.html');
  var sources = gulp.src([paths.build.js, paths.build.css], {
    read: false
  });

  return target.pipe(inject(sources, {
    addRootSlash: false
  }))
  .pipe(gulp.dest('.'));
});

gulp.task('lint', function() {
  gulp.src([
    'index.js',
    'gulpfile.js',
    'test/**/*.js'
  ])
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('default'))
  .pipe(jshint.reporter('fail'));
});

gulp.task('default', ['images', 'js', 'css', 'fonts', 'index', 'browser-sync'], function() {
  gulp.watch(paths.src.html, ['index', browserSync.reload]);
  gulp.watch(paths.src.css, ['css']);
  gulp.watch(paths.src.fonts, ['fonts', browserSync.reload]);
  gulp.watch(paths.src.js, ['js', browserSync.reload]);
  gulp.watch(paths.src.img, ['images', browserSync.reload]);
});
