module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      'dist/all.js': ['src/*.js']
    },
    uglify: {
      'dist/all.min.js': ['dist/all.js']
    },
    jshint: {
      files: ['gruntfile.js', 'src/*.js']
    },
    watch: {
      files: ['gruntfile.js', 'src/*.js'],
      tasks: ['jshint', 'concat', 'uglify']
    }
  });

  // Load Our Plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Default Task
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
