module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/styles',
                    src: ['*.scss'],
                    dest: 'app/css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            options: {
                cwd: 'app/',
                livereload: true
            },

            html: {
                files: ['**/*.html']
            },
            images: {
                files: [
                    '**/*.jpg',
                    '**/*.jpeg',
                    '**/*.png',
                    '**/*.gif'
                ]
            },
            scripts: {
                files: ['**/*.js']
                //tasks: ['jshint', 'uglify'],
            },
            styles: {
                files: ['**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build', 'watch']);
};