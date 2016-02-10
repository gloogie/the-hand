'user strict';

angular.module('terminator')
.factory('PlayList', ['Step', function (Step) {

    function PlayList(playListName, steps) {
        this.playListName = playListName;
        this.steps = steps;
    }

    PlayList.build = function(playListName) {
        var steps = [
            Step.build(1)
        ];
        return new PlayList(playListName, steps);
    }

    return PlayList;
}]);
