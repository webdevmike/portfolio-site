module.exports = function (grunt) {
  // All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      dist: {
        options: {
          style: "compressed",
          sourcemap: "none",
          noCache: true,
        },
        files: {
          "assets/css/core.css": "scss/core.scss",
        },
      },
    },
    watch: {
      css: {
        files: ["scss/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask("default", ["sass", "watch"]);
};
