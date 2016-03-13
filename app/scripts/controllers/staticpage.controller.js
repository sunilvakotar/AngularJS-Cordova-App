(function(){
    'use strict';
    app.config(function ($stateProvider) {
            $stateProvider
                .state('staticpage', {
                    parent: 'site',
                    url: '/staticpage',
                    data: {
                        roles: []
                    },
                    views: {
                        'content@': {
                            templateUrl: 'views/static-page.html',
                            controller: 'StaticPageController'
                        }
                    }
                });
        })
        .controller('StaticPageController', function ($q, $scope, $httpapi, $log) {
        $scope.fetchAllStaticPages = function () {
            $httpapi.get("http://staticpage.json", {}, {}).then(function(response) {
                $log.debug("All Static page length:"+response.length);
                $scope.pagesLength = response.length;
            }, function(errorMessage) {
                console.log(errorMessage);
            });

        };

        $scope.getStaticPage = function(pageId){

        };
    });
}());
