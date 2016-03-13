'use strict';

describe('spec.auth.controllers.StaticControllerSpec', function () {

    beforeEach(module('PlatinumCardApp'));

    var $scope, $httpBackend, controller, $log;
    beforeEach(inject(function ($injector, $rootScope, $controller, _$log_) {
        $log = _$log_;
        $httpBackend = $injector.get('$httpBackend');
        var valid_respond = readJSON('test/mock-json/staticpage.json');
        $httpBackend.whenGET('http://staticpage.json').respond(valid_respond);

        $scope = $rootScope.$new();
        controller = $controller('StaticPageController', {$scope: $scope});

    }));

    it('Should controller defined..', function(){
        console.log("Should controller defined..");
        expect(controller).toBeDefined();
    });

    it('should get all static page..', function () {
        console.log("should get all static page..");
        $httpBackend.expectGET('http://staticpage.json');
        $scope.fetchAllStaticPages();
        $httpBackend.flush();
        expect($scope.pagesLength).toBe(3);
    });

    // Log debug messages in Karma
    afterEach(function(){
        var logs = $log.debug.logs;
        var specName = 'spec.auth.controllers.StaticControllerSpec';
        if(logs.length > 0)
        {
            console.log("DEBUG Logs");
            var log;
            logs.forEach(function(entry){
                log = '['+specName+']-> ' + entry;
                console.log(log);
            });
        }

        //console.log($log.debug.logs);
    });

});
