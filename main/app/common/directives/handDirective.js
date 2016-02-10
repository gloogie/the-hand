angular.module('ui.hand', [])
    .directive('robotHand', [function () {
        return {
            restrict: 'EA',
            scope: {
                editable: '=',
                handModel: '=',
                scale: '='
            },
            template: '<div  style="height: {{500 * scale}}px;" class="hand"> ' +
            '<div style="height: {{210 * scale}}px; margin-top: {{300 * scale}}px; width: {{180 * scale}}px; border-radius: {{20 * scale}}px;" class="pome">' +
            '</div> <div style="margin-top:{{90* scale}}px; height : {{210* scale}}px; margin-left:{{5 * scale}}px; margin-right: {{ 5 * scale}}px; border-radius :{{20 * scale}}px; width : {{35 * scale}}px;" class="finger auricular">' +
            ' <p style="font-size: {{15 *scale}}px; padding-top: {{50 * scale}}px; width: {{35 * scale}}px;" class="info">{{auricular.rotation}}</p> ' +
            '<div id="rotation" class="rotation" style="height: {{(auricular.rotation * 100) / 180}}%"></div> ' +
            '</div> <div style="margin-top:{{40* scale}}px; height : {{260* scale}}px; margin-left:{{5 * scale}}px; margin-right: {{ 5 * scale}}px; border-radius :{{20 * scale}}px; width : {{35 * scale}}px;"  class="finger ringFinger"> ' +
            '<p style="font-size: {{15 *scale}}px;padding-top: {{50 * scale}}px; width: {{35 * scale}}px;" class="info">{{ringFinger.rotation}}</p> ' +
            '<div id="ringFingerRotate" class="rotation" style="height: {{(ringFinger.rotation * 100) / 180}}%"></div> ' +
            '</div> <div style="margin-top:{{0* scale}}px; height : {{300* scale}}px; margin-left:{{5 * scale}}px; margin-right: {{ 5 * scale}}px; border-radius :{{20 * scale}}px; width : {{35 * scale}}px;" class="finger major "> ' +
            '<p  style="font-size: {{15 *scale}}px;padding-top: {{50 * scale}}px; width: {{35 * scale}}px;" class="info">{{major.rotation}}</p> ' +
            '<div id="majorfingerRotate" class="rotation" style="height: {{(major.rotation * 100) / 180}}%">' +
            '</div> </div> <div style="margin-top:{{20* scale}}px; height : {{280* scale}}px; margin-left:{{5 * scale}}px; margin-right: {{ 5 * scale}}px; border-radius :{{20 * scale}}px; width : {{35 * scale}}px;"  class="finger index">' +
            ' <p style="font-size: {{15 *scale}}px;padding-top: {{50 * scale}}px; width: {{35 * scale}}px;" class="info">{{index.rotation}}</p> ' +
            '<div id="indexfingerRotate" class="rotation" style="height: {{(index.rotation * 100) / 180}}%"></div> ' +
            '</div> <div style="margin-top:{{250 * scale}}px; height : {{150* scale}}px;margin-left:{{5 * scale}}px; margin-right: {{ 5 * scale}}px; border-radius :{{20 * scale}}px; width : {{35 * scale}}px;"  class="finger thumb">' +
            ' <p style="font-size: {{15 *scale}}px;padding-top: {{50 * scale}}px; width: {{35 * scale}}px;" class="info">{{thumb.rotation}}</p> ' +
            '<div id="thumbRotate" class="rotation" style="height: {{(thumb.rotation * 100) / 180}}%"></div> ' +
            '</div> </div>',

            compile: function (element, attributes) {
                return {
                    pre: function (scope, element, attributes, controller, transcludeFn) {
                        if (scope.editable) {
                            scope.major = new Finger(element[0].getElementsByClassName("major")[0], scope, scope.handModel.major);
                            scope.index = new Finger(element[0].getElementsByClassName("index")[0], scope, scope.handModel.index);
                            scope.auricular = new Finger(element[0].getElementsByClassName("auricular")[0], scope, scope.handModel.auricular);
                            scope.thumb = new Finger(element[0].getElementsByClassName("thumb")[0], scope, scope.handModel.thumb);
                            scope.ringFinger = new Finger(element[0].getElementsByClassName("ringFinger")[0], scope, scope.handModel.ringFinger);
                        }
                    },
                    post: function (scope, element, attributes, controller, transcludeFn) {


                    }
                }
            },

            controller: ['$scope', function ($scope) {
                $scope.handID = $scope.$id;
            }]
        }
    }]);


function Finger(element, scope, rotation) {
    this.rotation = rotation;
    var self = this;
    var domFingerElement = element;
    domFingerElement.addEventListener('mousewheel',
        function (event, majorfinger) {

            var fingerRotation = domFingerElement.getElementsByClassName('rotation')[0];
            if (event.deltaY < 0 && self.rotation <= 170) {
                self.rotation+=10;
            }
            if (event.deltaY > 0 && self.rotation >= 10) {
                self.rotation-=10;
            }

            var height = (self.rotation * 100) / 180;
            fingerRotation.style.height = height + '%';

            scope.handModel.thumb=scope.thumb.rotation;
            scope.handModel.index=scope.index.rotation;
            scope.handModel.major=scope.major.rotation;
            scope.handModel.ringFinger=scope.ringFinger.rotation;
            scope.handModel.auricular=scope.auricular.rotation;


            scope.$apply();
            event.preventDefault();
        },
        false);
}