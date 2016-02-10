'user strict';

angular.module('terminator')
    .factory('Hand', [function () {

        function Hand() {
            this.thumb = 180;
            this.index = 0;
            this.major = 0;
            this.ringFinger = 0;
            this.auricular = 0;
        }

        Hand.build = function() {
            return new Hand();
        }

        return Hand;
    }]);
