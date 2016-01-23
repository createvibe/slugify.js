'use strict';

var matchdep = require('matchdep');

module.exports = function (grunt) {

    var files = [
        {
            src: 'browserify/en.js',
            dest: 'min/slugify.en.min.js'
        }
    ];

    grunt.initConfig({
        browserify: {
            main: {
                files: files,
                options: {
                    browserifyOptions: {
                        debug: false
                    },
                    transform: [
                        ['uglifyify', {global: true}]
                    ]
                }
            },
            dev: {
                files: files,
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        }
    });

    matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['browserify:main']);
    grunt.registerTask('dev', ['browserify:dev']);

};