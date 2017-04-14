module.exports = function(grunt) {

  grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),

//css min
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },

//concat
    concat_css: {
        options: {
          // Task-specific options go here.
        },
        all: {
          src: ["/**/*.css"],
          dest: "main.min.css"
        },
      },

//imagemin
      imagemin: {
      static: {                          // Target
      options: {                       // Target options
        optimizationLevel: 3,
        svgoPlugins: [{ removeViewBox: false }],
        }
      },
          dynamic: {
              files: [{
                  expand: true,
                  cwd: 'images/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'imagesFinal/'
              }]
          }
      },

//concat JS
    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: [ 'js/jquery.js', 'js/anima_header.js', 'js/jquery.flexslider.js', 'js/jquery.slicknav.min.js', 'js/stellar.js','js/toucheffect.js', 'js/wow.min.js','js/jquery.fancybox.pack.js', 'js/all.js'],
          dest: 'js/built.js',
        },
      },

// Project configuration.

  uglify: {
    my_target: {
      files: {
        'js/built.js': ['js/jquery.js', 'js/anima_header.js', 'js/jquery.flexslider.js', 'js/jquery.slicknav.min.js', 'js/stellar.js','js/toucheffect.js', 'js/wow.min.js','js/jquery.fancybox.pack.js', 'js/all.js']
      }
    }
  }







});

//Load the plugin

grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-concat-css');
grunt.loadNpmTasks('grunt-contrib-uglify');

//grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

grunt.registerTask('default', ['cssmin']);
grunt.registerTask('default', ['imagemin']);
grunt.registerTask('default', ['concat']);

};
