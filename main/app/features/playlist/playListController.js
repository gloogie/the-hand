'use strict';

angular.module('terminator')
    .controller('PlayListController', [
        '$scope',
        '$timeout',
        'PlayListService',
        function ($scope, $timeout, PlayListService) {
            $scope.playLists = PlayListService.get();

            $scope.addNewPlayList = function() {
                $scope.playLists = PlayListService.add();
            };

            $scope.editPlayList = function(item) {
                $scope.currentPlayList = item;
            };

            $scope.addStep = function() {
                PlayListService.addStep($scope.currentPlayList);
                PlayListService.save($scope.playLists);
            };

            $scope.callAPI = function(item) {
                console.log('callAPI');
                console.log(item);
                PlayListService.callAPI(item);
            };

            $scope.runSteps = function(playList) {
                angular.forEach(playList.steps, function (value, key) {
                    $timeout(function() {
                        PlayListService.callAPI(value.hand);
                    }, 500*value.order, true, value.hand);
                });
            };

            $scope.save = function() {
                PlayListService.save($scope.playLists);
            };
        }]);
