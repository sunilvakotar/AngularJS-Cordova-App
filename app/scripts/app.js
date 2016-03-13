var app = angular.module('PlatinumCardApp',['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                templateUrl: 'views/static-page.html',
                controller: 'testController'
            });

            $urlRouterProvider.otherwise('/app');
        })
    .controller('testController', function($scope){
        $scope.addedPages = 3;
        return $scope.addedPages;
    });

