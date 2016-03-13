(function(){
   'use strict';
    // Generated on 2016-02-17 using generator-egsappgenerator 4.2.3
    'use strict';

    var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

    module.exports = function (grunt) {
        require('load-grunt-tasks')(grunt);
        require('time-grunt')(grunt);

        var $srcFiles ='app/scripts/**/*.js'; //'src/main/javascript/**/*.js';
        var $testFiles = 'test/spec';
        var $outputDir = 'target';
        var $junitResults = $outputDir + '/junit-test-results.xml';
        var $jasmineSpecRunner = $outputDir + '/_SpecRunner.html';
        var $coverageOutputDir = $outputDir + '/coverage';
        var $varProxies=[];

        grunt.initConfig({
            yeoman: {
                // configurable paths
                app: require('./bower.json').appPath || 'app',
                dist: 'www'
            },
            watch: {
                compass: {
                    files: ['scss/**/*.{scss,sass}'],
                    tasks: ['compass:server', 'autoprefixer']
                },
                styles: {
                    files: ['<%= yeoman.app %>/styles/**/*.css'],
                    tasks: ['copy:styles', 'autoprefixer']
                },
                livereload: {
                    options: {
                        livereload: 35729
                    },
                    files: [
                        '<%= yeoman.app %>/views/**/*.html',
                        '<%= yeoman.app %>/**/*.json',
                        '.tmp/styles/**/*.css',
                        '{.tmp/,}<%= yeoman.app %>/scripts/**/*.js',
                        '<%= yeoman.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
                    ]
                }
            },
            autoprefixer: {
                options: ['last 1 version'],
                dist: {
                    files: [{
                        expand: true,
                        cwd: '.tmp/styles/',
                        src: '**/*.css',
                        dest: '.tmp/styles/'
                    }]
                }
            },
            connect: {
                proxies: $varProxies,
                options: {
                    port: 9000,
                    // Change this to 'localhost' to deny access to the server from outside.
                    //hostname: '0.0.0.0',
                    hostname: 'localhost',
                    livereload: 35729
                },
                livereload: {
                    options: {
                        open: true,
                        app:'chrome',
                        base: [
                            '.tmp',
                            '<%= yeoman.app %>',
                            '<%= yeoman.dist %>'
                        ],
                        middleware: function (connect) {
                            return [
                                proxySnippet,
                                connect.static('.tmp'),
                                connect.static('<%= yeoman.app %>'),
                                connect.static('<%= yeoman.dist %>')
                            ];
                        }
                    }
                },
                test: {
                    options: {
                        port: 9001,
                        base: [
                            '.tmp',
                            'test',
                            '<%= yeoman.app %>',
                            '<%= yeoman.dist %>'
                        ]
                    }
                },
                dist: {
                    options: {
                        base: '<%= yeoman.dist %>'
                    }
                }
            },
            clean: {
                dist: {
                    files: [{
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= yeoman.dist %>/*',
                            '!<%= yeoman.dist %>/.git*'
                        ]
                    }]
                },
                server: '.tmp'
            },

            compass: {
                options: {
                    sassDir: 'scss',
                    cssDir: '<%= yeoman.app %>/styles',
                    generatedImagesDir: '.tmp/images/generated',
                    imagesDir: '<%= yeoman.app %>/images',
                    javascriptsDir: '<%= yeoman.app %>/scripts',
                    fontsDir: '<%= yeoman.app %>/styles/fonts',
                    importPath: '<%= yeoman.app %>/bower_components',
                    httpImagesPath: '/images',
                    httpGeneratedImagesPath: '/images/generated',
                    httpFontsPath: '/styles/fonts',
                    relativeAssets: false
                },
                dist: {},
                server: {
                    options: {
                        debugInfo: true
                    }
                }
            },
            // not used since Uglify task does concat,
            // but still available if needed
            /*concat: {
             dist: {}
             },*/
            rev: {
                dist: {
                    files: {
                        src: [
                            '<%=yeoman.dist %>/scripts/**/*.js',
                            '<%=yeoman.dist %>/styles/**/*.css',
                            '<%=yeoman.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
                            '<%=yeoman.dist %>/fonts/**/*.{eot,svg,ttt,woff}'
                        ]
                    }
                }
            },
            useminPrepare: {
                html: ['<%= yeoman.app %>/index.html','<%= yeoman.app %>/views/**/*.html'],
                options: {
                    dest: '<%= yeoman.dist %>'
                }
            },
            usemin: {
                html: ['<%= yeoman.dist %>/**/*.html'],
                css: ['<%= yeoman.dist %>/styles/**/*.css'],
                options: {
                    assetsDirs: ['<%= yeoman.dist %>/**/'],
                    dirs: ['<%= yeoman.dist %>']
                }
            },
            imagemin: {
                dist: {
                    files: [{
                        expand: true,
                        cwd: '<%= yeoman.app %>/images',
                        src: '**/*.{jpg,jpeg}', // we don't optimize PNG files as it doesn't work on Linux. If you are not on Linux, feel free to use '{,*/}*.{png,jpg,jpeg}'
                        dest: '<%= yeoman.dist %>/images'
                    }]
                }
            },
            svgmin: {
                dist: {
                    files: [{
                        expand: true,
                        cwd: '<%= yeoman.app %>/images',
                        src: '**/*.svg',
                        dest: '<%= yeoman.dist %>/images'
                    }]
                }
            },
            cssmin: {
                // By default, your `index.html` <!-- Usemin Block --> will take care of
                // minification. This option is pre-configured if you do not wish to use
                // Usemin blocks.
                dist: {
                    files: {
                        '<%= yeoman.dist %>/styles/main.css': [
                            '.tmp/styles/{,*/}*.css',
                            'styles/{,*/}*.css'
                        ]
                    }
                }
            },
            htmlmin: {
                dist: {
                    options: {
                        removeCommentsFromCDATA: true,
                        // https://github.com/yeoman/grunt-usemin/issues/44
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true,
                        conservativeCollapse: true,
                        removeAttributeQuotes: true,
                        removeRedundantAttributes: true,
                        useShortDoctype: true,
                        removeEmptyAttributes: true
                    },
                    files: [{
                        expand: true,
                        cwd: '<%= yeoman.dist %>',
                        src: ['*.html', 'views/**/*.html'],
                        dest: '<%= yeoman.dist %>'
                    }]
                }
            },
            // Put files not handled in other tasks here
            copy: {
                dist: {
                    files: [{
                        expand: true,
                        dot: true,
                        cwd: 'app',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            '*.html',
                            'views/**/*.html',
                            'lang/**/*.json',
                            'protected/*',
                            '*.json',
                            'proxies/**/*',
                            'urlPattern/**/*',
                            'images/**/*.{png,gif,webp}'
                        ]
                    }, {
                        expand: true,
                        cwd: '.tmp/images',
                        dest: '<%= yeoman.dist %>/images',
                        src: [
                            'generated/*'
                        ]
                    },
                        {
                            expand: true,
                            cwd: '<%= yeoman.app %>/bower_components/bootstrap-sass/vendor/assets',
                            dest: '<%= yeoman.dist %>',
                            src: [
                                'fonts/**/*'
                            ]
                        }
                    ]
                },
                styles: {
                    expand: true,
                    cwd: '<%= yeoman.app %>/styles',
                    dest: '.tmp/styles/',
                    src: '{,*/}*.css'
                }
            },
            concurrent: {
                server: [
                    'compass:server',
                    'copy:styles'
                ],
                test: [
                    'compass',
                    'copy:styles'
                ],
                dist: [
                    'copy:styles',
                    'imagemin',
                    'svgmin'
                ]
            },
            karma: {
                unit: {
                    configFile: 'test/karma.conf.js',
                    singleRun: true,
                    logLevel: 'DEBUG'
                }
            },
            ngAnnotate: {
                dist: {
                    files: [{
                        expand: true,
                        cwd: '.tmp/concat/scripts',
                        src: '*.js',
                        dest: '.tmp/concat/scripts'
                    }]
                }
            },
            replace: {
                dist: {
                    src: ['<%= yeoman.dist %>/index.html'],
                    overwrite: true,                                 // overwrite matched source files
                    replacements: [{
                        from: '<div class="development"></div>',
                        to: ''
                    }]
                }
            },
            uglify: {
                options: {
                    mangle: false
                },
                dist: {
                    files: {
                        '<%= yeoman.dist %>/scripts/scripts.js': [
                            '<%= yeoman.dist %>/scripts/scripts.js'
                        ]
                    }
                }
            },
            // Jasmine test
            jasmine: {
                pivotal: {
                    src: $srcFiles,
                    options: {
                        specs: $testFiles,
                        outfile: $jasmineSpecRunner,
                        keepRunner: 'true'  // keep SpecRunner/outfile file
                    }
                }
            }
        });

        grunt.registerTask('server', function (target) {
            if (target === 'dist') {
                return grunt.task.run(['build', 'connect:dist:keepalive']);
            }

            grunt.task.run([
                'clean:dist',
                'proxies-connect',
                'clean:server',
                'concurrent:server',
                'autoprefixer',
                'configureProxies',
                'copy:dist',
                'connect:livereload',
                'watch'
            ]);
        });

        grunt.registerTask('test', [
            'clean:server',
            'concurrent:test',
            'autoprefixer',
            'connect:test',
            'karma'
        ]);

        grunt.registerTask('build', [
            'clean:dist',
            'useminPrepare',
            'compass:dist',
            'concurrent:dist',
            'useminPrepare',
            'autoprefixer',
            'concat',
            'copy:dist',
            'ngAnnotate',
            'cssmin',
            'replace',
            'uglify',
            'rev',
            'usemin',
            'htmlmin',
            'karma'
        ]);


        grunt.registerTask('default', [
            'log',
            'build'
        ]);

        grunt.registerTask('log',function(){
            grunt.log.writeln('appPath:<%= yeoman.app %>');
            grunt.log.writeln('distPath:<%= yeoman.dist %>');
        });

        grunt.registerTask('proxies-connect', function()
        {

            try {
                grunt.file.expand('./app/proxies/**/*.json').forEach(function(dir){

                    var proxyValues = require(dir).modules;

                    for( var key in proxyValues)
                    {
                        var proxyValue= proxyValues[key];

                        $varProxies.push({
                            context:  proxyValue.context,
                            host: proxyValue.host,
                            port: proxyValue.port,
                            https: proxyValue.https,
                            changeOrigin: proxyValue.changeOrigin
                        });
                    }
                    console.log('After : '+$varProxies)
                });

                grunt.verbose.ok();
            } catch(e) {

                grunt.fail.warn('error in proxies');
            }

        });

        grunt.registerTask('validate-bower-versions', function()
        {
            try {

                var compareJSON = function(obj1, obj2) {
                    var ret = {};
                    for(var i in obj2) {
                        if(!obj1.hasOwnProperty(i) || obj2[i] !== obj1[i]) {
                            ret[i] = obj2[i];
                        }
                    }
                    return ret;
                };

                var standredBowerVersion =  grunt.file.readJSON('./standred.json').dependencies;

                var applicationBowerVersions = grunt.file.readJSON('./bower.json').dependencies;


                console.log("The difference is"+ JSON.stringify(compareJSON(standredBowerVersion, applicationBowerVersions)))

            } catch(e) {

                grunt.fail.warn('Exception occured in Grunt task # validate-bower-versions'+e.stack);
            }
        });
    };

}());
