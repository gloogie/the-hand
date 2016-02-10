'use strict';

angular.module('terminator')
    .controller('ConfigController', [
        '$scope',
        'ConfigService',
        function ($scope, ConfigService) {
            $scope.settings = ConfigService.get();

            $scope.saveSettings = function() {
                ConfigService.save($scope.settings);
            }
        }]);
