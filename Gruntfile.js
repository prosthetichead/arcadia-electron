module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
           folder: 'app/',
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*'],
                    dest: 'app/'
                }]
            }
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['react','es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "src/",
                    src: ["**/*.js"],
                    dest: "app/",
                    ext: ".js"
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask("default", ["clean", "copy", "babel"]);
}