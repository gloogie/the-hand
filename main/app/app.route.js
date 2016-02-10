'use strict';

angular.module('terminator').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/config', {
                templateUrl: 'app/features/config/config.html',
                controller: 'ConfigController',
                title: 'Configuration'
            })
            .when('/playlist', {
                templateUrl: 'app/features/playlist/playlist.html',
                controller: 'PlayListController',
                title: 'Play List'
            })
            .otherwise({
                redirectTo: '/config'
            });
    }]);