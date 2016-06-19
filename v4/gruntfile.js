/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! Calculator */'
    },
    uglify: {
        basic: {
            src: 'main.js',
            dest: 'main.min.js'
        }
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
    watch: {
      files: ['*.less', 'grunt.js', 'main.js'],
      tasks: 'default'
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'uglify']);
  grunt.registerTask('watch_task', ['less', 'uglify', 'watch']);

};
