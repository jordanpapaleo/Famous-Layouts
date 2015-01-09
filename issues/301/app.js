var MyApp = angular.module('MyApp', [
    'famous.angular'
]);

MyApp.controller('AppCtrl', ['$scope', '$famous',
function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Easing = $famous['famous/transitions/Easing'];
    var Transform = $famous['famous/core/Transform'];
    var EventHandler = $famous['famous/core/EventHandler'];

    $scope.mySkew = [0, 0, .3];
    $scope.myScale = function() {
        return [1.5, 1.5];
    };

    $scope.translate = new Transitionable([100, 100, 0]);

    $scope.transform = function() {
        var translate = Transform.translate(100, 100, 0);
        var skew = Transform.skew(0, 0, 0.3);
        var scale = Transform.scale(1.5, 1.5);
        return Transform.multiply(translate, Transform.multiply(skew, scale));
    };
}]);
