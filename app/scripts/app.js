var app = angular.module('PlatinumCardApp',['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                templateUrl: 'views/static-page.html',
                controller: 'testController'
            });
            /*$routeProvider.when('/static', {
                templateUrl: 'views/static-page.html',
                controller: 'testController'
            });*/

            $urlRouterProvider.otherwise('/app');
        })
    .controller('testController', function($scope){
        $scope.addedPages = 3;
        return $scope.addedPages;
    });


    /*.run(function ($rootScope, $location, $http, $state, Auth, Principal) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;

            $http.get('protected/authentication_check.gif', { ignoreErrors: true })
                .error(function() {
                    if ($rootScope.toState.data.roles.length > 0) {
                        Auth.logout();
                        $state.go('login');
                    }
                });

            if (Principal.isIdentityResolved()) {
                Auth.authorize();
            }
        });
        $rootScope.$on("$stateChangeSuccess",  function(event, toState, toParams, fromState, fromParams) {

            if (Principal.isAuthenticated() && Principal.isChangePassword() && toState.name !== 'password') {
                $state.go('password');
            }
            $rootScope.previousState_name = fromState.name;
            $rootScope.previousState_params = fromParams;
        });
        $rootScope.back = function() {
            if ($rootScope.previousState_name === 'activate') {
                $state.go('home');
            } else {
                $state.go($rootScope.previousState_name,$rootScope.previousState_params);
            }
        };
    })
    .config(function ($stateProvider,$urlRouterProvider,$httpProvider,$locationProvider,$translateProvider,tmhDynamicLocaleProvider,httpRequestInterceptorCacheBusterProvider,datepickerConfig,blockUIConfig,egsLoggerProvider) {
        datepickerConfig.showWeeks = false;
        httpRequestInterceptorCacheBusterProvider.setMatchlist([ /.*protected.*//*], true);

        egsLoggerProvider.setEndPoint('app/rest/logger');
        egsLoggerProvider.setLogKey('cui');
        *//* To set limit *//*
        egsLoggerProvider.setLimit(10,5);//Not mandatory




        // alternatively, register the interceptor via an anonymous factory
        $httpProvider.interceptors.push(function($q, $rootScope, $location) {

            return {
                'request': function(config) {
                    return config;
                },

                'requestError': function(rejection) {

                    return $q.reject(rejection);
                },

                'response': function(response) {

                    if(response.status === 401) {

                    }
                    return response;
                },

                'responseError': function(rejection) {

                    if(rejection.status === 401) {

                    }
                    return $q.reject(rejection);
                }
            };
        });

        $urlRouterProvider.otherwise('/');
        $stateProvider.state('site', {
            'abstract': true,
            views: {
                'navbar@': {
                    templateUrl: 'views/navbar/navbar.html'
                }
            },
            resolve: {
                authorize: ['Auth',
                    function (Auth) {
                        return Auth.authorize();
                    }
                ]
            }
        });

        // Initialize angular-translate
        $translateProvider.useStaticFilesLoader({
            prefix: 'lang/i18n/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useCookieStorage();

        tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
        tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');

        blockUIConfig.requestFilter = function (config) {
            // Do not block getMappingData for common admin
            if (config.url.indexOf('app/rest/common/master/getMappingData') > -1) {
                return false;
            }
            if (config.url.indexOf('/rest/CommonUIJson/sample-output/FieldMappingData.json') > -1) {
                return false;
            }
        };
    });*/
