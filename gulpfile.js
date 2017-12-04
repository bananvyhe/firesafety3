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
var flexbox = require('postcss-flexbox');
var babel = require("gulp-babel");
var cssnext = require('postcss-cssnext');

var fonts = require('postcss-font-magician')({
  custom: {
    'Saira': {
      variants: {
        bold: {
           700: {
              url: {
                 woff2: 'fonts/Saira-Bold.woff2'
              }
           }
        }
      }
    },
 
    'PTSansNar': {
      variants: {
        regular: {
           400: {
              url: {
                 woff2: 'fonts/PT_Sans-Narrow-Web-Regular.woff2'
              }
           }
        },
        bold: {
           700: {
              url: {
                 woff2: 'fonts/PT_Sans-Narrow-Web-Bold.woff2'
              }
           }
        }
      }
    },
    'UbuntuR': {
      variants: {
        normal: {
           400: {
              url: {
                 woff2: 'fonts/Ubuntu-Regular.woff2'
              }
           }
        }
      }
    },
    'RobotoCon': {
      variants: {
        light: {
           300: {
              url: {
                 woff2: 'fonts/RobotoCondensed-Light.woff2'
              }
           }
        },
        regular: {
           400: {
              url: {
                 woff2: 'fonts/RobotoCondensed-Regular.woff2'
              }
           }
        },
        bold: {
           700: {
              url: {
                 woff2: 'fonts/RobotoCondensed-Bold.woff2'
              }
           }
        }
      }
    },

    'PriborR': {
      variants: {
        normal: {
          400: {
            url: {
               woff: 'fonts/Pribor-Regular.woff'
            }
          }
        }
      }
    },
    
    'OpenSansRB': {
      variants: {
        light: {
           300: {
              url: {
                 woff2: 'fonts/OpenSans-Light.woff2'
              }
           }
        },
        regular: {
           400: {
              url: {
                 woff2: 'fonts/OpenSans-Regular.woff2'
              }
           }
        },
        semibold: {
          600: {
            url: {
               woff2: 'fonts/OpenSans-SemiBold.woff2'
            }
          }
           
        },
        bold: {
          700: {
            url: {
               woff2: 'fonts/OpenSans-Bold.woff2'
            }
          }
        }
      }
    },
    'RobotoR': {
      variants: {
        normal: {
           400: {
              url: {
                 woff2: 'fonts/Roboto-Regular.woff2'
              }
           }
        },
        bold: {
          700: {
            url: {
               woff2: 'fonts/Roboto-Bold.woff2'
            }
          }
        }
      }
    },
    'OswaldL': {
      variants: {
        regular: {
          400: {
            url: {
               woff2: 'fonts/Oswald-Regular.woff2'
            }
          }
        },
        light: {
          300: {
            url: {
               woff2: 'fonts/Oswald-Light.woff2'
            }
          }
        },
        ExtraLight: {
          200: {
            url: {
               woff2: 'fonts/Oswald-ExtraLight.woff2'
            }
          }
        }
        
      }
    }
  }
});

var ttf2woff2 = require('gulp-ttf2woff2');
var concat = require("gulp-concat");
var streamqueue  = require('streamqueue');
var svg  = require('postcss-inline-svg');

var path = {
  watch: {// за чем следить
    js: 'src/js/**/*.js',
    styles: 'src/scss/**/*.scss'
  },
  src: {// что брать
    styles: 'src/scss/main.scss',
    js: 'src/js/app.js'
  },
  build: {// куда складывать
    js: 'build/js/',
    styles: 'build/css/'
  }
};

gulp.task('scripts', function() {

  return streamqueue({ objectMode: true },
    gulp.src("src/js/app.js").pipe(babel()),
    gulp.src("src/js/anotherscripts.js")
  )
  .pipe(sourcemaps.init())
  .pipe(concat("app.js")) 
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(path.build.js));
});


gulp.task('css', function () {
  var plugins = [

    assets({
      loadPaths: ['app/assets/images/']
    }),

    precss({
      "lookup": false
    }),

    flexbox,
    postutil,
     
    svg(), 
        cssnext({features: {"rem": false}}), 
    hamster(),
    lost(),
    fonts

  ];

  return streamqueue({ objectMode: true },
      gulp.src('app/assets/stylesheets/postcss/application.css'),
      gulp.src('app/assets/stylesheets/postcss/head.css'),
      gulp.src('app/assets/stylesheets/postcss/headmenu.css')
    )
   .pipe(sourcemaps.init())
   .pipe(concat("application.css")) 
   .pipe(postcssgulp(plugins))
   .pipe(sourcemaps.write('.'))
   .pipe(gulp.dest('app/assets/stylesheets'))
   .pipe(livereload());
});

gulp.task('html', function () {
   return gulp.src('app/views/**/*.html.erb')
    .pipe(gulp.dest(''))
    .pipe(livereload());
});



// gulp.task('js', function () {
//    return gulp.src('app/assets/javascripts/application.js')
//     .pipe(gulp.dest(''))
//     .pipe(livereload());
// });

gulp.task('browreload', function () {
   return gulp.src('app/assets/javascripts/application.js')
    .pipe(livereload());
});

gulp.task('ttf2woff2', function(){
  gulp.src(['app/assets/stylesheets/fonts/*.ttf'])
    .pipe(ttf2woff2())
    .pipe(gulp.dest('app/assets/stylesheets/fonts/'));
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('app/assets/stylesheets/postcss/*.css', ['css']);
  gulp.watch('app/views/**/*.html.erb', ['html']);
  gulp.watch('app/assets/javascripts/application.js', ['browreload']); 
  //gulp.watch('app/assets/src/**/*.js', ['js']);
  gulp.watch('app/assets/stylesheets/fonts/*.ttf', ['ttf2woff2']); 

  gulp.watch(path.watch.js, ['scripts']);

});

gulp.task('default', ['watch']);

