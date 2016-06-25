/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! Calculator */'
    },
    less: {
      production: {
        options: {
          paths: ["less"],
          yuicompress: true
          },
        files: {
          "styles.css": "styles.less"
        }
      }
    },
    concat: {
      basic: {
        src: ['scripts/main.js', 'scripts/keys.js'],
        dest: 'app.js'
      },
    },
    uglify: {
      basic: {
        src: '<%= concat.basic.dest %>',
        dest: 'app.min.js'
      }
    },
    watch: {
      files: ['*.less', 'grunt.js', 'scripts/*.js'],
      tasks: 'default'
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'concat', 'uglify']);
  grunt.registerTask('watch_task', ['less', 'concat', 'uglify', 'watch']);

};
