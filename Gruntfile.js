/*
 * grunt-jstestdriver-phantomjs
 * https://github.com/tolu/grunt-jstestdriver-phantomjs
 *
 * Copyright (c) 2013 Tobias Lundin
 * Licensed under the MIT license.
 */
'use strict';
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jstdPhantom: {
            options: {
                canFail: true
            },
            files: ["task-test/jsTestDriver_jstd.conf", "task-test/jsTestDriver_jas.conf"]
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'jstdPhantom']);
};
