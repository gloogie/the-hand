'user strict';

angular.module('terminator')
    .factory('Step', ['$http', 'ConfigService', 'Hand', function ($http, ConfigService, Hand) {

        function Step(order, hand) {
            this.order = order;
            this.hand = hand;
        }

        Step.build = function(order) {
            return new Step(order, Hand.build());
        }

        Step.buildFromLastStep = function(order, hand) {
            return new Step(order, angular.copy(hand));
        }

        return Step;
    }]);